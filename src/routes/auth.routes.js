const express = require('express');
const authController = require("../controller/auth.controller")


const router = express.Router();

router.post("/register",(req,res)=>{
    authController.registerUser(req,res);
})

router.get("/test",(req,res)=>{
    console.log("Cookies:",req.cookies);
    res.json({
        message:"Test route",
        cookies:req.cookies
    })
})

module.exports= router;