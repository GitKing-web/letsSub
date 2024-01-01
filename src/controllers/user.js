const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")

// create account
async function createUser(req, res, next) {
  try {
    const { fname,lname, email, phone_number, password,transaction_pin,state } = req.body;

    if (!fname || !lname || !email || !phone_number || !password || !transaction_pin || !state) {
      return res.status(422).send({ message: "Alll fields are required!" });
    }

    // check if user already exit with the given email or username
    const exit = await User.findOne({ $or: [{ phone_number, email }]});

    if (exit) {
      return res.status(403).send({ message: "An account already exists with this emaill!" });
    }

    // hash password
    const hashPassword = await bcrypt.hash(password,13);

    // save user
    const save = await User.create({
      fullname: `${fname} ${lname}`,
      email,
      phone_number,
      transaction_pin,
      state,
      password: hashPassword,
    });

    if(save){
      return res.status(201).send({ code: "Accout created!" });
    } else {
      return res.status(400).send({ message: "An error occurred!" });
    }

  } catch (error) {
    res.status(500);
    next(error);
  }
}

// login account
async function loginUser(req, res, next) {
  try {
    const { phone,password } = req.body;
    if(!phone || !password) return res.status(400).send({ message: "All Fields Are Required!" });
    
    // find user by phone
    const user = await User.findOne({ phone_number: phone });
    if(!user) return res.status(401).send({ message: "Incorrect Login Details, Please Try Again" });

    // check if account was block
    if(user.isActive) return res.status(405).send({ message: "Sorry, Your Account Have Been Blocked By Admin. Please Contact Admin For Futher Support"}) 
    
    // validate password
    const isPassword = await bcrypt.compare(password,user.password);
    if(!isPassword) return res.status(401).send({ message: "Incorrect Login Details, Please Try Again" });

    return res.status(201).send({ message: "Logged in!" });
  } catch (error) {
    next(error);
  }
}

// get profile info
async function getUser(req, res, next) {
  try {
    return res.status(200).send({ message: "profile" });
  } catch (error) {
    next(error);
  }
}

// get user transaction history
async function getUserTransactionHistory(req, res, next) {
  try {
    return res.status(200).send({ message: "user history" });
  } catch (error) {
    next(error);
  }
}

// reset password
async function resetPassword(req, res, next) {
  try {
    return res.status(200).send({ message: "reset password" });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createUser,
  loginUser,
  getUser,
  getUserTransactionHistory,
  resetPassword,
};
