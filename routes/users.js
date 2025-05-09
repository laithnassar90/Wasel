
const express = require("express");
const router = express.Router();

router.put("/profile", (req, res) => {
  const { name, phone } = req.body;
  res.json({ message: "Profile updated" });
});

module.exports = router;
