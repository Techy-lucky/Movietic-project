import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Book() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/readdata');
        setBookings(response.data);
      } catch (error) {
        console.error('Failed to fetch bookings', error);
      }
    };

    fetchBookings();
  }, []);

  const handleUpdate = (booking) => {
    navigate('/update', { state: { booking } });
  };

  const handleDelete = async (bookingId) => {
    try {
      await axios.delete(`http://localhost:5000/readdata/${bookingId}`);
      setBookings(bookings.filter(booking => booking._id !== bookingId));
      alert('Booking deleted successfully');
    } catch (error) {
      console.error('Failed to delete booking', error);
      alert('Failed to delete booking');
    }
  };

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-center mb-10">Your Bookings</h1>
      </div>
      <div className="container mx-auto w-2/3 p-6 overflow-y-scroll h-[600px] rounded bg-gray-300 border">
        <ul className="space-y-4">
          {bookings.map((booking, index) => (
            <li key={index} className="bg-white shadow-md rounded-lg p-6">
              <div className="mb-4">
                <strong className="text-xl font-semibold">{booking.movieName}</strong>
                <p className="text-gray-700">Price: ₹{booking.moviePrice}</p>
                <p className="text-gray-700">Date: {booking.date}</p>
                <p className="text-gray-700">Time: {booking.time}</p>
                <p className="text-gray-700">Seats: {booking.seats.join(', ')}</p>
                <p className="text-gray-700">Payment Method: {booking.paymentMethod}</p>
                {booking.paymentMethod !== 'Cash' && (
                  <p className="text-gray-700">Payment Details: {booking.paymentDetails}</p>
                )}
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleUpdate(booking)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(booking._id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Book;
