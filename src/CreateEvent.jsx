import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const CreateEvent = ({ setPage }) => {
  const [newEvent, setNewEvent] = useState({
    name: '',
    description: '',
    date: '',
    location: '',
    secretCode: '',
    tickets: [{ ticketType: '', price: '', availability: '' }],
  });

  const [codeError, setCodeError] = useState(false);

  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markerRef = useRef(null);

  const handleCreateEvent = (e) => {
    e.preventDefault();

    if (newEvent.secretCode !== 'SECRET123') {
      setCodeError(true);
      return;
    }

    setCodeError(false);
    console.log('✅ Event created:', newEvent);
    alert('Event created successfully!');
    setPage('events'); // Navigate back to events
  };

  const addTicketType = () => {
    setNewEvent({
      ...newEvent,
      tickets: [...newEvent.tickets, { ticketType: '', price: '', availability: '' }],
    });
  };

  const removeTicketType = (index) => {
    const updatedTickets = newEvent.tickets.filter((_, i) => i !== index);
    setNewEvent({ ...newEvent, tickets: updatedTickets });
  };

  const updateTicketField = (index, field, value) => {
    const updatedTickets = [...newEvent.tickets];
    updatedTickets[index][field] = value;
    setNewEvent({ ...newEvent, tickets: updatedTickets });
  };

  useEffect(() => {
    if (!mapRef.current || !newEvent.location) return;

    const fetchCoordinates = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(newEvent.location)}`
        );
        const data = await response.json();
        if (data.length > 0) {
          const { lat, lon } = data[0];

          if (!mapInstance.current) {
            mapInstance.current = L.map(mapRef.current).setView([lat, lon], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '&copy; OpenStreetMap contributors',
            }).addTo(mapInstance.current);
          } else {
            mapInstance.current.setView([lat, lon], 13);
          }

          if (markerRef.current) {
            markerRef.current.setLatLng([lat, lon]);
          } else {
            markerRef.current = L.marker([lat, lon]).addTo(mapInstance.current);
          }
        }
      } catch (error) {
        console.error('Map error:', error);
      }
    };

    fetchCoordinates();
  }, [newEvent.location]);

  return (
    <div className="container py-5">
      <button className="btn btn-link mb-3" onClick={() => setPage('events')}>
        ← Back to Events
      </button>
      <h2 className="mb-4">Create New Event</h2>

      <div className="card shadow-sm">
        <div className="card-body">
          <form onSubmit={handleCreateEvent}>
            {/* Event Name */}
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

            {/* Description */}
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                rows="3"
                value={newEvent.description}
                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                required
              ></textarea>
            </div>

            {/* Date and Location */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={newEvent.date}
                  onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Location</label>
                <input
                  type="text"
                  className="form-control"
                  value={newEvent.location}
                  onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Map Preview */}
            <div className="mb-4">
              <label className="form-label">Map Preview</label>
              <div
                ref={mapRef}
                style={{ height: '300px', width: '100%' }}
                className="border rounded"
              />
            </div>

            {/* Tickets */}
            <h4 className="mt-4 mb-3">Ticket Types</h4>
            {newEvent.tickets.map((ticket, index) => (
              <div key={index} className="card mb-3 p-3 bg-light">
                <div className="row">
                  <div className="col-md-4 mb-2">
                    <label className="form-label">Ticket Type</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g., VIP, Standard"
                      value={ticket.ticketType}
                      onChange={(e) => updateTicketField(index, 'ticketType', e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-3 mb-2">
                    <label className="form-label">Price (£)</label>
                    <input
                      type="number"
                      className="form-control"
                      min="0"
                      value={ticket.price}
                      onChange={(e) => updateTicketField(index, 'price', e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-3 mb-2">
                    <label className="form-label">Availability</label>
                    <input
                      type="number"
                      className="form-control"
                      min="1"
                      value={ticket.availability}
                      onChange={(e) => updateTicketField(index, 'availability', e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-2 d-flex align-items-end">
                    {index > 0 && (
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => removeTicketType(index)}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <button
              type="button"
              className="btn btn-outline-secondary mb-4"
              onClick={addTicketType}
            >
              + Add Another Ticket Type
            </button>

            {/* Secret Code */}
            <div className="mb-3">
              <label className="form-label">Secret Event Code</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter secret code"
                value={newEvent.secretCode}
                onChange={(e) => setNewEvent({ ...newEvent, secretCode: e.target.value })}
                required
              />
            </div>

            {codeError && (
              <div className="alert alert-danger">
                ❌ Invalid code. Please enter a valid event creation code.
              </div>
            )}

            {/* Submit Button */}
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
};

export default CreateEvent;
