import React, { useState, useContext } from 'react';
import { createBooking } from '../api/Api';
import { AuthContext } from '../context/Authcontext';
import { useNavigate } from 'react-router-dom';

const TicketList = ({ tickets, eventId }) => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { isAuthenticated, token } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleTicketSelect = (ticketId) => {
    setSelectedTicket(ticketId);
  };

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleBookTicket = async () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    if (!selectedTicket) {
      setError('Please select a ticket type');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await createBooking({
        ticketId: selectedTicket,
        quantity
      }, token);
      
      alert('Booking successful!');
      navigate('/my-bookings');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!tickets || tickets.length === 0) {
    return <p>No tickets available for this event.</p>;
  }

  return (
    <div>
      {error && <div>{error}</div>}
      <div>
        {tickets.map(ticket => (
          <div key={ticket.id}>
            <input
              type="radio"
              id={`ticket-${ticket.id}`}
              name="ticket"
              value={ticket.id}
              onChange={() => handleTicketSelect(ticket.id)}
              checked={selectedTicket === ticket.id}
            />
            <label htmlFor={`ticket-${ticket.id}`}>
              {ticket.ticketType} - £{ticket.price} 
              ({ticket.availability} available)
            </label>
          </div>
        ))}
      </div>
      
      {selectedTicket && (
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            min="1"
            max={tickets.find(t => t.id === selectedTicket)?.availability || 1}
            value={quantity}
            onChange={handleQuantityChange}
          />
          <button 
            onClick={handleBookTicket}
            disabled={loading}
          >
            {loading ? 'Booking...' : 'Book Now'}
          </button>
        </div>
      )}
    </div>
  );
};

export default TicketList;