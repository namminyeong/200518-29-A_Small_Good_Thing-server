const express = require("express");
const router = express.Router();

const { getMonthlyList } = require("../controller");

// GET /mainpage
router.get("/*", getMonthlyList.get);

module.exports = router;
