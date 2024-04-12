const express = require("express");
const mongoose = require("mongoose");
const app = express();
const {
  MONGO_IP,
  MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_USER,
} = require("./config/config");

const mongoUrl = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;
mongoose
  .connect(mongoUrl)
  .then(() => console.log("connected"))
  .catch((e) => console.log(e));

app.get("/", (req, res) => {
  res.send("<h2> Okay mddlllllmkkkkmcdddkkk</h2>");
});

app.listen(process.env.PORT || 6000, () => {
  console.log("running");
});
