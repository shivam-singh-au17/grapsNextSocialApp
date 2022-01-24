const express = require("express");
const connect = require("./configs/db");
const router = require("./controller");
const passport = require("./configs/passport");

const app = express();
app.use(express.json());
app.use(passport.initialize());

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});


app.get('/auth/google/failure', (req, res) => {
    return res.send("Something Went Wrong")
}
);


app.get('/auth/google',
    passport.authenticate('google', {
        scope: [
            'https://www.googleapis.com/auth/plus.login',
            'https://www.googleapis.com/auth/userinfo.email'
        ]
    })
);

// app.get('/auth/google/callback',
//     passport.authenticate('google', {
//         successRedirect: '/auth/google/success',
//         failureRedirect: '/auth/google/failure'
//     })
// );

app.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/auth/google/failure'
    }),
    function (req, res) {
        return res.send({ user: req.user });
    }
);

app.use("/", router) // besause of index.js file 


app.listen(3333, async () => {
    await connect();
    console.log("Listening on port 3333");
});

