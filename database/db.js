import mongoose from "mongoose";

const db=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('database connected successfully');
    }
    catch(error){
        console.log(error);
        console.log('database not connected');
    }
    
}

export default db;