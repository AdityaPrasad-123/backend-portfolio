
import bcryptjs from 'bcryptjs'
import userModel from '../model/userModel.js';


const userRegister=async(req,res)=>{
    try{
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
          return res.status(400).json({ success: false, message: "All details are required" });

        }
        const user= await userModel.findOne({email});
        if(user){
            return res.status(400).json({ success: false, message: "user already registered" });

        }
      
        const hashedPassword =await bcryptjs.hash(password,10)

     const userCreated= new userModel({
        name,
        email,
        password:hashedPassword
     });
       
        await userCreated.save();

        return res.status(200).json({ success: true, message: "user registered successfully" });
           

    }catch(error){
        console.log(error);
        return res.status(500).json({ success: false, message: "Internal server error" });

    }
}



const login=async (req,res)=>{

    try{
         const {email,password}=req.body;

         if(!email || !password){
            return res.status(400).json({ success: false, message: "All details are required" });
         }
         const user=await userModel.findOne({email});
         if(!user){
            return res.status(400).json({status:false,message:'user not found'});
         }

         const matchPassword= await bcryptjs.compare(password,user.password);
         if (!matchPassword) {
            return res.status(400).json({ success: false, message: "Invalid password" });
          }
          return res.status(200).json({status:true,message:'user login successfully'});
    }catch(error){

        console.log(error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}


const userLogout = (req, res) => {
  
    return res.status(200).json({
      success: true,
      message: "User logged out successfully"
    });
  };

export  {userRegister,login,userLogout};