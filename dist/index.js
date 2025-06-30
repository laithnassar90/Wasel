<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Wasel App</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>



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






<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Wasel App</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>