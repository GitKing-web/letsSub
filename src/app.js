const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const cookieParser = require("cookie-parser");
const { routeNotFound, errorHandler } = require("./middlewares/handler");
const userRouter = require("./routes/user");
const router = require("./routes/route");


const app = express();

app.set("view engine","ejs");

// middlewares
app.use(cookieParser());
app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"../","public")));

// routes
app.use("/", router);
app.use("/route/", userRouter);

// route not found
app.use(routeNotFound);

// error handler
app.use(errorHandler);

module.exports = app;
