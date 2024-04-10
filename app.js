const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h2> Okay mdk</h2>");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("running");
});
