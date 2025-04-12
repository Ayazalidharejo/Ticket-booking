import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EventDetailSel = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [booking, setBooking] = useState({
    name: '',
    ticketType: '',
    quantity: 1
  });

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get(`/api/events/${id}`);
        setEvent(res.data);
      } catch (err) {
        console.error('Error fetching event:', err);
      }
    };
    fetchEvent();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/bookings', {
        eventId: id,
        ...booking
      });
      alert('Booking successful!');
    } catch (err) {
      console.error('Booking failed:', err);
    }
  };

  if (!event) return <div>Loading...</div>;

  return (
    <div>
      <h2>{event.name}</h2>
      <p>Date: {new Date(event.date).toLocaleDateString()}</p>
      <p>Location: {event.location}</p>
      <p>{event.description}</p>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            value={booking.name}
            onChange={(e) => setBooking({...booking, name: e.target.value})}
            required
          />
        </div>

        <div className="mb-3">
          <label>Ticket Type:</label>
          <select
            className="form-select"
            value={booking.ticketType}
            onChange={(e) => setBooking({...booking, ticketType: e.target.value})}
            required
          >
            <option value="">Select Ticket</option>
            {event.tickets.map(ticket => (
              <option key={ticket.type} value={ticket.type}>
                {ticket.type} - ₹{ticket.price}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label>Quantity:</label>
          <input
            type="number"
            className="form-control"
            min="1"
            value={booking.quantity}
            onChange={(e) => setBooking({...booking, quantity: e.target.value})}
            required
          />
        </div>

        <button type="submit" className="btn btn-success">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default EventDetailSel;