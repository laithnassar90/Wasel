// filepath: c:\Users\USER\Wasel\routes\auth.js
const fs = require('fs');
const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
    
  res.send('Auth route works!');
});

module.exports = router;

