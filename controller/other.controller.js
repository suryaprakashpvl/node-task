import {Productlist} from "../model/index.js"


function generateRandomNumber() {
    return Math.floor(Math.random() * (999999 -100000 + 1)) + 9999;
}


export const addProduct=async(req,res)=>{
    try{
        const {pname,pqty,pprice}=req.body
       const {userId}=req.user
  console.log(req.body,req.user);
  

 let addData=new Productlist({
    Userid:userId,
    product_id:generateRandomNumber(),
    product_name:pname,
    product_qty:pqty,
    product_price:pprice,
 })
 await addData.save()
 return res.status(201).json({ status: true, message: "product Added successfully" });

 }catch(err){
    console.log(err);
    
        return res.status(500).json({ status: false, message: "SOMETHING_WRONG" });
 }
}

export const updateProduct=async(req,res)=>{
    try{
        const {pname,pqty,pprice,pid}=req.body
        await Productlist.findOneAndUpdate({product_id:pid},{$set:{
            product_name:pname,
            product_qty:pqty,
            product_price:pprice,
        }},{new:true})

        return res.status(201).json({ status: true, message: "product Updated successfully" });
    }catch(err){
        console.log(err);
        return res.status(500).json({ status: false, message: "SOMETHING_WRONG" });
    }
}

export const deletProduct=async(req,res)=>{
    try{
     const {pid}=req.body
    let getData=await Productlist.findOneAndDelete({product_id:pid})
   if(getData){
    return res.status(201).json({ status: true, message: "product Deleted successfully" });
    }
    }catch(err){
    return res.status(500).json({ status: false, message: "SOMETHING_WRONG" });
    }
}


export const getProduct=async(req,res)=>{
    try{
       const {userId}=req.user
const getdata=await Productlist.find({Userid:userId}).lean()
return res.status(201).json({ status: true, message: "success",result:getdata });
    }catch(err){
        return res.status(500).json({ status: false, message: "SOMETHING_WRONG" });
    }
}