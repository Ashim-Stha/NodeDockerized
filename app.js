const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h2> Okay mddllllldddkkk</h2>");
});

app.listen(process.env.PORT || 6000, () => {
  console.log("running");
});
