
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { userId, truckId, date } = req.body;
  res.status(201).json({ message: "Booking created" });
});

router.get("/:id", (req, res) => {
  const bookingId = req.params.id;
  res.json({ id: bookingId, status: "confirmed" });
});

module.exports = router;
