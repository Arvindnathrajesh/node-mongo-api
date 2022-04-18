const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const userModel = mongoose.model("User")
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")

router.post("/register",(req,res)=>{

    const newUser= new userModel();

    newUser.userName = req.body.userName
    newUser.password = CryptoJS.AES.encrypt(req.body.password, 'secret key 123').toString()
    newUser.email = req.body.email

    newUser.save((err,docs)=>{
        if(!err)
        {
            res.status(201).json({message: "Successfull", status: "OK", data: docs})
        }
        else
        {
            res.status(500).json(err)
        }
    })

})

router.post("/login", async (req,res)=>{

    try {

        const user =  await userModel.findOne(
            {
                userName: req.body.userName
            }
        );
        if(!user)
        {
            console.log(user)
            res.status(401).json({status:"Not Ok", message: "Failed", error: "Wrong User name"})
            return
        }
        
        const hashedPassword = CryptoJS.AES.decrypt( user.password, 'secret key 123')
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)
        const inputPassword = req.body.password
        if(originalPassword != inputPassword)
        {
            res.status(401).json("Wrong Password");
        }
        
        const { password, ...others } = user._doc;  

        const accesToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin
            },
            'abcd',
            {expiresIn:"3d"}
        )

        res.status(200).json({...others, accesToken})

    }catch(err){
        res.status(500).json(err);
    } 
            
})

module.exports = router;