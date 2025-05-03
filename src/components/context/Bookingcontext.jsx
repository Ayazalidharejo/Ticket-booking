import React, { createContext, useState } from 'react';
import api from '../api/Api';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [allBookings, setAllBookings] = useState([]); // For admin view
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Get user bookings
  const getUserBookings = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await api.get('/bookings');
      setBookings(res.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch bookings');
    } finally {
      setLoading(false);
    }
  };

  // Get all bookings (admin only)
  const getAllBookings = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await api.get('/admin/bookings');
      setAllBookings(res.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch all bookings');
    } finally {
      setLoading(false);
    }
  };

  // Create booking
  const createBooking = async (bookingData) => {
    try {
      setLoading(true);
      setError(null);
      const res = await api.post('/bookings', bookingData);
      setBookings([...bookings, res.data]);
      return res.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create booking');
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Cancel booking
  const cancelBooking = async (id) => {
    try {
      setLoading(true);
      setError(null);
      const res = await api.patch(`/bookings/${id}/cancel`);
      
      // Update bookings list
      setBookings(bookings.map(booking => 
        booking.id === id ? res.data : booking
      ));
      
      // Update admin bookings list if present
      if (allBookings.length > 0) {
        setAllBookings(allBookings.map(booking => 
          booking.id === id ? res.data : booking
        ));
      }
      
      return true;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to cancel booking');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return (
    <BookingContext.Provider
      value={{
        bookings,
        allBookings,
        loading,
        error,
        getUserBookings,
        getAllBookings,
        createBooking,
        cancelBooking
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export default BookingContext;