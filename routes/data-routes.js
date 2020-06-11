const express = require("express");
const router = express.Router();

router.post("/api", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

router.post("/api/test/:fname", (req, res) => {
  console.log(req.paramas);
  res.json(req.paramas);
});

module.exports = router;
