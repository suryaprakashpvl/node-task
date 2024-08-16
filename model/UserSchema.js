import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
 user_name:{
    type:String,
    require:true
 },
 email:{
    type:String,
    require:true,
    unique: true,
    lowercase: true,
 },
country_code:{
    type:String,
    require:true
},
phone:{
    type:String,
    require:true
 },
 password:{
    type:String,
    require:true
 }
},{timestamps:true});


userSchema.index({ email: 1 });
userSchema.index({ phone: 1 });

const Userlist = mongoose.model("User", userSchema, "User");

export default Userlist;
