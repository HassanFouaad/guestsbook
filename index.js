require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();

const userRouter = require("./routes/user");
///Connect to database
require("./config");
//App MiddleWare
app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

///Define Routes
app.use("/api", userRouter);
app.use("/", (req, res) => {
  res.status(200).json("API RUNNING");
});

//Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is Listening on PORT: ${PORT}`);
});
