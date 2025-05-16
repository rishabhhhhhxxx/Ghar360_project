import express from 'express';
import { updateUser, test, deleteUser, getUserListings } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
//import { verifyToken } from '../utils/verifyUser.js';


const userRouter = express.Router();

userRouter.get('/test', test);
userRouter.put('/update/:id' , updateUser); // new update route
userRouter.delete('/delete/:id' , deleteUser);
userRouter.get('/listings/:id' ,verifyToken, getUserListings);

export default userRouter ;