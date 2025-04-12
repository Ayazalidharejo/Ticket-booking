
// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/events')
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <div className="event-list">
      <h1>Upcoming Events</h1>
      {events.map(event => (
        <div key={event.id} className="event-card">
          <h2>{event.name}</h2>
          <p>{event.location} - {event.date}</p>
          <a href={`/event/${event.id}`}>View Details</a>
        </div>
      ))}
    </div>
  );
};

const EventDetail = ({ match }) => {
  const [event, setEvent] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [booking, setBooking] = useState({
    username: '',
    ticketType: '',
    quantity: 1
  });

  useEffect(() => {
    fetch(`http://localhost:5000/events/${match.params.id}`)
      .then(res => res.json())
      .then(data => {
        setEvent(data);
        setTickets(data.tickets);
      });
  }, [match.params.id]);

  const handleBooking = () => {
    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventID: event.id,
        ...booking
      })
    }).then(() => alert('Booking successful!'));
  };

  if (!event) return <div>Loading...</div>;

  return (
    <div className="event-detail">
      <h1>{event.name}</h1>
      <p>{event.description}</p>
      <div className="booking-form">
        <input
          type="text"
          placeholder="Username"
          value={booking.username}
          onChange={e => setBooking({...booking, username: e.target.value})}
        />
        <select
          value={booking.ticketType}
          onChange={e => setBooking({...booking, ticketType: e.target.value})}
        >
          <option value="">Select Ticket Type</option>
          {tickets.map(ticket => (
            <option key={ticket.id} value={ticket.ticketType}>
              {ticket.ticketType} - £{ticket.price}
            </option>
          ))}
        </select>
        <input
          type="number"
          value={booking.quantity}
          onChange={e => setBooking({...booking, quantity: e.target.value})}
        />
        <button onClick={handleBooking}>Book Now</button>
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={EventList} />
      <Route path="/event/:id" component={EventDetail} />
    </Switch>
  </Router>
);

export default App;