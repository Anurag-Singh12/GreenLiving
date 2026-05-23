const express = require('express');
const {postData, getData} = require('../Controllers/footprint.controller.js');
const validiateToken = require('../Middlewares/validiateToken.middleware.js');

const router = express.Router();

router.use(validiateToken)
router.route("/").post(postData).get(getData)

module.exports = router