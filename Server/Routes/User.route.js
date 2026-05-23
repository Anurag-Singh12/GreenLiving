const express = require('express');
const {registerUser, loginUser, getUserInfo} = require('../Controllers/user.controller.js');
const validiateToken = require('../Middlewares/validiateToken.middleware.js');
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getInfo", validiateToken, getUserInfo);

module.exports = router