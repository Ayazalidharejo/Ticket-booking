import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AdminDashboard = () => {
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [activeTab, setActiveTab] = useState('events');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };
        
        const [eventsRes, usersRes, bookingsRes] = await Promise.all([
          axios.get('http://localhost:5000/api/events', config),
          axios.get('http://localhost:5000/api/admin/users', config),
          axios.get('http://localhost:5000/api/admin/bookings', config)
        ]);
        
        setEvents(eventsRes.data);
        setUsers(usersRes.data);
        setBookings(bookingsRes.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load admin data');
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  const deleteEvent = async (id) => {
    try {
      const token = localStorage.getItem('token');
      
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };
      
      await axios.delete(`http://localhost:5000/api/events/${id}`, config);
      
      // Remove deleted event from UI
      setEvents(events.filter(event => event.id !== id));
    } catch (err) {
      setError(err.response.data.message || 'Failed to delete event');
    }
  };
  
  if (loading) return <p>Loading admin dashboard...</p>;
  if (error) return <p>{error}</p>;
  
  return (
    <div>
      <h2>Admin Dashboard</h2>
      
      <div>
        <button onClick={() => setActiveTab('events')}>Events</button>
        <button onClick={() => setActiveTab('users')}>Users</button>
        <button onClick={() => setActiveTab('bookings')}>Bookings</button>
      </div>
      
      {activeTab === 'events' && (
        <div>
          <h3>Events Management</h3>
          <Link to="/admin/events/create">Create New Event</Link>
          
          {events.length === 0 ? (
            <p>No events available</p>
          ) : (
            <div>
              {events.map(event => (
                <div key={event.id}>
                  <h4>{event.name}</h4>
                  <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                  <p>Location: {event.location}</p>
                  <div>
                    <Link to={`/admin/events/edit/${event.id}`}>Edit</Link>
                    <button onClick={() => deleteEvent(event.id)}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      
      {activeTab === 'users' && (
        <div>
          <h3>User Management</h3>
          
          {users.length === 0 ? (
            <p>No users available</p>
          ) : (
            <div>
              {users.map(user => (
                <div key={user.id}>
                  <h4>{user.username}</h4>
                  <p>Email: {user.email}</p>
                  <p>Role: {user.isAdmin ? 'Admin' : 'User'}</p>
                  <p>Joined: {new Date(user.date).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      
      {activeTab === 'bookings' && (
        <div>
          <h3>Booking Management</h3>
          
          {bookings.length === 0 ? (
            <p>No bookings available</p>
          ) : (
            <div>
              {bookings.map(booking => (
                <div key={booking.id}>
                  <h4>Booking #{booking.id}</h4>
                  <p>Event: {booking.eventName}</p>
                  <p>Ticket: {booking.ticketType}</p>
                  <p>Quantity: {booking.quantity}</p>
                  <p>Price: £{booking.price}</p>
                  <p>Status: {booking.status}</p>
                  <p>User: {booking.username}</p>
                  <p>Date: {new Date(booking.bookingDate).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;