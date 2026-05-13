const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

async function registerUser(req,res){
    const {username,email,password} = req.body;

    const user = await userModel.create({
        username,email,password
    })

    const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
    res.cookie("token",token) //& yha pe jo token generate hua hai usko cookie me store kar rahe hai
    res.status(201).json({
        message:"User registered sucessfully",
        user,
    })
}
module.exports= {registerUser};