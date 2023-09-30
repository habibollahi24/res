const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index" , {page_name:"home"});
});

router.use("/about", require("./about"));
router.use("/contact", require("./contact"));
router.use("/services", require("./services"));
router.use("/products", require("./products"));

module.exports = router;
