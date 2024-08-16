import "dotenv/config";
let envKey = {
    PORT: process.env.PORT,
  DATABASE_URI: process.env.DATABASE_URI,
  SERVER_URL: process.env.BASE_URL,
  FRONT_URL: process.env.FRONT_URL,
  SECRETKEY: process.env.SECRETKEY,
};

export default { ...envKey };
