//  Maryam Afshar, Student ID: 301034443, Due Date: October 3, 2023

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("about", { page_name: "about" });
});

module.exports = router;
