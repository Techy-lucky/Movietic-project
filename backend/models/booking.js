const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  movieName: String,
  moviePrice: Number,
  date: String,
  time: String,
  seats: [String],
  paymentMethod: String,
  paymentDetails: String,
});

const Booking = mongoose.model("Booking", BookingSchema);

module.exports = Booking;
