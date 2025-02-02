const UserModel = require("../Models/user");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: "User is already exist you can login",
        success: false,
      });
    }
    const userModel = new UserModel({ name, email, password });
    UserModel.password = await bcrypt.hash(password, 10);
    await userModel.save();
    res.status(201).json({ message: "Sign Up successfully", status: true });
  } catch (err) {
    res.status(500).json({
        message : 'Internal server error',
        success : false
    })
  }
};
module.exports = {
  signup,
};
