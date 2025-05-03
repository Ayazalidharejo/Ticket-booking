// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { createEvent } from '../api/Api';
// import { AuthContext } from '../context/Authcontext';
// import 'bootstrap/dist/css/bootstrap.min.css';
// const CreateEvent = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     date: '',
//     location: '',
//     tickets: [{ ticketType: 'General Admission', price: 0, availability: 10 }]
//   });
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
  
//   const { token } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const { name, description, date, location, tickets } = formData;

//   const handleChange = e => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleTicketChange = (index, e) => {
//     const updatedTickets = [...tickets];
//     updatedTickets[index] = {
//       ...updatedTickets[index],
//       [e.target.name]: e.target.name === 'price' || e.target.name === 'availability' 
//         ? Number(e.target.value) 
//         : e.target.value
//     };
    
//     setFormData({ ...formData, tickets: updatedTickets });
//   };

//   const addTicketType = () => {
//     setFormData({
//       ...formData,
//       tickets: [...tickets, { ticketType: '', price: 0, availability: 10 }]
//     });
//   };

//   const removeTicketType = index => {
//     const updatedTickets = tickets.filter((_, i) => i !== index);
//     setFormData({ ...formData, tickets: updatedTickets });
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       await createEvent(formData, token);
//       navigate('/');
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Create New Event</h2>
//       {error && <div>{error}</div>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Event Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Description:</label>
//           <textarea
//             name="description"
//             value={description}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Date:</label>
//           <input
//             type="datetime-local"
//             name="date"
//             value={date}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Location:</label>
//           <input
//             type="text"
//             name="location"
//             value={location}
//             onChange={handleChange}
//             required
//           />
//         </div>
        
//         <h3>Tickets</h3>
//         {tickets.map((ticket, index) => (
//           <div key={index}>
//             <div>
//               <label>Ticket Type:</label>
//               <input
//                 type="text"
//                 name="ticketType"
//                 value={ticket.ticketType}
//                 onChange={(e) => handleTicketChange(index, e)}
//                 required
//               />
//             </div>
//             <div>
//               <label>Price:</label>
//               <input
//                 type="number"
//                 name="price"
//                 value={ticket.price}
//                 onChange={(e) => handleTicketChange(index, e)}
//                 required
//                 min="0"
//                 step="0.01"
//               />
//             </div>
//             <div>
//               <label>Availability:</label>
//               <input
//                 type="number"
//                 name="availability"
//                 value={ticket.availability}
//                 onChange={(e) => handleTicketChange(index, e)}
//                 required
//                 min="1"
//               />
//             </div>
//             {tickets.length > 1 && (
//               <button type="button" onClick={() => removeTicketType(index)}>
//                 Remove Ticket Type
//               </button>
//             )}
//           </div>
//         ))}
        
//         <button type="button" onClick={addTicketType}>
//           Add Ticket Type
//         </button>
        
//         <div>
//           <button type="submit" disabled={loading}>
//             {loading ? 'Creating...' : 'Create Event'}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateEvent;








import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateEvent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: '',
    location: ''
  });
  const [tickets, setTickets] = useState([
    { ticketType: 'Standard', price: 0, availability: 10 }
  ]);
  const [error, setError] = useState('');
  
  const { name, description, date, location } = formData;
  
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
    if (tickets.length > 1) {
      setTickets(tickets.filter((_, i) => i !== index));
    }
  };
  
  const onSubmit = async e => {
    e.preventDefault();
    
    try {
      const token = localStorage.getItem('token');
      
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      };
      
      const eventData = {
        ...formData,
        tickets
      };
      
      await axios.post('https://booking-backend-xi.vercel.app/api/events', eventData, config);
      navigate('/admin');
    } catch (err) {
      setError(err.response.data.message || 'Failed to create event');
    }
  };
  
  return (
    <div>
      <h2>Create New Event</h2>
      {error && <p>{error}</p>}
      
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
          ></textarea>
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
        
        <h3>Ticket Types</h3>
        {tickets.map((ticket, index) => (
          <div key={index}>
            <div>
              <label>Ticket Type</label>
              <input
                type="text"
                value={ticket.ticketType}
                onChange={e => onTicketChange(index, 'ticketType', e.target.value)}
                required
              />
            </div>
            <div>
              <label>Price ($)</label>
              <input
                type="number"
                value={ticket.price}
                onChange={e => onTicketChange(index, 'price', e.target.value)}
                min="0"
                step="0.01"
                required
              />
            </div>
            <div>
              <label>Availability</label>
              <input
                type="number"
                value={ticket.availability}
                onChange={e => onTicketChange(index, 'availability', e.target.value)}
                min="1"
                required
              />
            </div>
            <button type="button" onClick={() => removeTicketType(index)}>
              Remove
            </button>
          </div>
        ))}
        
        <button type="button" onClick={addTicketType}>
          Add Ticket Type
        </button>
        
        <div>
          <button type="submit">Create Event</button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
