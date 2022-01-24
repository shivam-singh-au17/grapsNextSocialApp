
const config = require("../../config");
const passport = require("passport");
const { v4: uuidv4 } = require('uuid');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const UserAuthLayer = require("../model/authLayer");
const newToken = require("../controller/service");

passport.use(new GoogleStrategy({
    clientID: config.GOOGLE_CLIENT_ID,
    clientSecret: config.GOOGLE_CLIENT_SECRET,
    callbackURL: config.GOOGLE_CALLBACK_URL,
    passReqToCallback: true
},
    async function (request, accessToken, refreshToken, profile, done) {

        try {
            // check if a user with that email already exists
            let user = await UserAuthLayer.findOne({ email: profile?._json?.email }).lean().exec();

            console.log(profile);
            // if not user then create an user
            if (!user) {
                user = await UserAuthLayer.create({
                    email: profile?._json?.email,
                    password: uuidv4(),
                });
            }
            const token = newToken(user).newToken;
            user.token = token;
            return done(null, user);

        } catch (err) {
            return done(null, err)
        }

    }
));

module.exports = passport;


