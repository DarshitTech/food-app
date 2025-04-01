const { response } = require('express');
const userModel =  require('../models/userModels');
const bcrypt = require('bcryptjs');
const  JWT = require('jsonwebtoken');
//REGISTER


const registerController = async (req, res) => {
  try {
     const {userName, email, password, phone, address, answer} = req.body;
     //validation

     if(!userName || !email || !password || !phone || !address || !answer) {
      return res.status(500).send({
        success : false,
        message : "Please provide all required information",
      })
     }
     //check user

     const existing = await userModel.findOne({email})
     if(existing) {
      return res.status(500).send({
        success : false,
        message: "Email is already registered try to login",
      });
     }
     //hash password
     var salt = bcrypt.genSaltSync(10);
     const hashedPassword = await bcrypt.hash(password, salt);
     //create user

     const user = await userModel.create({
      userName,
      email,
      password: hashedPassword,
      phone,
      address,
      answer,

     });
     res.status(201).send({
      success : true,
      message : "User registered successfully",
      user,
     });
  }
  catch (error) {
    console.log(error);
    res.status(500).send({
      success : false,
      message : "Error registering",
      error,
    });
  }
};

//LOGIN

const loginController  = async (req, res) => {
  try {
     const {email, password} = req.body;
     //validation

     if(!email || !password) {
      return res.status(500).send({
        success : false,
        message: "Please provide a email OR password"
      })
     }
     //check user 
     const user = await userModel.findOne({email: email})
     if(!user) {
      return res.status(404).send({
        success : false,
        message: "User Not Found",
      });
     }
     //compare password
     const isMatch = await bcrypt.compare(password, user.password);
     if(!isMatch) { 
      return res.status(500).send ({
        success : false,
        message : "Invalid credentials"
      });

     }
     // token
     const token  = JWT.sign({id : user.id}, process.env.JWT_SECRET, {
      expiresIn : "7d",
     });

     user.password = undefined;
     res.status(200).send({
      success : true,
      message: "User Logged Successfully",
      token,
      user,
     });

  }
  catch (error) {
     console.log(error);
     res.status(500).send({
      success : false,
      message : "Error In login API",
      error
     })
  }
};

module.exports = {registerController, loginController};