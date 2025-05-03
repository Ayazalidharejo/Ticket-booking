// // src/components/bookings/MyBookings.js
// import React, { useContext, useEffect } from 'react';
// import BookingContext from '../context/Bookingcontext';

// const MyBookings = () => {
//   const { bookings, loading, error, getUserBookings, cancelBooking } = useContext(BookingContext);

//   useEffect(() => {
//     getUserBookings();
//   }, []);

//   const handleCancelBooking = async (id) => {
//     if (window.confirm('Are you sure you want to cancel this booking?')) {
//       await cancelBooking(id);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <h1>My Bookings</h1>
//       {bookings.length > 0 ? (
//         <div>
//           {bookings.map(booking => (
//             <div key={booking.id}>
//               <h3>{booking.eventName}</h3>
//               <p>Ticket Type: {booking.ticketType}</p>
//               <p>Quantity: {booking.quantity}</p>
//               <p>Total Price: ${booking.price}</p>
//               <p>Status: {booking.status}</p>
//               <p>Booking Date: {booking.bookingDate}</p>
//               {booking.status === 'active' && (
//                 <button onClick={() => handleCancelBooking(booking.id)}>
//                   Cancel Booking
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>You have no bookings yet.</p>
//       )}
//     </div>
//   );
// };

// export default MyBookings;
import React, { useContext, useEffect } from 'react';
import BookingContext from '../context/Bookingcontext';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyBookings = () => {
  const { bookings, loading, error, getUserBookings, cancelBooking } = useContext(BookingContext);

  useEffect(() => {
    getUserBookings();
  }, []);

  const handleCancelBooking = async (id) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      await cancelBooking(id);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger mt-4 text-center">{error}</div>;
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">📄 My Bookings</h2>

      {bookings.length > 0 ? (
        <div className="table-responsive shadow-sm rounded">
          <table className="table table-striped table-hover align-middle text-center border">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Event Name</th>
                <th>Ticket Type</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Status</th>
                <th>Booking Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={booking.id}>
                  <td>{index + 1}</td>
                  <td>{booking.eventName}</td>
                  <td>{booking.ticketType}</td>
                  <td>{booking.quantity}</td>
                  <td>£{booking.price}</td>
                  <td>
                    <span className={`badge ${booking.status === 'active' ? 'bg-success' : 'bg-secondary'}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td>{new Date(booking.bookingDate).toLocaleDateString()}</td>
                  <td>
                    {booking.status === 'active' ? (
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleCancelBooking(booking.id)}
                      >
                        Cancel
                      </button>
                    ) : (
                      <span className="text-muted">N/A</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="alert alert-info text-center">
          You have no bookings yet.
        </div>
      )}
    </div>
  );
};

export default MyBookings;
