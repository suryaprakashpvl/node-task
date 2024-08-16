import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import config from "../config/index.js";
import {Userlist} from "../model/index.js";

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.SECRETKEY
};

export const userAuth = (passport) => {
  try {
    passport.use(
      "userAuth",
      new JwtStrategy(opts, async (jwt_payload, done) => {
        try {
          console.log(jwt_payload,"jwt_payload");
          
          const userData = await Userlist.findById(jwt_payload.userId);
          console.log(userData,"jwt_payload");

          if (userData) {
            const user = {
              userId: userData._id,
              email: userData.email,
              country_code: userData.country_code,
              phone: userData.phone,
            };

            return done(null, user);
          }

          return done(null, false);
        } catch (err) {
          return done(err, false);
        }
      })
    );
  } catch (err) {
    console.log(err);
  }
};
