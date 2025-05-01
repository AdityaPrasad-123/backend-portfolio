import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import db from './database/db.js'
import userRouter from './routes/userRoute.js';



const app=express();

dotenv.config();

const port=process.env.PORT || 3000
db();


app.use(express.json());
app.use(cors());

app.use('/user',userRouter);

app.listen(port,()=>{
    console.log(`server is running on port:${port}`);
})
