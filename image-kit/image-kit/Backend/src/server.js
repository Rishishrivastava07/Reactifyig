const app = require("./app");
const connectDB = require("../db/db");
require("dotenv").config();

connectDB();

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});
