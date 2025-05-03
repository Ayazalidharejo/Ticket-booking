// // src/components/admin/DeleteEvent.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const DeleteEvent = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   // Fetch events when the component mounts
//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const token = localStorage.getItem('token');
        
//         const config = {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         };
        
//         // Fetch events from backend
//         const response = await axios.get('http://localhost:5000/api/events', config);
//         setEvents(response.data);  // Set events from the API
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to load events');
//         setLoading(false);
//       }
//     };
    
//     fetchEvents();
//   }, []);

//   // Delete an event from the database
//   const deleteEvent = async (id) => {
//     try {
//       const token = localStorage.getItem('token');
      
//       const config = {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       };
      
//       // Delete event from the backend
//       await axios.delete(`http://localhost:5000/api/events/${id}`, config);

//       // Remove the event from the state (UI update)
//       setEvents(events.filter(event => event.id !== id));
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to delete event');
//     }
//   };

//   if (loading) return <p>Loading events...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="container mt-4">
//       <h2>Delete Events</h2>
//       <p>Manage and remove events below:</p>

//       {events.length === 0 ? (
//         <p>No events available to delete</p>
//       ) : (
//         <div>
//           {events.map((event) => (
//             <div key={event.id} className="mb-3 p-3 border rounded">
//               <h4>{event.name}</h4>
//               <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
//               <p><strong>Location:</strong> {event.location}</p>
//               <button
//                 className="btn btn-danger"
//                 onClick={() => deleteEvent(event.id)}
//               >
//                 Delete Event
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

//       <button
//         className="btn btn-secondary mt-3"
//         onClick={() => navigate('/admin/dashboard')}
//       >
//         Back to Dashboard
//       </button>
//     </div>
//   );
// };

// export default DeleteEvent;



// src/components/admin/DeleteEvent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeleteEvent = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Fetch events when the component mounts
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const token = localStorage.getItem('token');
        
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };
        
        // Fetch events from backend
        const response = await axios.get('https://booking-backend-xi.vercel.app/api/events', config);
        setEvents(response.data);  // Set events from the API
        setLoading(false);
      } catch (err) {
        setError('Failed to load events');
        setLoading(false);
      }
    };
    
    fetchEvents();
  }, []);

  // Delete an event from the database
  const deleteEvent = async (id) => {
    try {
      const token = localStorage.getItem('token');
      
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };
      
      // Delete event from the backend
      await axios.delete(`https://booking-backend-xi.vercel.app/api/events/${id}`, config);
    


      // Remove the event from the state (UI update)
      setEvents(events.filter(event => event.id !== id));
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete event');
    }
  };

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Delete Events</h2>
      <p className="text-center mb-4">Manage and remove events below:</p>

      {events.length === 0 ? (
        <div className="alert alert-info text-center">No events available to delete</div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {events.map((event) => (
            <div key={event.id} className="col">
              <div className="card shadow-sm border-light rounded">
                <div className="card-body">
                  <h4 className="card-title">{event.name}</h4>
                  <p className="card-text"><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                  <p className="card-text"><strong>Location:</strong> {event.location}</p>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteEvent(event.id)}
                    >
                      Delete Event
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="text-center mt-4">
        <button
          className="btn btn-secondary"
          onClick={() => navigate('/admin/dashboard')}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default DeleteEvent;
