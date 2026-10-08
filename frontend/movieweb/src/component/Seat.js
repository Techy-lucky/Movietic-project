import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../stylesheet/seat.css';

function Seat() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const params = new URLSearchParams(location.search);
  const movieName = params.get("name");
  const moviePrice = parseInt(params.get("price"), 10);

  const [seats, setSeats] = useState([]);
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedDate, setSelectedDate] = useState('Fri');
  const [selectedTime, setSelectedTime] = useState('9:30 AM');
  const [paymentMethod, setPaymentMethod] = useState('Cash');
  const [paymentDetails, setPaymentDetails] = useState('');

  const generateSeats = () => {
    const newSeats = [];
    for (let i = 0; i < 70; i++) {
      let randint = Math.floor(Math.random() * 3);
      newSeats.push({ id: `s${i + 1}`, booked: randint === 1 });
    }
    setSeats(newSeats);
    setCount(0);
    setAmount(0);
    setSelectedSeats([]);
  };

  const updateTotal = () => {
    let newCount = 0;
    let newAmount = 0;
    const newSelectedSeats = [];

    seats.forEach((seat) => {
      if (!seat.booked && document.getElementById(seat.id).checked) {
        newCount += 1;
        newAmount += moviePrice * 1;
        newSelectedSeats.push(seat.id);
      }
    });

    setCount(newCount);
    setAmount(newAmount);
    setSelectedSeats(newSelectedSeats);
  };

  const handleBooking = async () => {
    const bookingData = {
      movieName,
      moviePrice,
      date: selectedDate,
      time: selectedTime,
      seats: selectedSeats,
      paymentMethod,
      paymentDetails: paymentMethod !== 'Cash' ? paymentDetails : '',
    };

    try {
      await axios.post('http://localhost:5000/createdata', bookingData);
      alert('Booking successful!');
      navigate('/book'); 
    } catch (error) {
      console.error('Booking failed', error);
      alert('Booking failed, please try again.');
    }
  };

  useEffect(() => {
    generateSeats();
  }, []);

  // Generate current date and next 7 days dynamically
  const getCurrentDate = (daysToAdd) => {
    const today = new Date();
    today.setDate(today.getDate() + daysToAdd);  // Increment date by daysToAdd
    const options = { weekday: 'short', day: 'numeric' };  // Format for day and date
    return today.toLocaleDateString('en-US', options);  // Return formatted date string
  };

  return (
    <div className="main">
      <div className="tickets">
        <div className="ticket-selector">
          <div className="title">{movieName}</div>
          <div className="seats">
            <div className="status">
              <div className="item">Available</div>
              <div className="item">Selected</div>
              <div className="item">Booked</div>
            </div>
            <div className="all-seats">
              {seats.map((seat) => (
                <React.Fragment key={seat.id}>
                  <input
                    type="checkbox"
                    name="tickets"
                    id={seat.id}
                    disabled={seat.booked}
                    onChange={updateTotal}
                    className='hello'
                  />
                  <label htmlFor={seat.id} className={`seat ${seat.booked ? 'booked' : ''}`}></label>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="screentext">All Eyes This Way Please!</div>
          <div className="timings">
            <div className="dates">
              {[...Array(7)].map((_, index) => (
                <React.Fragment key={index}>
                  <input
                    type="radio"
                    name="date"
                    id={`d${index + 1}`}
                    defaultChecked={index === 0}
                    onChange={() => setSelectedDate(getCurrentDate(index))}
                    className='hello'
                  />
                  <label htmlFor={`d${index + 1}`} className="dates-item">
                    <div className="day">{getCurrentDate(index)}</div>
                  </label>
                </React.Fragment>
              ))}
            </div>
            <div className="times">
              {['9:30 AM', '12:30 PM', '3:00 PM', '6:30 PM'].map((time, index) => (
                <React.Fragment key={index}>
                  <input
                    type="radio"
                    name="time"
                    id={`t${index + 1}`}
                    defaultChecked={index === 0}
                    onChange={() => setSelectedTime(time)}
                    className='hello'
                  />
                  <label htmlFor={`t${index + 1}`} className="time">{time}</label>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="payment-method">
            <label className="block text-lg font-bold flex justify-center mt-2 mb-2">Payment Method</label>
            <div className='flex justify-center gap-10'>
            <div>
              <input
                type="radio"
                id="cash"
                name="paymentMethod"
                value="Cash"
                checked={paymentMethod === 'Cash'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="cash" className="ml-2">Cash</label>
            </div>
            <div>
              <input
                type="radio"
                id="card"
                name="paymentMethod"
                value="Card"
                checked={paymentMethod === 'Card'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="card" className="ml-2">Card</label>
            </div>
            <div>
              <input
                type="radio"
                id="gpay"
                name="paymentMethod"
                value="GPay"
                checked={paymentMethod === 'GPay'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="gpay" className="ml-2">Google Pay</label>
            </div>
            </div>
            {(paymentMethod === 'Card' || paymentMethod === 'GPay') && (
              <input
                type="text"
                placeholder="Enter card / google-pay details"
                value={paymentDetails}
                onChange={(e) => setPaymentDetails(e.target.value)}
                className="mt-4 p-2 border rounded w-full"
              />
            )}
          </div>
        </div>
        <div className="price">
          <div className="total">
            <span><span className="count">{count}</span> Tickets</span>
            <div>₹ <div className="amount">{amount}</div></div>
          </div>
          <button
            id="btn"
            type="button"
            style={{
              backgroundColor: count > 0 ? "#F84464" : "#ccc",
              cursor: count > 0 ? "pointer" : "not-allowed"
            }}
            disabled={count === 0}
            onClick={handleBooking}
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
}

export default Seat;
