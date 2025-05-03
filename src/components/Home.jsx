// import React, { useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import EventContext from './context/Eventcontext';

// const Home = () => {
//   const { events, loading, getEvents } = useContext(EventContext);

//   useEffect(() => {
//     getEvents();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Welcome to Ticket Booking System</h1>
//       <p>Book tickets for your favorite events!</p>
      
//       <h2>Upcoming Events</h2>
//       {events.length > 0 ? (
//         <div>
//           {events.slice(0, 3).map(event => (
//             <div key={event.id}>
//               <h3>{event.name}</h3>
//               <p>{event.description.substring(0, 100)}...</p>
//               <p>Date: {event.date}</p>
//               <p>Location: {event.location}</p>
//               <Link to={`/events/${event.id}`}>View Details</Link>
//             </div>
//           ))}
//           <div>
//             <Link to="/events">View All Events</Link>
//           </div>
//         </div>
//       ) : (
//         <p>No upcoming events at the moment.</p>
//       )}
//     </div>
//   );
// };

// export default Home;


import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EventContext from './context/Eventcontext';
import 'bootstrap/dist/css/bootstrap.min.css';

// Function to generate Google Map iframe HTML
const getLocationMapIframe = (locationName) => {
  const encodedLocation = encodeURIComponent(locationName);
  return `
    <iframe 
      src="https://maps.google.com/maps?q=${encodedLocation}&t=&z=13&ie=UTF8&iwloc=&output=embed" 
      width="100%" 
      height="150" 
      frameborder="0" 
      scrolling="no" 
      marginheight="0" 
      marginwidth="0"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>`;
};

const Home = () => {
  const { events, loading, getEvents } = useContext(EventContext);

  useEffect(() => {
    getEvents();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border text-primary" role="status" />
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">🎟️ Ticket Booking System</h1>
        <p className="text-muted">Book tickets for your favorite events across the country.</p>
      </div>

      <h2 className="mb-4">📅 Upcoming Events</h2>

      <div className="row">
        {events.length === 0 ? (
          <div className="col-12">
            <div className="alert alert-info text-center">No upcoming events at the moment.</div>
          </div>
        ) : (
          events.slice(0, 3).map((event) => (
            <div key={event.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title">{event.name}</h4>
                  <p className="card-text">{event.description.slice(0, 100)}...</p>
                  <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                  <div className="d-flex align-items-center text-danger mb-2">
                    <i className="bi bi-geo-alt-fill me-2"></i>
                    <strong>{event.location}</strong>
                  </div>

                  {/* Google Maps preview */}
                  <div
                    className="mb-3 rounded overflow-hidden"
                    dangerouslySetInnerHTML={{ __html: getLocationMapIframe(event.location) }}
                  />

                  <Link to={`/events/${event.id}`} className="btn btn-outline-primary mt-auto">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {events.length > 3 && (
        <div className="text-center mt-4">
          <Link to="/events" className="btn btn-primary">
            View All Events
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
