require("dotenv").config();
const jwt = require("jsonwebtoken");

const newToken = (user) => {
    return jwt.sign({ user: user }, process.env.JWT_SECRET_KEY);
};


const register = (model) => async (req, res) => {

    try {

        let user = await model.findOne({ email: req.body.email }).lean().exec();

        // if user exists then throw me error
        if (user) {
            return res.status(400).json({ status: "error", message: "User already exists" });
        }

        // otherwise create a user and then hash the password
        user = await model.create(req.body);

        // create a new token
        let token = newToken(user);

        // return token
        return res.status(200).send({ user, token });

    } catch (err) {
        return res.status(500).json({ status: "failed", message: "Something went wrong" });
    }
};


const login = (model) => async (req, res) => {

    try {

        // check if a user with that email already exists
        let user = await model.findOne({ email: req.body.email }).exec();

        // if not user then throw an error
        if (!user) {
            return res.status(400).json({ status: "error", message: "Wrong Email... try again" });
        }

        // if user then match the password
        const match = await user.checkPassword(req.body.password);

        // if not match then throw an error
        if (!match) {
            return res.status(400).json({
                status: "error", message: "Wrong Password... try again"
            });
        }

        // if match then create the token
        let token = newToken(user);

        // return the token to the frontend
        return res.status(200).json({ user, token });

    } catch (err) {
        return res.status(500).json({ status: "failed", message: "Something went wrong" });
    }

};


const getAllUser = (model) => async (req, res) => {
    try {
        const item = await model.find().lean().exec();
        return res.status(200).send(item);

    } catch (err) {
        return res.status(400).send(err.message);
    }
};




module.exports = (model, user) => ({
    register: register(model),
    login: login(model),
    getAllUser: getAllUser(model),
    newToken: newToken(user)
});
