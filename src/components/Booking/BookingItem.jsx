// import React, { useState, useContext } from 'react';
// import { cancelBooking } from '../api/Api';
// import { AuthContext } from '../context/Authcontext';

// const BookingItem = ({ booking, onCancel }) => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
  
//   const { token } = useContext(AuthContext);
  
//   const { id, eventName, ticketType, quantity, price, status, bookingDate } = booking;

//   const handleCancelBooking = async () => {
//     if (window.confirm('Are you sure you want to cancel this booking?')) {
//       setLoading(true);
//       setError('');
      
//       try {
//         await cancelBooking(id, token);
//         onCancel(id);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   return (
//     <div>
//       {error && <div>{error}</div>}
//       <h3>{eventName}</h3>
//       <p>Ticket Type: {ticketType}</p>
//       <p>Quantity: {quantity}</p>
//       <p>Total Price: ${price}</p>
//       <p>Status: {status}</p>
//       <p>Booked on: {new Date(bookingDate).toLocaleString()}</p>
      
//       {status === 'active' && (
//         <button 
//           onClick={handleCancelBooking}
//           disabled={loading}
//         >
//           {loading ? 'Cancelling...' : 'Cancel Booking'}
//         </button>
//       )}
//     </div>
//   );
// };

// export default BookingItem;



import React, { useState, useContext } from 'react';
import { cancelBooking } from '../api/Api';
import { AuthContext } from '../context/Authcontext';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookingItem = ({ booking, onCancel }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { token } = useContext(AuthContext);
  
  const { id, eventName, ticketType, quantity, price, status, bookingDate } = booking;

  const handleCancelBooking = async () => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      setLoading(true);
      setError('');
      
      try {
        await cancelBooking(id, token);
        onCancel(id);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  // Determine status badge color
  const getBadgeClass = () => {
    switch(status.toLowerCase()) {
      case 'active':
        return 'bg-success';
      case 'cancelled':
        return 'bg-danger';
      case 'completed':
        return 'bg-info';
      default:
        return 'bg-secondary';
    }
  };

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
        <h5 className="mb-0">{eventName}</h5>
        <span className={`badge ${getBadgeClass()} ms-2`}>{status}</span>
      </div>
      
      <div className="card-body">
        {error && (
          <div className="alert alert-danger mb-3" role="alert">
            {error}
          </div>
        )}
        
        <div className="row">
          <div className="col-md-6">
            <p className="card-text"><strong>Ticket Type:</strong> {ticketType}</p>
            <p className="card-text"><strong>Quantity:</strong> {quantity}</p>
          </div>
          <div className="col-md-6">
            <p className="card-text"><strong>Total Price:</strong> ${price}</p>
            <p className="card-text"><strong>Booked on:</strong> {new Date(bookingDate).toLocaleString()}</p>
          </div>
        </div>
      </div>
      
      {status === 'active' && (
        <div className="card-footer bg-light d-flex justify-content-end">
          <button
            className="btn btn-danger"
            onClick={handleCancelBooking}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Cancelling...
              </>
            ) : (
              'Cancel Booking'
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingItem;