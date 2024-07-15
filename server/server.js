import dotenv from "dotenv"
import mongoose from "mongoose";
import express from "express";
import cors from 'cors';
import User from "./models/Users.js";
dotenv.config()
const app=express();
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("hello")
})
app.use(cors())
app.post('/register',(req,res)=>{
    User.create(req.body).then(user=>{
        res.json(user)
    }).catch((error)=>{
        res.json(error)
    })
})
const PORT=process.env.PORT || 6001
mongoose.connect('mongodb://127.0.0.1:27017/Users')
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`)
    })
}).catch((error)=>{
    console.log(error);
})
