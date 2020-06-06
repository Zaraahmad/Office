const express = require("express");
const router = express.Router();
const db = require("../models");

// get all departments
router.get("/all", (req, res) => {
  db.departments.findAll().then(department => res.send(department));
});

module.exports = router;