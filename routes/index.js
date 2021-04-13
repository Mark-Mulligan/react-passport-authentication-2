const path = require("path");
const router = require("express").Router();
const { registerUser, loginUser, getUser } = require('../controllers/auth');

router.post('/api/register', registerUser);
router.post('/api/login', loginUser);
router.get('/api/user', getUser);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});



module.exports = router;