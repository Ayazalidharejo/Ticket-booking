// // src/components/events/Events.js
// import React, { useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import EventContext from '../context/Eventcontext';

// const Events = () => {
//   const { events, loading, error, getEvents } = useContext(EventContext);

//   useEffect(() => {
//     getEvents();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <h1>All Events</h1>
//       {events.length > 0 ? (
//         events.map(event => (
//           <div key={event.id}>
//             <h2>{event.name}</h2>
//             <p>{event.description.substring(0, 150)}...</p>
//             <p>Date: {event.date}</p>
//             <p>Location: {event.location}</p>
//             <Link to={`/events/${event.id}`}>View Details</Link>
//           </div>
//         ))
//       ) : (
//         <p>No events available.</p>
//       )}
//     </div>
//   );
// };

// export default Events;


import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EventContext from '../context/Eventcontext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Events = () => {
  const { events, loading, error, getEvents } = useContext(EventContext);

  useEffect(() => {
    getEvents();
  }, []);

  // Helper function to get Google Maps iframe for event location
  const getLocationMapIframe = (location) => {
    const encodedLocation = encodeURIComponent(location);
    return `https://maps.google.com/maps?q=${encodedLocation}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
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

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">🎉 All Events</h1>

      {events.length === 0 ? (
        <div className="alert alert-info text-center">No events available at the moment.</div>
      ) : (
        <div className="row g-4">
          {events.map((event) => (
            <div key={event.id} className="col-md-6 col-lg-4">
              <div className="card shadow-sm h-100">
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title">{event.name}</h4>
                  <p className="card-text">{event.description.slice(0, 100)}...</p>
                  <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                  <div className="d-flex align-items-center text-danger mb-3">
                    <i className="bi bi-geo-alt-fill me-2"></i>
                    <strong>{event.location}</strong>
                  </div>

                  {/* Small map preview */}
                  <div className="small-map mb-3" style={{ height: '150px', overflow: 'hidden', borderRadius: '8px' }}>
                    <iframe
                      src={getLocationMapIframe(event.location)}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      style={{ border: '0', borderRadius: '8px' }}
                      allowFullScreen=""
                      loading="lazy"
                    />
                  </div>

                  {/* Button to view event details */}
                  <Link to={`/events/${event.id}`} className="btn btn-outline-primary mt-auto">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;
