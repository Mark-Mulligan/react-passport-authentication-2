const path = require("path");
const router = require("express").Router();
const { registerUser, loginUser, getUser, logoutUser } = require('../controllers/auth');
const { getPrivateData } = require('../controllers/private');

router.post('/api/register', registerUser);
router.post('/api/login', loginUser);
router.get('/api/user', getUser);
router.get('/api/logout', logoutUser);
router.get('/api/private', getPrivateData);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});



module.exports = router;