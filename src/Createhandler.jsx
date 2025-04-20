import React, { useState } from 'react';

// Your form for creating events
function RenderCreateEvent({ newEvent, setNewEvent, codeError, setCodeError, addTicketType, updateTicketField, removeTicketType, handleCreateEvent }) {
  return (
    <div className="container py-5">
      <button className="btn btn-link mb-3" onClick={() => setPage('events')}>← Back to Events</button>
      <h2 className="mb-4">Create New Event</h2>

      <div className="card shadow-sm">
        <div className="card-body">
          <form onSubmit={handleCreateEvent}>
            <div className="mb-3">
              <label className="form-label">Event Name</label>
              <input
                type="text"
                className="form-control"
                value={newEvent.name}
                onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
                required
              />
            </div>

            {/* Repeat for description, date, location, and ticket types */}
            
            <div className="mb-3">
              <label className="form-label">Secret Event Code</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter secret code to allow event creation"
                value={newEvent.secretCode || ''}
                onChange={(e) => setNewEvent({ ...newEvent, secretCode: e.target.value })}
                required
              />
            </div>

            {/* Show error if wrong code */}
            {codeError && (
              <div className="alert alert-danger">
                ❌ Invalid code. Please enter a valid event creation code.
              </div>
            )}

            <button type="button" className="btn btn-outline-secondary mb-4" onClick={addTicketType}>
              + Add Another Ticket Type
            </button>

            <div>
              <button type="submit" className="btn btn-success btn-lg">
                Create Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [newEvent, setNewEvent] = useState({
    name: '',
    description: '',
    date: '',
    location: '',
    secretCode: '',
    tickets: [{ ticketType: '', price: '', availability: '' }],
  });
  const [codeError, setCodeError] = useState('');

  // Add ticket type
  const addTicketType = () => {
    setNewEvent({
      ...newEvent,
      tickets: [...newEvent.tickets, { ticketType: '', price: '', availability: '' }],
    });
  };

  // Update ticket fields
  const updateTicketField = (index, field, value) => {
    const updatedTickets = [...newEvent.tickets];
    updatedTickets[index][field] = value;
    setNewEvent({ ...newEvent, tickets: updatedTickets });
  };

  // Remove ticket type
  const removeTicketType = (index) => {
    const updatedTickets = newEvent.tickets.filter((_, i) => i !== index);
    setNewEvent({ ...newEvent, tickets: updatedTickets });
  };

  // Handle form submission (create event)
  const handleCreateEvent = (e) => {
    e.preventDefault();
    if (newEvent.secretCode !== 'secret123') {
      setCodeError('Invalid code. Please enter a valid event creation code.');
    } else {
      setCodeError('');
      console.log('Event created:', newEvent);
    }
  };

  // Main App Render
  return (
    <div className="app">
      <RenderCreateEvent
        newEvent={newEvent}
        setNewEvent={setNewEvent}
        codeError={codeError}
        setCodeError={setCodeError}
        addTicketType={addTicketType}
        updateTicketField={updateTicketField}
        removeTicketType={removeTicketType}
        handleCreateEvent={handleCreateEvent}
      />
    </div>
  );
}

export default App;
