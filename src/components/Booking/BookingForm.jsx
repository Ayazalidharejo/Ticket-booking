// // src/components/bookings/BookingForm.js
// import React, { useState, useEffect, useContext } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import api from '../api/Api';
// import BookingContext from '../../components/context/Bookingcontext';

// const BookingForm = () => {
//   const { ticketId } = useParams();
//   const navigate = useNavigate();
//   const { createBooking, error } = useContext(BookingContext);
  
//   const [ticket, setTicket] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [ticketError, setTicketError] = useState(null);

//   useEffect(() => {
//     const fetchTicket = async () => {
//       try {
//         const res = await api.get(`/tickets/${ticketId}`);
//         setTicket(res.data);
//         setLoading(false);
//       } catch (err) {
//         setTicketError(err.response?.data?.message || 'Failed to fetch ticket details');
//         setLoading(false);
//       }
//     };

//     fetchTicket();
//   }, [ticketId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const bookingData = {
//       ticketId,
//       quantity: parseInt(quantity)
//     };
    
//     const booking = await createBooking(bookingData);
//     if (booking) {
//       navigate('/my-bookings');
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (ticketError) {
//     return <div>{ticketError}</div>;
//   }

//   if (!ticket) {
//     return <div>Ticket not found</div>;
//   }

//   return (
//     <div>
//       <h1>Book Ticket</h1>
//       {error && <div>{error}</div>}
      
//       <div>
//         <h2>{ticket.eventName}</h2>
//         <p>Ticket Type: {ticket.ticketType}</p>
//         <p>Price: ${ticket.price}</p>
//         <p>Available: {ticket.availability}</p>
//       </div>
      
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Quantity</label>
//           <input
//             type="number"
//             min="1"
//             max={ticket.availability}
//             value={quantity}
//             onChange={(e) => setQuantity(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <p>Total Price: ${(ticket.price * quantity).toFixed(2)}</p>
//         </div>
//         <button type="submit">Confirm Booking</button>
//       </form>
      
//       <button onClick={() => navigate(`/events/${ticket.eventId}`)}>Cancel</button>
//     </div>
//   );
// };

// export default BookingForm;






import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/Api';
import BookingContext from '../../components/context/Bookingcontext';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookingForm = () => {
  const { ticketId } = useParams();
  const navigate = useNavigate();
  const { createBooking, error } = useContext(BookingContext);

  const [ticket, setTicket] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [ticketError, setTicketError] = useState(null);

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const res = await api.get(`/tickets/${ticketId}`);
        setTicket(res.data);
        setLoading(false);
      } catch (err) {
        setTicketError(err.response?.data?.message || 'Failed to fetch ticket details');
        setLoading(false);
      }
    };

    fetchTicket();
  }, [ticketId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      ticketId,
      quantity: parseInt(quantity)
    };

    const booking = await createBooking(bookingData);
    if (booking) {
      navigate('/my-bookings');
    }
  };

  if (loading) {
    return <div className="d-flex justify-content-center mt-5"><div className="spinner-border text-primary" role="status" /></div>;
  }

  if (ticketError) {
    return <div className="alert alert-danger text-center">{ticketError}</div>;
  }

  if (!ticket) {
    return <div className="alert alert-warning text-center">Ticket not found</div>;
  }

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Book Your Ticket</h1>
      {error && <div className="alert alert-danger text-center">{error}</div>}

      <div className="card shadow-sm p-4">
        <h2>{ticket.eventName}</h2>
        <p><strong>Ticket Type:</strong> {ticket.ticketType}</p>
        <p><strong>Price:</strong> ${ticket.price}</p>
        <p><strong>Available:</strong> {ticket.availability}</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">Quantity</label>
            <input
              id="quantity"
              type="number"
              min="1"
              max={ticket.availability}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <p><strong>Total Price:</strong> ${(ticket.price * quantity).toFixed(2)}</p>
          </div>

          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-success">Confirm Booking</button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate(`/events/${ticket.eventId}`)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
