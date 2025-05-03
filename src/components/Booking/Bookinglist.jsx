// import React, { useState, useEffect, useContext } from 'react';
// import { getUserBookings } from '../api/Api';
// import { AuthContext } from '../context/Authcontext';
// import BookingItem from './BookingItem';

// const BookingList = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
  
//   const { token } = useContext(AuthContext);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const bookingsData = await getUserBookings(token);
//         setBookings(bookingsData);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookings();
//   }, [token]);

//   const updateBookingsList = (bookingId) => {
//     setBookings(bookings.filter(booking => booking.id !== bookingId));
//   };

//   if (loading) {
//     return <div>Loading bookings...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h2>My Bookings</h2>
//       {bookings.length === 0 ? (
//         <p>You haven't made any bookings yet.</p>
//       ) : (
//         <div>
//           {bookings.map(booking => (
//             <BookingItem 
//               key={booking.id} 
//               booking={booking} 
//               onCancel={updateBookingsList} 
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookingList;








import React, { useState, useEffect, useContext } from 'react';
import { getUserBookings } from '../api/Api';
import { AuthContext } from '../context/Authcontext';
import BookingItem from './BookingItem';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const bookingsData = await getUserBookings(token);
        setBookings(bookingsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [token]);

  const updateBookingsList = (bookingId) => {
    setBookings(bookings.filter(booking => booking.id !== bookingId));
  };

  return (
    <div className="container py-4">
      <div className="row mb-4">
        <div className="col">
          <h2 className="display-6 border-bottom pb-2">My Bookings</h2>
        </div>
      </div>

      {loading ? (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : error ? (
        <div className="alert alert-danger" role="alert">
          <i className="bi bi-exclamation-triangle-fill me-2"></i>
          Error: {error}
        </div>
      ) : bookings.length === 0 ? (
        <div className="text-center my-5">
          <div className="mb-4">
            <i className="bi bi-calendar-x" style={{ fontSize: '3rem', color: '#6c757d' }}></i>
          </div>
          <p className="lead">You haven't made any bookings yet.</p>
          <a href="/events" className="btn btn-primary">
            Browse Events
          </a>
        </div>
      ) : (
        <div className="row">
          <div className="col-12">
            <div className="card shadow-sm mb-4">
              <div className="card-header bg-light">
                <div className="row">
                  <div className="col">
                    <strong>{bookings.length} {bookings.length === 1 ? 'Booking' : 'Bookings'}</strong>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="list-group list-group-flush">
                  {bookings.map(booking => (
                    <div className="list-group-item p-0 border-0" key={booking.id}>
                      <BookingItem 
                        booking={booking} 
                        onCancel={updateBookingsList} 
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingList;