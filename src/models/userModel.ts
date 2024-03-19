import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: [true,"Please provide your username"],
        unique: true,
        trim: true
    },
    email : {
        type: String,
        required: [true,"Please provide your email"],
        unique: true,
        trim: true
    },
    password : {
        type: String,
        required: [true,"Please provide your password"],
    },
    isVerified : {
        type: Boolean,
        default : false
    },
    isAdmin : {
        type: Boolean,
        default: false
    },
    forgotPasswordToken : String,
    forgotPasswordTokenExpiry: Date,
    verifyToken : String,
    verifyTokenExpiry : Date
});

const User = mongoose.models.userSchema || mongoose.model("User", userSchema);

export default User;