const path = require("path");
const router = require("express").Router();
const { registerUser } = require('../controllers/auth');


router.post('/api/register', registerUser);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});



module.exports = router;