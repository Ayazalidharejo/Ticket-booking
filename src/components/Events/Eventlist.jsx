// // import React, { useState, useEffect } from 'react';
// // import { getAllEvents } from '../api/Api';
// // import EventItem from './EventsItems';

// // const EventList = () => {
// //   const [events, setEvents] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');

// //   useEffect(() => {
// //     const fetchEvents = async () => {
// //       try {
// //         const eventsData = await getAllEvents();
// //         setEvents(eventsData);
// //       } catch (err) {
// //         setError(err.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchEvents();
// //   }, []);

// //   if (loading) {
// //     return <div>Loading events...</div>;
// //   }

// //   if (error) {
// //     return <div>Error: {error}</div>;
// //   }

// //   return (
// //     <div>
// //       <h2>Upcoming Events</h2>
// //       {events.length === 0 ? (
// //         <p>No events found.</p>
// //       ) : (
// //         <div>
// //           {events.map(event => (
// //             <EventItem key={event.id} event={event} />
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default EventList;













// import React, { useState, useEffect } from 'react';
// import { getAllEvents } from '../api/Api';
// import EventItem from './EventsItems';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const EventList = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const eventsData = await getAllEvents();
//         setEvents(eventsData);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   if (loading) {
//     return (
//       <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
//         <div className="spinner-border text-primary" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="alert alert-danger text-center">Error: {error}</div>;
//   }

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4 text-center">Upcoming Events</h2>
//       {events.length === 0 ? (
//         <div className="alert alert-info text-center">No events found.</div>
//       ) : (
//         <div className="row">
//           {events.map((event) => (
//             <div key={event.id} className="col-md-4 mb-4">
//               <EventItem event={event} />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default EventList;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get('https://booking-backend-xi.vercel.app/api/events');
        setEvents(res.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load events');
        setLoading(false);
      }
    };
    
    fetchEvents();
  }, []);
  
  if (loading) return <p>Loading events...</p>;
  if (error) return <p>{error}</p>;
  
  return (
    <div>
      <h2>All Events</h2>
      {events.length === 0 ? (
        <p>No events available</p>
      ) : (
        <div>
          {events.map(event => (
            <div key={event.id}>
              <h3>{event.name}</h3>
              <p>Date: {new Date(event.date).toLocaleDateString()}</p>
              <p>Location: {event.location}</p>
              <Link to={`/events/${event.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventList;
