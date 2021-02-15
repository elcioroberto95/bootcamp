import fs from 'fs';
import path from 'path';
import { getRepository } from 'typeorm';
import uploadConfig from '../config/upload';
import AppError from '../errors/AppError';
import Users from '../models/User';
interface Request {
  user_id:string;
  avatarFilename:string;
}

class UpdateUserAvatarService {
  public async execute({user_id,avatarFilename}:Request):Promise<Users>{

    const userRepository = getRepository(Users);
    const user = await userRepository.findOne(user_id);

    if(!user){
      throw new AppError('Only authenticated users can change avatar',401);
    }

    if(user.avatar){
      //delete previos avatar
      const userAvatarFilePath = path.join(uploadConfig.directory,user.avatar);

      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if(userAvatarFileExists){
        await fs.promises.unlink(userAvatarFilePath);
      }

    }


    user.avatar = avatarFilename;
    await userRepository.save(user);

    return user;

  }
}
export default UpdateUserAvatarService;
