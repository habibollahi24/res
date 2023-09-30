const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("contact", { page_name: "contact" });
});

module.exports = router;
