import express from 'express';
import { signup , signin, google , Signout} from '../controllers/auth.controller.js';

const authRouter = express.Router();
authRouter.post('/signup',signup);
authRouter.post('/signin',signin);
authRouter.post('/google',google);
authRouter.get('/signout',Signout);

export default authRouter ;