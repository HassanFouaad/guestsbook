const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

/////Sign UP Controller
exports.signUp = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    ///Check if user exitsts
    let user = await User.findOne({ email }).select("-password");

    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    //Creating New User
    user = new User({
      firstname,
      lastname,
      email,
      password,
    });

    //Encrypt Password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    //Saving User
    await user.save();

    //Return JSONWEBTOKEN
    const payload = {
      user,
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ user, token });
      }
    );
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};

///Sign In Controller
exports.signIn = async (req, res) => {
  let { email, password } = req.body;
  try {
    ///Check if user exitsts
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        error: "Username doesn't exists, Please Signup and try again",
      });
    }

    ///Check if password match
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invaild Credentials" });
    }

    const payload = {
      user,
    };

    //Returning Token
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token, user });
      }
    );
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
};
