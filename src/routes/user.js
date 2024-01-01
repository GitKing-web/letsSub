const { Router } = require("express");
const { createUser, loginUser } = require("../controllers/user");

const userRouter = Router();

// register user
userRouter.post("/register", createUser);

// login user
userRouter.post("/login", loginUser);

module.exports = userRouter;
