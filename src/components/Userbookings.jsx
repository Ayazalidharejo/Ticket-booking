import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem('token');
        
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };
        
        const res = await axios.get('http://localhost:5000/api/bookings', config);
        setBookings(res.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load bookings');
        setLoading(false);
      }
    };
    
    fetchBookings();
  }, []);
  
  const cancelBooking = async (id) => {
    try {
      const token = localStorage.getItem('token');
      
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };
      
      await axios.patch(`http://localhost:5000/api/bookings/${id}/cancel`, {}, config);
      
      // Update booking status in UI
      setBookings(bookings.map(booking => 
        booking.id === id ? { ...booking, status: 'cancelled' } : booking
      ));
    } catch (err) {
      setError(err.response.data.message || 'Failed to cancel booking');
    }
  };
  
  if (loading) return <p>Loading bookings...</p>;
  if (error) return <p>{error}</p>;
  
  return (
    <div>
      <h2>My Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings found</p>
      ) : (
        <div>
          {bookings.map(booking => (
            <div key={booking.id}>
              <h3>{booking.eventName}</h3>
              <p>Ticket: {booking.ticketType}</p>
              <p>Quantity: {booking.quantity}</p>
              <p>Total Price: £{booking.price}</p>
              <p>Status: {booking.status}</p>
              <p>Booked on: {new Date(booking.bookingDate).toLocaleDateString()}</p>
              
              {booking.status === 'active' && (
                <button onClick={() => cancelBooking(booking.id)}>
                  Cancel Booking
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserBookings;