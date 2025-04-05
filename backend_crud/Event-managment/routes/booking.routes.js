const express = require("express");
const {
  bookEvent,
  getMyBookings,
  cancelBooking
} = require("../controllers/booking.controller");
const { authMiddleware } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/", authMiddleware, bookEvent);
router.get("/", authMiddleware, getMyBookings);
router.delete("/:id", authMiddleware, cancelBooking);

module.exports = router;
