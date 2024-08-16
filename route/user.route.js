import express from 'express';
import passport from "passport";

import * as UserCntl from "../controller/user.controller.js";
import * as crudCntl from "../controller/other.controller.js"

import * as UserValid from "../validation/User.validation.js"
import * as crudValid from "../validation/Other.validation.js"


const Router = express();

const passportAuth = passport.authenticate("userAuth", { session: false });

// basic login,register Api
Router.route("/user_login").post(UserValid.userLoginValid,UserCntl.UserLogin)
Router.route("/user_register").post(UserValid.userRegisterValid,UserCntl.UserRegister)



// read,create,update,delete API 

Router.route("/product")
    .post(passportAuth, crudValid.addProductValid, crudCntl.addProduct)       
    .put(passportAuth, crudValid.addProductValid, crudCntl.updateProduct)     
    .delete(passportAuth, crudCntl.deletProduct)                             
    .get(passportAuth, crudCntl.getProduct);  

export default Router;