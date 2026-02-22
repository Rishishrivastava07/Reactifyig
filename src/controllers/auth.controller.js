const userSchema = require("../../models/user.models");
const jwt = require("jsonwebtoken");

async function registeruser(req, res) {
  try {
    const { name, email, password, age } = req.body;

    const existingUser = await userSchema.findOne({email});

    if(existingUser){
        return res.status(400).json({message: "User already exists"});
    }

    const user = await userSchema.create({ name, email, password, age });
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

      res.cookie("token", token);

    res.status(201).json({
      message: "User registered successfully",
      user,
      
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

}

module.exports = { registeruser };
