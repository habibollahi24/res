//  Maryam Afshar, Student ID: 301034443, Due Date: October 3, 2023

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { page_name: "home" });
});

// all nested route
router.use("/about", require("./about"));
router.use("/contact", require("./contact"));
router.use("/services", require("./services"));
router.use("/products", require("./products"));
router.use("/download-file", require("./download-file"));

module.exports = router;
