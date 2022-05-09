import bodyParser from 'body-parser';
import cors from 'cors'
import mongoose from "mongoose";
import dotenv from "dotenv";
import express from 'express'
import userRouter from "./routes/user.js";

const app=express();
dotenv.config();

import postRoutes from "./routes/posts.js";
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);//???????????????
app.use("/user", userRouter);

app.get('/',(req,res)=>{
  res.send('Hello to Memories API');
});


const PORT=process.env.PORT || 5000;
// const CONNECTION_URL =
  // "mongodb+srv://war_abhishek:kEElH8ldYGdSxyYu@cluster1.bzcmz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true})
.then(()=>app.listen(PORT,()=>console.log(`server is running on port ${PORT}`)))
.catch((error)=>console.log(error))

