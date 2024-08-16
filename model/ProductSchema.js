import mongoose from "mongoose";
const Schema = mongoose.Schema;
const productSchema = new Schema({
    Userid:{
    type:Schema.ObjectId,
     ref:"User"
    },
    product_id:{
        type:Number,
        require:true
    },
 product_name:{
    type:String,
    require:true
 },
 product_qty:{
    type:Number,
    require:true
 },
 product_price:{
    type:Number,
    require:true
 }

},{timestamps:true});

const Productlist = mongoose.model("productlist", productSchema, "productlist");

export default Productlist;
