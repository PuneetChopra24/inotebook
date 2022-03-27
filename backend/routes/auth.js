const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const obj = {
    a: "this",
    number: 35,
  };
  res.send(obj);
});

module.exports = router;
