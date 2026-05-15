const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/create",(req,res)=>{
    
    const token = req.cookies.token;

    if(!token){
        res.status(401).json({
            message:"Unauthorized access"
        })
    }
    try{
        const decoded =jwt.verify(token,process.env.JWT_SECRET) //~ye verify karega ki jo token jaa rha hai wo valid hai ya nahi
        console.log(decoded);
        
    }catch(err){
        return res.status(401).json({
            message:"Wrong Token"
        })
    }
    res.send("Post created successfully")
})
module.exports = router;