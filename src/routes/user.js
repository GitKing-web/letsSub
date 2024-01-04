const { Router } = require("express");
const { createUser, loginUser,resetPassword,verifyCode,updateUserPassword } = require("../controllers/user");

const userRouter = Router();

// register user
userRouter.post("/register", createUser);

// login user
userRouter.post("/login", loginUser);


// forget password
userRouter.post("/reset", resetPassword);


//verify-code
userRouter.post("/verify", verifyCode);

//update-user-pass
userRouter.put("/update", updateUserPassword);

module.exports = userRouter;
