
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const authLayerSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        mobile: { type: String, required: true },
        password: { type: String, required: true, minlength: 8 },
    },
    {
        versionKey: false,
        timestamps: true
    }
);


authLayerSchema.pre("save", function (next) {

    if (!this.isModified("password")) {
        return next();
    }

    bcrypt.hash(this.password, 8, (err, hash) => {
        if (err) {
            return next(err);
        }
        this.password = hash;
        next();
    });
});



authLayerSchema.methods.checkPassword = function (password) {
    const passwordHash = this.password;
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, passwordHash, (err, same) => {
            if (err) {
                return reject(err);
            }
            resolve(same);
        });
    });
};

const UserAuthLayer = mongoose.model("authLayer", authLayerSchema);

module.exports = UserAuthLayer;

