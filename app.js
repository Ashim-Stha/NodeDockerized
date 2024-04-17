const express = require("express");
const mongoose = require("mongoose");
const app = express();
const {
  MONGO_IP,
  MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_USER,
} = require("./config/config");

const postRoute = require("./routes/postRoutes");
const userRouter = require("./routes/userRoutes");

const mongoUrl = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

const connectWithRetry = () => {
  mongoose
    .connect(mongoUrl)
    .then(() => console.log("connected"))
    .catch((e) => {
      console.log(e);
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h2> Okay mddlllllmkkkkmcdddkkk</h2>");
});

app.use("/api/v1/posts", postRoute);
app.use("/api/v1/users", userRouter);

app.listen(process.env.PORT || 6000, () => {
  console.log("running");
});
