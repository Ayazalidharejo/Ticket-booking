// // import React, { useState, useEffect, useContext } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import { getEventById, deleteEvent } from '../api/Api';
// // import { AuthContext } from '../context/Authcontext';
// // import TicketList from '../Tickets/Ticketlist';

// // const EventDetail = () => {
// //   const [event, setEvent] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');
// //   const [deleteLoading, setDeleteLoading] = useState(false);
  
// //   const { eventId } = useParams();
// //   const { currentUser, token } = useContext(AuthContext);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchEvent = async () => {
// //       try {
// //         const eventData = await getEventById(eventId);
// //         setEvent(eventData);
// //       } catch (err) {
// //         setError(err.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchEvent();
// //   }, [eventId]);

// //   const handleDeleteEvent = async () => {
// //     if (window.confirm('Are you sure you want to delete this event?')) {
// //       setDeleteLoading(true);
// //       try {
// //         await deleteEvent(eventId, token);
// //         navigate('/');
// //       } catch (err) {
// //         setError(err.message);
// //         setDeleteLoading(false);
// //       }
// //     }
// //   };

// //   if (loading) {
// //     return <div>Loading event details...</div>;
// //   }

// //   if (error) {
// //     return <div>Error: {error}</div>;
// //   }

// //   if (!event) {
// //     return <div>Event not found</div>;
// //   }

// //   const { name, description, date, location, createdBy, tickets } = event;
// //   const isCreator = currentUser?.id === createdBy;

// //   return (
// //     <div>
// //       <h2>{name}</h2>
// //       <p>{description}</p>
// //       <p>Date: {new Date(date).toLocaleDateString()}</p>
// //       <p>Location: {location}</p>
      
// //       {isCreator && (
// //         <div>
// //           <button onClick={() => navigate(`/edit-event/${eventId}`)}>
// //             Edit Event
// //           </button>
// //           <button 
// //             onClick={handleDeleteEvent} 
// //             disabled={deleteLoading}
// //           >
// //             {deleteLoading ? 'Deleting...' : 'Delete Event'}
// //           </button>
// //         </div>
// //       )}
      
// //       <div>
// //         <h3>Available Tickets</h3>
// //         <TicketList tickets={tickets} eventId={eventId} />
// //       </div>
// //     </div>
// //   );
// // };

// // export default EventDetail;










// import React, { useState, useEffect, useContext } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { getEventById, deleteEvent } from '../api/Api';
// import { AuthContext } from '../context/Authcontext';
// import TicketList from '../Tickets/Ticketlist';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../index.css'; // Create and import this for premium styling



// const EventDetail = () => {
//   const [event, setEvent] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [deleteLoading, setDeleteLoading] = useState(false);

//   const { eventId } = useParams();
//   const { currentUser, token } = useContext(AuthContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchEvent = async () => {
//       try {
//         const eventData = await getEventById(eventId);
//         setEvent(eventData);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvent();
//   }, [eventId]);

//   const handleDeleteEvent = async () => {
//     if (window.confirm('Are you sure you want to delete this event?')) {
//       setDeleteLoading(true);
//       try {
//         await deleteEvent(eventId, token);
//         navigate('/');
//       } catch (err) {
//         setError(err.message);
//         setDeleteLoading(false);
//       }
//     }
//   };

//   if (loading) {
//     return <div className="text-center pt-5 fs-4 text-primary">⏳ Loading event details...</div>;
//   }

//   if (error) {
//     return <div className="alert alert-danger mt-5 text-center">❌ Error: {error}</div>;
//   }

//   if (!event) {
//     return <div className="text-center mt-5 fs-5">⚠️ Event not found</div>;
//   }

//   const { name, description, date, location, createdBy, tickets } = event;
//   const isCreator = currentUser?.id === createdBy;

//   return (
//     <div className="premium-container">
//       <section className="hero-section">
//         <div className="hero-overlay">
//           <h1 className="display-4 fw-bold text-white">{name}</h1>
//           <p className="lead text-white">{description}</p>
//         </div>
//       </section>

//       <div className="container">
//         <div className="event-details-card shadow-lg rounded-5 p-5 bg-white">
//           <div className="row gy-4">
//             <div className="col-md-4">
//               <div className="premium-box">
//                 <div className="icon">📅</div>
//                 <h6 className="text-muted">Date</h6>
//                 <p className="fs-5 fw-semibold">{new Date(date).toLocaleDateString()}</p>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="premium-box">
//                 <div className="icon">📍</div>
//                 <h6 className="text-muted">Location</h6>
//                 <p className="fs-5 fw-semibold">{location}</p>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="premium-box">
//                 <div className="icon">🧑‍💼</div>
//                 <h6 className="text-muted">Organizer</h6>
//                 <p className="fs-5 fw-semibold">{isCreator ? 'You' : 'Another User'}</p>
//               </div>
//             </div>
//           </div>

