import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


const EditEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: '',
    location: ''
  });
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const { name, description, date, location } = formData;

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const token = localStorage.getItem('token');
        
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };
        
        const res = await axios.get(`http://localhost:5000/api/events/${id}`, config);
        
        // Format date for input field (YYYY-MM-DD)
        const eventDate = new Date(res.data.date);
        const formattedDate = eventDate.toISOString().split('T')[0];
        
        setFormData({
          name: res.data.name,
          description: res.data.description,
          date: formattedDate,
          location: res.data.location
        });
        
        setTickets(res.data.tickets || []);
        setLoading(false);
      } catch (err) {
        setError('Failed to load event');
        setLoading(false);
      }
    };
    
    fetchEvent();
  }, [id]);

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onTicketChange = (index, field, value) => {
    const newTickets = [...tickets];
    newTickets[index][field] = field === 'price' || field === 'availability' ? Number(value) : value;
    setTickets(newTickets);
  };

  const addTicketType = () => {
    setTickets([...tickets, { ticketType: '', price: 0, availability: 10 }]);
  };

  const removeTicketType = index => {
    const newTickets = tickets.filter((_, i) => i !== index);
    setTickets(newTickets);
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };
      
      const eventData = {
        name,
        description,
        date,
        location,
        tickets
      };

      const res = await axios.put(`http://localhost:5000/api/events/${id}`, eventData, config);
      
      // Redirect to event detail page after success
      navigate(`/event-detail/${res.data._id}`);
    } catch (err) {
      setError('Failed to update event');
    }
  };

  if (loading) {
    return <div className="text-center">⏳ Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="edit-event-container">
      <h1 className="text-center">Edit Event</h1>
      <form onSubmit={onSubmit} className="event-form">
        <div className="form-group">
          <label>Name</label>
          <input 
            type="text" 
            className="form-control" 
            name="name" 
            value={name} 
            onChange={onChange} 
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea 
            className="form-control" 
            name="description" 
            value={description} 
            onChange={onChange} 
            required
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input 
            type="date" 
            className="form-control" 
            name="date" 
            value={date} 
            onChange={onChange} 
            required
          />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input 
            type="text" 
            className="form-control" 
            name="location" 
            value={location} 
            onChange={onChange} 
            required
          />
        </div>

        <div className="tickets-section">
          <h4 className="mt-4">Manage Tickets</h4>
          {tickets.map((ticket, index) => (
            <div className="ticket-form-row" key={index}>
              <div className="form-group">
                <label>Ticket Type</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={ticket.ticketType} 
                  onChange={e => onTicketChange(index, 'ticketType', e.target.value)} 
                  required
                />
              </div>
              <div className="form-group">
                <label>Price</label>
                <input 
                  type="number" 
                  className="form-control" 
                  value={ticket.price} 
                  onChange={e => onTicketChange(index, 'price', e.target.value)} 
                  required
                />
              </div>
              <div className="form-group">
                <label>Availability</label>
                <input 
                  type="number" 
                  className="form-control" 
                  value={ticket.availability} 
                  onChange={e => onTicketChange(index, 'availability', e.target.value)} 
                  required
                />
              </div>
              <button 
                type="button" 
                className="btn btn-danger" 
                onClick={() => removeTicketType(index)}
              >
                Remove Ticket
              </button>
            </div>
          ))}
          <button 
            type="button" 
            className="btn btn-primary" 
            onClick={addTicketType}
          >
            Add Ticket Type
          </button>
        </div>

        <div className="form-group text-center mt-4">
          <button type="submit" className="btn btn-success">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditEvent;
