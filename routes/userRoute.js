
import express from 'express'
import {userRegister,login,userLogout} from '../controllers/userController.js';

const userRouter=express.Router();
userRouter.post('/register',userRegister);
userRouter.post('/login',login);
userRouter.post('/logout',userLogout);

export default userRouter