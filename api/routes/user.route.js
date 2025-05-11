import express from 'express';
import { updateUser, test } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.get('/test', test);
userRouter.put('/update/:id', updateUser); // new update route

export default userRouter ;