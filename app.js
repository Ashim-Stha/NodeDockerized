const express = require("express");
const mongoose = require("mongoose");
const app = express();

const redis = require("redis");
const session = require("express-session");

// const RedisStore = require("connect-redis").default;
// const session = require("express-session");
// const { createClient } = require("redis");

const {
  MONGO_IP,
  MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_USER,
  REDIS_URL,
  REDIS_PORT,
  SESSION_SECRET,
} = require("./config/config");

let RedisStore = require("connect-redis")(session);
let redisClient = redis.createClient({
  host: REDIS_URL,
  port: REDIS_PORT,
});
// // Initialize client.
// let redisClient = createClient({
//   host: REDIS_URL,
//   port: REDIS_PORT,
// });
// redisClient
//   .connect()
//   .then(() => {
//     console.log("Connected to Redis");
//     // Create and use redisStore here
//   })
//   .catch(console.error);

// // Initialize store.
// let redisStore = new RedisStore({
//   client: redisClient,
//   prefix: "myapp:",
// });

const postRoute = require("./routes/postRoutes");
const userRouter = require("./routes/userRoutes");

const mongoUrl = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

const connectWithRetry = () => {
  mongoose
    .connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => console.log("connected"))
    .catch((e) => {
      console.log(e);
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();

// app.use(
//   session({
//     store: redisStore,
//     saveUninitialized: true,
//     secret: SESSION_SECRET,
//     cookie: {
//       secure: false,
//       resave: false,
//       saveUninitialized: false,
//       httpOnly: true,
//       maxAge: 30000,
//     },
//   })
// );

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: SESSION_SECRET,
    cookie: {
      secure: false,
      resave: false,
      saveUninitialized: false,
      httpOnly: true,
      maxAge: 30000,
    },
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h2> Okay mddlllllmkkkkmcdddkkk</h2>");
});

app.use("/api/v1/posts", postRoute);
app.use("/api/v1/users", userRouter);

app.listen(process.env.PORT || 6000, () => {
  console.log("running");
});
