const User = require("../models/User");
const bcrypt = require("bcryptjs");
const passport = require('passport');


exports.loginUser = (req, res, next) => {
  console.log('login route hit');
  passport.authenticate('local', (err, user, info) => {
    if (err) throw err;
    if (!user) res.json({ success: false, message: 'Incorrect Credentials'});
    else {
      req.login(user, error => {
        if (error) throw error;
        console.log(user, error);
        res.json({ success: true, data: user});
      })
    }
  })(req, res, next)
}

exports.getUser = (req, res) => {
  console.log('user route hit');
  console.log(req.isAuthenticated());
  res.send(req.user);
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

exports.logoutUser = (req, res) => {
    req.logout();
    res.json({ success: true, message: 'You have been logged out' });
}

