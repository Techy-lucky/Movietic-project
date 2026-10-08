const express = require("express");
const app = express();
const userModel = require("./models/user");
const feedModel = require("./models/feed");
const Booking = require("./models/booking");
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect("mongodb://localhost:27017/movieweb");

app.post("/create", async function (req, res) {
  try {
    const { username, email, phone, password } = req.body;
    console.log("Received data:", { username, email, phone, password });

    let createUser ={
      username,
      email,
      phone,
      password,
    };

    await userModel.insertMany([createUser]);
    res.redirect(`http://localhost:3000/home?userId=${createUser._id}`);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Server Error");
  }
});

app.post("/login", async function (req, res) {
  try {
    const { email, password } = req.body;

    // Find the user by email
    let user = await userModel.findOne({ email: email });

    if (!user) {
      return res.status(400).send("User not found");
    }

    // Check if the password matches
    if (user.password !== password) {
      return res.status(400).send("Invalid password");
    }

    // Redirect to home page after successful login
    res.redirect("http://localhost:3000/home");
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send("Server Error");
  }
});

app.post("/feed", cors(), async (req, res) => {
  const { name, email, subject, message } = req.body;
  const data = {
    name: name,
    email: email,
    subject: subject,
    message: message,
  };
  await feedModel.insertMany([data]);
});

app.post("/createdata", async (req, res) => {
  try {
    const { movieName, moviePrice, date, time, seats, paymentMethod, paymentDetails } = req.body;
    const totalPrice = moviePrice * seats.length; // Calculate total price based on selected seats

    const newBooking ={
      movieName,
      moviePrice: totalPrice, // Store total price
      date,
      time,
      seats,
      paymentMethod,
      paymentDetails,
    };

    await Booking.insertMany([newBooking]);
    res
      .status(201)
      .json({ message: "Booking successful", booking: newBooking });
  } catch (error) {
    res.status(500).json({ message: "Booking failed", error });
  }
});

app.get("/readdata", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve bookings", error });
  }
});

app.put("/updatedata/:id", async (req, res) => {
  const { id } = req.params;
  const { date, time } = req.body;

  try {
    const booking = await Booking.findById(id);
    if (booking) {
      booking.date = date;
      booking.time = time;

      await booking.save();
      res.status(200).json({ message: "Booking updated successfully" });
    } else {
      res.status(404).json({ message: "Booking not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating booking", error });
  }
});

app.delete("/readdata/:id", async (req, res) => {
  try {
    const bookingId = req.params.id;
    await Booking.findByIdAndDelete(bookingId);
    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete booking", error });
  }
});

app.listen(5000);
