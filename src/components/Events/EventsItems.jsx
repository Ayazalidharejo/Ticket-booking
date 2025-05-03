// import React from 'react';
// import { Link } from 'react-router-dom';

// const EventItem = ({ event }) => {
//   const { id, name, description, date, location } = event;

//   return (
//     <div>
//       <h3>{name}</h3>
//       <p>{description.substring(0, 100)}...</p>
//       <p>Date: {new Date(date).toLocaleDateString()}</p>
//       <p>Location: {location}</p>
//       <Link to={`/events/${id}`}>View Details</Link>
//     </div>
//   );
// };

// export default EventItem;




import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const EventItem = ({ event }) => {
  const { id, name, description, date, location } = event;
  
  // Format date with more details
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  
  // Truncate description with word boundaries
  const truncatedDescription = description.length > 100 
    ? description.substring(0, 100).split(' ').slice(0, -1).join(' ') + '...'
    : description;

  return (
    <div className="card h-100 shadow-sm border-0 mb-4 transition-hover hover-elevate">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h3 className="card-title h5 fw-bold text-primary mb-0">{name}</h3>
          <span className="badge bg-primary rounded-pill">Event</span>
        </div>
        
        <div className="mb-3">
          <p className="card-text text-muted small">{truncatedDescription}</p>
        </div>
        
        <div className="d-flex justify-content-between flex-wrap event-meta">
          <div className="d-flex align-items-center mb-2 me-3">
            <i className="bi bi-calendar-event text-primary me-2"></i>
            <small>{formattedDate}</small>
          </div>
          
          <div className="d-flex align-items-center mb-2">
            <i className="bi bi-geo-alt text-primary me-2"></i>
            <small>{location}</small>
          </div>
        </div>
      </div>
      
      <div className="card-footer bg-white border-top-0 pt-0">
        <Link 
          to={`/events/${id}`} 
          className="btn btn-outline-primary w-100 rounded-pill"
        >
          <i className="bi bi-arrow-right-circle me-2"></i>
          View Details
        </Link>
      </div>
      
      <style jsx>{`
        .transition-hover {
          transition: all 0.3s ease;
        }
        .hover-elevate:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  );
};

export default EventItem;