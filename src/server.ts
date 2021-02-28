import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import AppError from '../src/errors/AppError';
import uploadConfig from './config/upload';
import './database';
import routes from './routes';
const app = express();
app.use(cors());
app.use(express.json());
app.use('/files',express.static(uploadConfig.directory));
app.use(routes);

app.use((err:Error,request:Request,response:Response,next:NextFunction  ) => {


  if(err instanceof AppError){

    return response.status(err.statusCode).json({
      status:'error',
      message:err.message,


    });
  }
  return response.status(500).json({
    status:'error',
    message:'Internal server error',
  })
})

app.listen(3333,()=>{
  console.log('backend estarted')
})
