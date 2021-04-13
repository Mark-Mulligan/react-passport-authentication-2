

exports.getPrivateData = (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ success: true, message: 'You got the secret data '});
  } else {
    res.status(401).json({ success: false, message: 'unauthorized' });
  }
}