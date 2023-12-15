const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const mailRouter = require("./router");

app.use("/info", mailRouter);

app.use((req, res, next) => {
  res.send("sorry cant find any document");
});

app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});
