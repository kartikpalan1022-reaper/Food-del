import userModel from "../models/userModels.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// Login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try{
        const user = await userModel.findOne({email});
        if(!user){
            res.json({ success: false, message: "User not found" });
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            res.json({ success: false, message: "Invalid credentials" });
        }

        const token = createToken(user._id);
        res.json({ success: true, message: "User logged in successfully", token });
    
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error logging in" });
    }
}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
}


// Register user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try{
        // check if user already exists
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({ success: false,message: "User already exists" }); 
        }
        // validate email
        if(!validator.isEmail(email)){
            return res.json({ success: false,message: "Invalid email" });
        }
        // validate password
        if(!validator.isStrongPassword(password) && password.length < 8){
            return res.json({ success: false,message: "Weak password" });
        }
        //hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name:name,
            email:email,
            password: hashedPassword
        });

        const user = await newUser.save();
        const token = createToken(user._id);

        res.json({ success: true, message: "User registered successfully", token });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error registering user" });
    }
}


export { loginUser, registerUser };