//           {isCreator && (
//             <div className="text-center my-5">
//               <button 
//                 className="btn btn-gradient btn-lg mx-3"
//                 onClick={() => navigate(`/edit-event/${eventId}`)}
//               >
//                 ✏️ Edit
//               </button>
//               <button 
//                 className="btn btn-outline-danger btn-lg mx-3"
//                 onClick={handleDeleteEvent}
//                 disabled={deleteLoading}
//               >
//                 {deleteLoading ? 'Deleting...' : '🗑️ Delete'}
//               </button>
//             </div>
//           )}

//           <hr className="my-5" />

//           <div>
//             <h3 className="text-center fw-bold mb-4">🎟️ Tickets</h3>
//             <TicketList tickets={tickets} eventId={eventId} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventDetail;






// // src/components/events/EventDetail.js
// import React, { useContext, useEffect } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import EventContext from '../context/Eventcontext';
// import AuthContext from '../context/Authcontext';

// const EventDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { currentEvent, loading, error, getEventById } = useContext(EventContext);
//   const { isAuthenticated } = useContext(AuthContext);

//   useEffect(() => {
//     getEventById(id);
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!currentEvent) {
//     return <div>Event not found</div>;
//   }

//   const handleBookNow = (ticketId) => {
//     if (!isAuthenticated) {
//       navigate('/login');
//     } else {
//       navigate(`/book/${ticketId}`);
//     }
//   };

//   return (
//     <div>
//       <h1>{currentEvent.name}</h1>
//       <p>{currentEvent.description}</p>
//       <p>Date: {currentEvent.date}</p>
//       <p>Location: {currentEvent.location}</p>
      
//       <h2>Available Tickets</h2>
//       {currentEvent.tickets && currentEvent.tickets.length > 0 ? (
//         currentEvent.tickets.map(ticket => (
//           <div key={ticket.id}>
//             <h3>{ticket.ticketType}</h3>
//             <p>Price: ${ticket.price}</p>
//             <p>Available: {ticket.availability}</p>
//             {ticket.availability > 0 ? (
//               <button onClick={() => handleBookNow(ticket.id)}>Book Now</button>
//             ) : (
//               <p>Sold Out</p>
//             )}
//           </div>
//         ))
//       ) : (
//         <p>No tickets available for this event.</p>
//       )}
      
//       <Link to="/events">Back to Events</Link>
//     </div>
//   );
// };

// export default EventDetail;








import React, { useContext, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import EventContext from '../context/Eventcontext';
import AuthContext from '../context/Authcontext';
import 'bootstrap/dist/css/bootstrap.min.css';

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentEvent, loading, error, getEventById } = useContext(EventContext);
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    getEventById(id);
  }, [id]);

  const getLocationMapIframe = (location) => {
    const encodedLocation = encodeURIComponent(location);
    return `https://maps.google.com/maps?q=${encodedLocation}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  };

  const handleBookNow = (ticketId) => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      navigate(`/book/${ticketId}`);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border text-primary" role="status" />
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger text-center">{error}</div>;
  }

  if (!currentEvent) {
    return <div className="alert alert-warning text-center">Event not found</div>;
  }

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="card-title text-center mb-3">{currentEvent.name}</h4>
              <p className="card-text small">{currentEvent.description}</p>
              <p className="mb-1"><strong>Date:</strong> {new Date(currentEvent.date).toLocaleDateString()}</p>
              <p className="mb-3"><strong>Location:</strong> {currentEvent.location}</p>

              {/* Google Map */}
              <div className="mb-4" style={{ height: '220px', borderRadius: '6px', overflow: 'hidden' }}>
                <iframe
                  src={getLocationMapIframe(currentEvent.location)}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: '0', borderRadius: '6px' }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>

              <h5 className="mb-3">Tickets</h5>
              <div className="row g-3">
                {currentEvent.tickets && currentEvent.tickets.length > 0 ? (
                  currentEvent.tickets.map(ticket => (
                    <div key={ticket.id} className="col-sm-12 col-md-6">
                      <div className="card border-light shadow-sm h-100">
                        <div className="card-body p-3 d-flex flex-column">
                          <p className="fw-bold mb-2">{ticket.ticketType}</p>
                          <p className="mb-1 small">Price: ${ticket.price}</p>
                          <p className={`mb-2 small ${ticket.availability > 0 ? 'text-success' : 'text-danger'}`}>
                            {ticket.availability > 0 ? `Available: ${ticket.availability}` : 'Sold Out'}
                          </p>
                          <button
                            className={`btn btn-sm mt-auto ${ticket.availability > 0 ? 'btn-primary' : 'btn-secondary'}`}
                            onClick={() => ticket.availability > 0 && handleBookNow(ticket.id)}
                            disabled={ticket.availability <= 0}
                          >
                            {ticket.availability > 0 ? 'Book Now' : 'Sold Out'}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-muted">No tickets available for this event.</p>
                )}
              </div>

              <div className="text-center mt-4">
                <Link to="/events" className="btn btn-sm btn-outline-secondary">
                  ← Back to Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
