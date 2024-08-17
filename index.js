import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import mainroutes from "./route/main.route.js"
import config from './config/index.js';
import passport from 'passport';
import { userAuth } from './config/passport.js'; // Use import instead of require

const app = express();


app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from NowDigitaleasy');
});

app.get('/author', (req, res) => {
  res.send({
    Name:"surya prakash",
    Phone:"9342483321",
    github:"https://github.com/suryaprakashpvl/node-task"
  });
});

app.use("/api",mainroutes)

userAuth(passport);


app.listen(config.PORT, () => {
  console.log(`Server listening on port ${config.PORT}.`);
});

mongoose.connect(config.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB.');
}).catch(error => {
  console.error(error);
});