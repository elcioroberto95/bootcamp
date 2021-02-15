import crypto from 'crypto';
import multer from 'multer';
import path from 'path';
const tempFolder = path.resolve(__dirname,'..','..','tmp')

export default {
  directory:path.resolve(__dirname,'..','..','tmp'),
  storage:multer.diskStorage({
    destination:tempFolder,
    filename(request,file,callback){

      const fileHash = crypto.randomBytes(10).toString('HEX')
      const fileName = `${fileHash}-${file.originalname}`;
      return callback(null,fileName);
    }
  })
}
