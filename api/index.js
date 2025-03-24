import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config() ;
console.log("MongoDB URI:", process.env.MONGO);
console.log("JWT Secret:", process.env.JWT_SECRET);


mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to mongodb")
}).catch((err)=>{
    console.log(err);
});

const app=express(); 
app.use(express.json());

app.listen(3000 , ()=>{
    console.log("server is running at port 3000")
});

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);

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
