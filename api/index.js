import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import uploadRouter from './routes/upload.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
dotenv.config() ;
// console.log("Cloudinary ENV:", process.env.CLOUDINARY_CLOUD_NAME, process.env.CLOUDINARY_API_KEY);


mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to mongodb")
}).catch((err)=>{
    console.log(err);
});

const app=express(); 
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.listen(3000 , ()=>{
    console.log("server is running at port 3000")
});

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
app.use('/api/upload', uploadRouter);
app.use('/api/listings',listingRouter);

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500 ;
    const message = err.message || "internal server error" ;
    return res.status(statusCode).json ({
        success : false,
        statusCode,
        message ,
    });
    
})
//the express port should be diffrent from the default vite port 5173
