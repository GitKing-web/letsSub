const { getData, buyData } = require("../controllers/buy-data");

const buyDataRouter = require("express").Router();

buyDataRouter.get("/get-data", getData);

buyDataRouter.post("/buy-data", buyData);

module.exports = buyDataRouter;
