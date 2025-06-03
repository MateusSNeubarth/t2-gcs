const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");

// api/user/register
router.post("/register", register);
// api/user/login
router.post("/login", login);
// api/user/health
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});


module.exports = router;
