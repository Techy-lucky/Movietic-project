import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "../stylesheet/seat.css";
import data from "../data"; // Ensure data is imported

function Update() {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const movieName = params.get("name") || location.state?.booking?.movieName;

  // Retrieve the movie price from data.js based on the movie name
  const movie = data.find((movie) => movie.name === movieName);
  const moviePrice = movie ? movie.price : 0;

  // Check if there's a booking to edit
  const existingBooking = location.state?.booking;

  // Initialize state
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("9:30 AM");
  const [dates, setDates] = useState([]);

  // Function to generate the next 7 days including the day name
  const getNext7Days = () => {
    const today = new Date();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const datesArray = [];

    for (let i = 0; i < 7; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      const day = days[nextDate.getDay()];
      const date = nextDate.getDate();
      datesArray.push({ day, date });
    }
    return datesArray;
  };

  // Generate seats and handle pre-selected seats
  const generateSeats = useCallback(
    (preSelectedSeats = []) => {
      const newSeats = [];
      for (let i = 0; i < 70; i++) {
        const seatId = `s${i + 1}`;
        const isPreSelected = preSelectedSeats.includes(seatId);
        newSeats.push({ id: seatId, booked: isPreSelected });
      }
      setCount(preSelectedSeats.length);
      setAmount(preSelectedSeats.length * moviePrice);
      setSelectedSeats(preSelectedSeats);
    },
    [moviePrice]
  );

  // Use generateSeats inside useEffect
  useEffect(() => {
    // Set the next 7 days for the date selector
    const upcomingDates = getNext7Days();
    setDates(upcomingDates);
    setSelectedDate(upcomingDates[0].day); // Default to the first day

    if (existingBooking && existingBooking.seats) {
      setSelectedDate(existingBooking.date);
      setSelectedTime(existingBooking.time);
      generateSeats(existingBooking.seats);
    } else {
      generateSeats();
    }
  }, [existingBooking, generateSeats]);

  const handleBooking = async () => {
    const bookingData = {
      movieName,
      moviePrice: amount, // Total amount updated
      date: selectedDate,
      time: selectedTime,
      seats: selectedSeats,
    };

    try {
      if (existingBooking) {
        // Update existing booking
        await axios.put(
          `http://localhost:5000/updatedata/${existingBooking._id}`,
          bookingData
        );
        alert("Booking updated successfully!");
      } else {
        // Create new booking
        await axios.post("http://localhost:5000/createdata", bookingData);
        alert("Booking successful!");
      }
      navigate("/book"); // Redirect to bookings page
    } catch (error) {
      console.error("Operation failed", error);
      alert("Operation failed, please try again.");
    }
  };

  return (
    <div className="main">
      <div className="tickets">
        <div className="ticket-selector">
          <div className="title">{movieName}</div>
          <div className="screentext">All Eyes This Way Please!</div>
          <div className="timings">
            <div className="dates">
              {dates.map((dateItem, index) => (
                <React.Fragment key={index}>
                  <input
                    type="radio"
                    name="date"
                    id={`d${index + 1}`}
                    defaultChecked={selectedDate === dateItem.day}
                    onChange={() => setSelectedDate(dateItem.day)}
                    className="hello"
                  />
                  <label htmlFor={`d${index + 1}`} className="dates-item">
                    <div className="day">{dateItem.day}</div>
                    <div className="date">{dateItem.date}</div>
                  </label>
                </React.Fragment>
              ))}
            </div>
            <div className="times">
              {["9:30 AM", "12:30 PM", "3:00 PM", "6:30 PM"].map(
                (time, index) => (
                  <React.Fragment key={index}>
                    <input
                      type="radio"
                      name="time"
                      id={`t${index + 1}`}
                      defaultChecked={selectedTime === time}
                      onChange={() => setSelectedTime(time)}
                      className="hello"
                    />
                    <label htmlFor={`t${index + 1}`} className="time">
                      {time}
                    </label>
                  </React.Fragment>
                )
              )}
            </div>
          </div>
        </div>
        <div className="price">
          <div className="total">
            <span>
              <span className="count">{count}</span> Tickets
            </span>
            <div>
              ₹ <div className="amount">{amount}</div>
            </div>
          </div>
          <button
            id="btn"
            type="button"
            style={{
              backgroundColor: count > 0 ? "#F84464" : "#ccc",
              cursor: count > 0 ? "pointer" : "not-allowed",
            }}
            disabled={count === 0}
            onClick={handleBooking}
          >
            {existingBooking ? "Update Booking" : "Book"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Update;
