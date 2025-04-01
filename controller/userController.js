const bcrypt = require('bcryptjs');

//GET USER INFO
const userModel =  require('../models/userModels');

const getUserController = async(req, res) => {
  // res.status(200).send("User Data");
  // console.log(req.body.id);
  try {
    const user = await userModel.findById({_id:req.body.id},  {_id : 0}); 
    //validation 
    if(!user) {
      return res.status(404).send({
        success: false,
        message: 'User not found'
      })
    }
    //hide password
    user.password = undefined;
    //resp
    res.status(200).send({
      success: true,
      message: "User get Successfully",
      user,
    });
  }
  catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message : 'Error in getting user',
      error
    })
  }
};

//UPDATE 
const updateUserController = async(req, res) => {
 try {
    //find user 
    const user = await userModel.findById({_id:req.body.id});
    //validation
    if(!user) {
      return res.status(404).send({
        success: false,
        message: 'User not found',
      })
    }
    //update 

    const {userName, address, phone} = req.body;
    if (userName) user.userName = userName;
    if(address) user.address = address;
    if(phone) user.phone = phone;

    //save user
    await user.save();
    res.status(200).send({
      success: true,
      message: 'User Updated Successfully',
    });


 }
 catch (error) {
  res.status(500).send ({
    success: false,
    message: 'Error in updating user API',
    error
  })
 }
 
  
};

const updatePasswordController = async(req, res) => {
  try {
    //find user
    //  const user = await userModel.findById({ _id: req.body.id });
    const user = await userModel.findById(req.body.id);

     //validate

     if(!user) {
      return res.status(404).send({
        success: false,
        message: 'User Not Found',

      });
     }
     //get data from user

     const {oldPassword, newPassword} = req.body;
     if(!oldPassword || !newPassword) {
      return res.status(400).send({
        success : false,
        message : 'Please provide old password or new password',
     
      });
     }
     //check password
    //  const isMatch = await bcrypt.compare(oldPassword, user.newPassword);

    const isMatch = await bcrypt.compare(oldPassword, user.password);

     if(!isMatch) {
      return res.status(400).send({
        success : false,
        message : 'Invalid old password',
      });
     }
     //hashing password
     const salt = bcrypt.genSaltSync(10);
     const  hashedPassword = await bcrypt.hash(newPassword, salt);

     //update password in database
   
     user.password = hashedPassword;
     await user.save();

     res.status(200).send({
       success : true,
       message : 'Password updated successfully',
     });
  } 
  catch (error) {
    console.log(error);
    res.status(500).send({
      success : false,
      message: 'Error updating password',
    });
  }
};

const resetPasswordController = async(req, res) => {
  try {
    const {email, newPassword, answer} = req.body;
    if(!email || !newPassword || !answer) {
      return res.status(400).send({
        success : false,
        message: 'Please provide all required information',
      });
    }
    const user = await userModel.findOne({email, answer});
    if(!user) {
      return res.status(404).send({
        success: false,
        message: 'User not found',
      });
    }

    //hashing password

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    //store password in database
    user.password = hashedPassword;
    await user.save();

    res.status(200).send({
      success: true,
      message : 'Password reset successfully',
    });


  }
  catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message : 'Error resetting password',
     
    });
  }
};

//DELETE USER
const  deleteProfileController = async(req, res) => {
 try {

   await userModel.findByIdAndDelete(req.params.id);
   return res.status(200).send({
    success: true,
    message : 'Profile deleted successfully',
   });

 } 
 catch (error) {
  console.log(error);
  res.status(500).send({
    success : false,
    message : 'Error in deleting profile',
    error,
  });
 }
};

module.exports = {getUserController, updateUserController, updatePasswordController, resetPasswordController, deleteProfileController};
