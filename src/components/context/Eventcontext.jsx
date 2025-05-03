import React, { createContext, useState, useEffect } from 'react';
import api from '../api/Api';

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get all events
  const getEvents = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await api.get('/events');
      setEvents(res.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch events');
    } finally {
      setLoading(false);
    }
  };

  // Get event by ID
  const getEventById = async (id) => {
    try {
      setLoading(true);
      setError(null);
      const res = await api.get(`/events/${id}`);
      setCurrentEvent(res.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch event details');
    } finally {
      setLoading(false);
    }
  };

  // Create new event (admin only)
  const createEvent = async (eventData) => {
    try {
      setLoading(true);
      setError(null);
      const res = await api.post('/events', eventData);
      setEvents([...events, res.data]);
      return res.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create event');
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Update event (admin only)
  const updateEvent = async (id, eventData) => {
    try {
      setLoading(true);
      setError(null);
      const res = await api.put(`/events/${id}`, eventData);
      setEvents(events.map(event => event.id === id ? res.data : event));
      setCurrentEvent(res.data);
      return res.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update event');
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Delete event (admin only)
  const deleteEvent = async (id) => {
    try {
      setLoading(true);
      setError(null);
      await api.delete(`/events/${id}`);
      setEvents(events.filter(event => event.id !== id));
      return true;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete event');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Load events on initial render
  useEffect(() => {
    getEvents();
  }, []);

  return (
    <EventContext.Provider
      value={{
        events,
        currentEvent,
        loading,
        error,
        getEvents,
        getEventById,
        createEvent,
        updateEvent,
        deleteEvent
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventContext;
