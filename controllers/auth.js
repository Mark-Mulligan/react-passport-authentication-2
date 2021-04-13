const User = require("../models/User");


exports.loginUser = (req, res) => {

}

exports.registerUser = (req, res) => {
  const { username, password } = req.body; 

  User.findOne({ username: username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send('User already exsits');
    if (!doc) {
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        username: username,
        password: hashedPassword
      })

      await newUser.save();
      res.send("User Created");
    }
  })
}