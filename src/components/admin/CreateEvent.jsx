// // src/components/admin/CreateEvent.js
// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import EventContext from '../context/Eventcontext';

// const CreateEvent = () => {
//   const { createEvent, error } = useContext(EventContext);
//   const navigate = useNavigate();
  
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     date: '',
//     location: '',
//     tickets: [{ ticketType: '', price: '', availability: 10 }]
//   });

//   const { name, description, date, location, tickets } = formData;

//   const onChange = e => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const onTicketChange = (e, index) => {
//     const newTickets = [...tickets];
//     newTickets[index][e.target.name] = e.target.value;
//     setFormData({ ...formData, tickets: newTickets });
//   };

//   const addTicketType = () => {
//     setFormData({
//       ...formData,
//       tickets: [...tickets, { ticketType: '', price: '', availability: 10 }]
//     });
//   };

//   const removeTicketType = (index) => {
//     const newTickets = [...tickets];
//     newTickets.splice(index, 1);
//     setFormData({ ...formData, tickets: newTickets });
//   };

//   const onSubmit = async e => {
//     e.preventDefault();
    
//     // Convert price and availability to numbers
//     const formattedData = {
//       ...formData,
//       tickets: formData.tickets.map(ticket => ({
//         ...ticket,
//         price: parseFloat(ticket.price),
//         availability: parseInt(ticket.availability)
//       }))
//     };
    
//     const event = await createEvent(formattedData);
//     if (event) {
//       navigate('/admin/events');
//     }
//   };

//   return (
//     <div>
//       <h1>Create New Event</h1>
//       {error && <div>{error}</div>}
      
//       <form onSubmit={onSubmit}>
//         <div>
//           <label>Event Name</label>
//           <input
//             type="text"
//             name="name"
//             value={name}
//             onChange={onChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Description</label>
//           <textarea
//             name="description"
//             value={description}
//             onChange={onChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Date</label>
//           <input
//             type="date"
//             name="date"
//             value={date}
//             onChange={onChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Location</label>
//           <input
//             type="text"
//             name="location"
//             value={location}
//             onChange={onChange}
//             required
//           />
//         </div>
        
//         <h2>Ticket Types</h2>
//         {tickets.map((ticket, index) => (
//           <div key={index}>
//             <div>
//               <label>Ticket Type</label>
//               <input
//                 type="text"
//                 name="ticketType"
//                 value={ticket.ticketType}
//                 onChange={(e) => onTicketChange(e, index)}
//                 required
//               />
//             </div>
//             <div>
//               <label>Price</label>
//               <input
//                 type="number"
//                 name="price"
//                 value={ticket.price}
//                 onChange={(e) => onTicketChange(e, index)}
//                 step="0.01"
//                 min="0"
//                 required
//               />
//             </div>
//             <div>
//               <label>Availability</label>
//               <input
//                 type="number"
//                 name="availability"
//                 value={ticket.availability}
//                 onChange={(e) => onTicketChange(e, index)}
//                 min="1"
//                 required
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
//           <button type="submit">Create Event</button>
//           <button type="button" onClick={() => navigate('/admin/events')}>
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateEvent;




// src/components/admin/CreateEvent.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import EventContext from '../context/Eventcontext';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateEvent = () => {
  const { createEvent, error } = useContext(EventContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: '',
    location: '',
    tickets: [{ ticketType: '', price: '', availability: 10 }]
  });

  const [successMessage, setSuccessMessage] = useState('');

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

    const formattedData = {
      ...formData,
      tickets: formData.tickets.map(ticket => ({
        ...ticket,
        price: parseFloat(ticket.price),
        availability: parseInt(ticket.availability)
      }))
    };

    const event = await createEvent(formattedData);
    if (event) {
      setSuccessMessage('Event created successfully!');
      setTimeout(() => navigate('/admin/events'), 2000);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Create New Event</h2>

      {error && <div className="alert alert-danger">{error}</div>}
      {successMessage && <div className="alert alert-success">{successMessage}</div>}

      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Event Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            value={description}
            onChange={onChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={date}
            onChange={onChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            name="location"
            value={location}
            onChange={onChange}
            required
          />
        </div>

        <h4>Ticket Types</h4>
        {tickets.map((ticket, index) => (
          <div className="border p-3 mb-3 rounded" key={index}>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label className="form-label">Ticket Type</label>
                <input
                  type="text"
                  className="form-control"
                  name="ticketType"
                  value={ticket.ticketType}
                  onChange={(e) => onTicketChange(e, index)}
                  required
                />
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Price</label>
                <input
                  type="number"
                  className="form-control"
                  name="price"
                  value={ticket.price}
                  onChange={(e) => onTicketChange(e, index)}
                  step="0.01"
                  min="0"
                  required
                />
              </div>
              <div className="col-md-3 mb-3">
                <label className="form-label">Availability</label>
                <input
                  type="number"
                  className="form-control"
                  name="availability"
                  value={ticket.availability}
                  onChange={(e) => onTicketChange(e, index)}
                  min="1"
                  required
                />
              </div>
              <div className="col-md-1 d-flex align-items-end mb-3">
                {tickets.length > 1 && (
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => removeTicketType(index)}
                  >
                    &times;
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}

        <button
          type="button"
          className="btn btn-secondary mb-3"
          onClick={addTicketType}
        >
          Add Ticket Type
        </button>

        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">
            Create Event
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => navigate('/admin/events')}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
