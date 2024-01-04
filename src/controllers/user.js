const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
const client = require("../configs/redis");

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
    
    // const token = jwt.sign()
    req.session.user = user;
    return res.status(201).send(true);
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
    const { email } = req.body;

    if(!email) return res.status(400).send({ message: "All Fields Are Required!" });

    // check if email does not exits
    const exitMail = await User.findOne({ email });
    if(!exitMail) return res.status(404).send({ message: "Email Not Found, Please Verify Your Email And Try Again" });

   // send mail
   const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.USERNAME,
          pass: process.env.PASSWORD
       },
    });

   // generate OTP
   const otp = otpGenerator.generate(6, {
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false
    });

   await client.connect();

   await client.set(`${exitMail._id}`, `${otp}`);

   const info = await transporter.sendMail({
    from: '"Admin" <letssub.com.ng>',
    to: "binkhalid267@gmail.com", 
    subject: "Confirmation code ✔",
    text: `Your verification code is: ${otp}`,
  });

  if(info.messageId){
    return res.status(200).send(true);
  } else {
    return res.status(400).send({ message: "An error occurred!" });
  }

  } catch (error) {
    next(error);
  }
}

// verify code
async function verifyCode(req, res, next) {
  try {
    const { email,code } = req.body;

    if(!email || !code) return res.status(422).send({ message: "All Fields Are Required!" });

    // find user by email

    const user = await User.findOne({ email });
    if(!user) return res.status(404).send({ message: "No account Found with this emaill!" });

   const value = await client.get(`${user._id}`);

   if(value === code){
    await client.del(`${user._id}`)
    return res.status(200).send(true);
   } else {
    return res.status(400).send({ message: "Invalid code!" });
   }

  } catch (error) {
    next(error);
  }
}

//update user pass
async function updateUserPassword(req, res, next) {
  try {
    const { email,password } = req.body;


    if(!email || !password) return res.status(422).send({ message: "All Fields Are Required!" });

    // find user by email
    const user = await User.findOne({ email });
    if(!user) return res.status(404).send({ message: "No account Found with this emaill!" });

    // hashed password
    const hashPassword = await bcrypt.hash(password,13);

    // update password
    user.password = hashPassword;
    const saved = await user.save();

    if(saved){
      return res.status(200).send(true);
    } else {
      return res.status(400).send({ message: "Unable to update your password." });
    }


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
  verifyCode,
  updateUserPassword
};
