const Booking = require("../models/booking.model");

exports.bookEvent = async (req, res) => {
  try {
    const booking = new Booking({
      user: req.user.userId,
      event: req.body.event
    });
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getMyBookings = async (req, res) => {
  try {
    const filter = req.user.role === "admin" ? {} : { user: req.user.userId };
    const bookings = await Booking.find(filter)
      .populate("event")
      .populate("user", "name email");
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    if (req.user.userId !== booking.user.toString() && req.user.role !== "admin") {
      return res.status(403).json({ message: "Unauthorized" });
    }

    await booking.remove();
    res.json({ message: "Booking canceled successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
