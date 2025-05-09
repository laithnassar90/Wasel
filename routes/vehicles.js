
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const trucks = [
    { id: 1, driver: "Ahmad", location: "Amman", status: "available" },
    { id: 2, driver: "Sami", location: "Zarqa", status: "booked" }
  ];
  res.json(trucks);
});

module.exports = router;
