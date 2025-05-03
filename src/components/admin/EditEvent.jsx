// src/components/admin/EditEvent.js
import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EventContext from '../context/Eventcontext';

const EditEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentEvent, loading, error, getEventById, updateEvent } = useContext(EventContext);
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: '',
    location: '',
    tickets: []
  });

  // Load event data when component mounts
  useEffect(() => {
    getEventById(id);
  }, [id]);

  // Set form data when event is loaded
  useEffect(() => {
    if (currentEvent) {
      setFormData({
        name: currentEvent.name || '',
        description: currentEvent.description || '',
        date: currentEvent.date || '',
        location: currentEvent.location || '',
        tickets: currentEvent.tickets || []
      });
    }
  }, [currentEvent]);

  const { name, description, date, location, tickets } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onTicketChange = (e, index) => {
    const newTickets = [...tickets];
    newTickets[index][e.target.name] = e.target.value;
    setFormData({ ...formData, tickets: newTickets });
  };

  const addTicketType = () => {
    setFormData({
      ...formData,
      tickets: [...tickets, { ticketType: '', price: '', availability: 10 }]
    });
  };

  const removeTicketType = (index) => {
    const newTickets = [...tickets];
    newTickets.splice(index, 1);
    setFormData({ ...formData, tickets: newTickets });
  };

  const onSubmit = async e => {
    e.preventDefault();
    
    // Convert price and availability to numbers
    const formattedData = {
      ...formData,
      tickets: formData.tickets.map(ticket => ({
        ...ticket,
        price: parseFloat(ticket.price),
        availability: parseInt(ticket.availability)
      }))
    };
    
    const event = await updateEvent(id, formattedData);
    if (event) {
      navigate('/admin/events');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!currentEvent) {
    return <div>Event not found</div>;
  }

  return (
    <div>
      <h1>Edit Event</h1>
      {error && <div>{error}</div>}
      
      <form onSubmit={onSubmit}>
        <div>
          <label>Event Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={description}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={date}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={onChange}
            required
          />
        </div>
        
        <h2>Ticket Types</h2>
        {tickets.map((ticket, index) => (
          <div key={index}>
            <div>
              <label>Ticket Type</label>
              <input
                type="text"
                name="ticketType"
                value={ticket.ticketType}
                onChange={(e) => onTicketChange(e, index)}
                required
              />
            </div>
            <div>
              <label>Price</label>
              <input
                type="number"
                name="price"
                value={ticket.price}
                onChange={(e) => onTicketChange(e, index)}
                step="0.01"
                min="0"
                required
              />
            </div>
            <div>
              <label>Availability</label>
              <input
                type="number"
                name="availability"
                value={ticket.availability}
                onChange={(e) => onTicketChange(e, index)}
                min="0"
                required
              />
            </div>
            {tickets.length > 1 && (
              <button type="button" onClick={() => removeTicketType(index)}>
                Remove Ticket Type
              </button>
            )}
          </div>
        ))}
        
        <button type="button" onClick={addTicketType}>
          Add Ticket Type
        </button>
        
        <div>
          <button type="submit">Update Event</button>
          <button type="button" onClick={() => navigate('/admin/events')}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditEvent;
