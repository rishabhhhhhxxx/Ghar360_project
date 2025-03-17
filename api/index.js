import express from 'express';

const app=express(); 

app.listen(3000 , ()=>{
    console.log("server is running at port 3000")
});
//the express port should be diffrent from the default vite port 5173



