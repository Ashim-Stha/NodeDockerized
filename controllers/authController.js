const User = require("../models/userModel");

const bcrypt = require("bcryptjs");
exports.signUp = async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      username,
      password: hashPassword,
    });

    res.status(200).json({
      status: "success",
      data: {
        newUser,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
    });

    console.log(e);
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    const isCorrect = await bcrypt.compare(password, user.password);
    if (isCorrect) {
      return res.status(200).json({
        status: "success",
      });
    } else {
      return res.status(400).json({
        status: "fail",
        message: "incorrect password",
      });
    }
  } catch (e) {
    return res.status(400).json({
      status: "failed",
    });
  }
};
