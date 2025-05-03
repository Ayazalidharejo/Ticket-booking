// src/components/admin/AdminEvents.js
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EventContext from '../../context/EventContext';

const AdminEvents = () => {
  const { events, loading, error, getEvents, deleteEvent } = useContext(EventContext);

  useEffect(() => {
    getEvents();
  }, []);

  const handleDeleteEvent = async (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      await deleteEvent(id);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Manage Events</h1>
      <Link to="/admin/create-event">Create New Event</Link>
      
      {events.length > 0 ? (
        <div>
          {events.map(event => (
            <div key={event.id}>
              <h3>{event.name}</h3>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
              <Link to={`/admin/edit-event/${event.id}`}>Edit</Link>
              <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No events available.</p>
      )}
    </div>
  );
};

export default AdminEvents;