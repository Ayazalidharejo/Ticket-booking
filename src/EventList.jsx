import React from 'react';
import { Link } from 'react-router-dom';

const EventList = ({ events }) => {
  return (
    <div className="row">
      {events.map(event => (
        <div className="col-md-4 mb-4" key={event.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{event.name}</h5>
              <p className="card-text">
                {new Date(event.date).toLocaleDateString()}<br/>
                {event.location}
              </p>
              <Link to={`/events/${event.id}`} className="btn btn-primary">
                View Details 
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;