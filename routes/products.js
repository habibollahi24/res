const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("products" ,{page_name:"products"});
});

module.exports = router;