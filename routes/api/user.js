const express = require("express");
const router = express.Router();
// router.use("/routes", require("./routes"));
router.use("/", (req, res) => {
  res.send("hello-world");
});

module.exports = router;
