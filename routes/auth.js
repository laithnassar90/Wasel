
const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  res.status(201).json({ message: "User registered successfully" });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  res.json({ token: "mock-jwt-token" });
});

module.exports = router;
