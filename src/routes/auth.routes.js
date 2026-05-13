const express = require('express');
const authController = require("../controller/auth.controller")


const router = express.Router();

router.post("/register",(req,res)=>{
    authController.registerUser(req,res);
})

module.exports= router;