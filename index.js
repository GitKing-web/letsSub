require("dotenv").config();
const app = require("./src/app");
const connectDb = require("./src/configs/db");

const PORT = process.env.PORT || 3000;

connectDb()
  .then(() => {
    console.log("Db connected");
    app.listen(PORT, () => console.log("Server running on port...", PORT));
  })
  .catch((error) => console.error(error));
