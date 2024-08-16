import {Userlist} from "../model/index.js"
import config from "../config/index.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const UserRegister=async(req,res)=>{
    try{
const {userName,email,countrycode,phone,password}=req.body

if(await Userlist.exists({email})){
    return res.status(400).json({ status: false, message: "Email Already exists"});
}
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new Userlist({
    user_name: userName,
      email,
      country_code:countrycode,
      phone,
      password: hashedPassword
  });

  await newUser.save();

  return res.status(201).json({ status: true, message: "User registered successfully" });

    }catch(err){
    console.log(err);
    return res.status(500).json({ status: false, message: "SOMETHING_WRONG" });
    } 
}

export const UserLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await Userlist.findOne({ email });
        if (!user) {
            return res.status(400).json({ status: false, message: "Invalid email or password" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ status: false, message: "Invalid email or password" });
        }

        const token = jwt.sign(
            { userId: user._id },
            config.SECRETKEY, 
        );
        return res.status(200).json({ status: true, message: "Login successful", token: `Bearer ${token}` });

    } catch (err) {
        return res.status(500).json({ status: false, message: "SOMETHING_WRONG" });
    }
};

