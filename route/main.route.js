import express from 'express';
import User from './user.route.js'
const Router = express();

Router.use('/userRouter', User)


export default Router;