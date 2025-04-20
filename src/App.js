
// import React, { useState, useEffect } from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import imgage from "./image/img.jpg"

// const App = () => {
//   const dummyTickets = [
//     { _id: "TKT001", eventName: "Summer Music Festival", ticketType: "VIP", price: 5000, availability: 15, isBookedByUser: false },
//     { _id: "TKT002", eventName: "Summer Music Festival", ticketType: "General", price: 1500, availability: 100, isBookedByUser: false },
//     { _id: "TKT003", eventName: "Summer Music Festival", ticketType: "Backstage", price: 8000, availability: 5, isBookedByUser: false },
//     { _id: "TKT004", eventName: "Comedy Night Special", ticketType: "Front Row", price: 2500, availability: 20, isBookedByUser: false },
//     { _id: "TKT005", eventName: "Comedy Night Special", ticketType: "Standard", price: 1000, availability: 80, isBookedByUser: false },
//     { _id: "TKT006", eventName: "Cricket Match: India vs Australia", ticketType: "Premium", price: 4000, availability: 50, isBookedByUser: true },
//     { _id: "TKT007", eventName: "Cricket Match: India vs Australia", ticketType: "Regular", price: 1800, availability: 200, isBookedByUser: false },
//     { _id: "TKT008", eventName: "Diwali Cultural Night", ticketType: "Family Pack", price: 3500, availability: 30, isBookedByUser: false },
//     { _id: "TKT009", eventName: "Diwali Cultural Night", ticketType: "Single Entry", price: 1200, availability: 150, isBookedByUser: false },
//     { _id: "TKT010", eventName: "Tech Conference 2025", ticketType: "Professional", price: 7500, availability: 100, isBookedByUser: false },
//     { _id: "TKT011", eventName: "Tech Conference 2025", ticketType: "Student", price: 3000, availability: 50, isBookedByUser: false },
//     { _id: "TKT012", eventName: "Food Festival", ticketType: "Tasting Pass", price: 2000, availability: 120, isBookedByUser: false },
//     { _id: "TKT013", eventName: "Food Festival", ticketType: "VIP Dining", price: 5500, availability: 40, isBookedByUser: false },
//     { _id: "TKT014", eventName: "Bollywood Dance Night", ticketType: "Premium", price: 3200, availability: 60, isBookedByUser: false },
//     { _id: "TKT015", eventName: "Bollywood Dance Night", ticketType: "Standard", price: 1400, availability: 120, isBookedByUser: false },
//     { _id: "TKT016", eventName: "Classical Music Concert", ticketType: "Gold", price: 4500, availability: 40, isBookedByUser: false },
//     { _id: "TKT017", eventName: "Classical Music Concert", ticketType: "Silver", price: 2800, availability: 80, isBookedByUser: false },
//     { _id: "TKT018", eventName: "Art Exhibition", ticketType: "Guided Tour", price: 1800, availability: 35, isBookedByUser: false },
//     { _id: "TKT019", eventName: "Art Exhibition", ticketType: "Self-Guided", price: 800, availability: 100, isBookedByUser: false },
//     { _id: "TKT020", eventName: "Startup Pitching Event", ticketType: "Investor", price: 10000, availability: 25, isBookedByUser: false },
//     { _id: "TKT021", eventName: "Startup Pitching Event", ticketType: "Entrepreneur", price: 2500, availability: 75, isBookedByUser: false },
//     { _id: "TKT022", eventName: "Science Fair 2025", ticketType: "Adult", price: 1200, availability: 150, isBookedByUser: false },
//     { _id: "TKT023", eventName: "Science Fair 2025", ticketType: "Child", price: 600, availability: 100, isBookedByUser: false },
//     { _id: "TKT024", eventName: "Literary Festival", ticketType: "Full Access", price: 3500, availability: 80, isBookedByUser: false },
//     { _id: "TKT025", eventName: "Literary Festival", ticketType: "Single Day", price: 1500, availability: 150, isBookedByUser: false },
//     { _id: "TKT026", eventName: "Fashion Week Mumbai", ticketType: "Front Row", price: 15000, availability: 20, isBookedByUser: false },
//     { _id: "TKT027", eventName: "Fashion Week Mumbai", ticketType: "General Seating", price: 5000, availability: 200, isBookedByUser: false },
//     { _id: "TKT028", eventName: "Yoga Retreat", ticketType: "3-Day Pass", price: 8000, availability: 30, isBookedByUser: false },
//     { _id: "TKT029", eventName: "Yoga Retreat", ticketType: "1-Day Pass", price: 3000, availability: 60, isBookedByUser: false },
//     { _id: "TKT030", eventName: "Gaming Tournament", ticketType: "Participant", price: 2000, availability: 128, isBookedByUser: false },
//     { _id: "TKT031", eventName: "Gaming Tournament", ticketType: "Spectator", price: 800, availability: 300, isBookedByUser: false },
//     { _id: "TKT032", eventName: "Photography Workshop", ticketType: "Professional", price: 6000, availability: 25, isBookedByUser: false },
//     { _id: "TKT033", eventName: "Photography Workshop", ticketType: "Amateur", price: 3500, availability: 40, isBookedByUser: false },
//     { _id: "TKT034", eventName: "Film Festival", ticketType: "All Access", price: 5500, availability: 50, isBookedByUser: false },
//     { _id: "TKT035", eventName: "Film Festival", ticketType: "Single Screening", price: 700, availability: 200, isBookedByUser: false },
//     { _id: "TKT036", eventName: "Business Conference", ticketType: "Executive", price: 12000, availability: 30, isBookedByUser: false },
//     { _id: "TKT037", eventName: "Business Conference", ticketType: "Standard", price: 6500, availability: 100, isBookedByUser: false },
//     { _id: "TKT038", eventName: "Standup Comedy Show", ticketType: "Premium", price: 3500, availability: 50, isBookedByUser: false },
//     { _id: "TKT039", eventName: "Standup Comedy Show", ticketType: "Regular", price: 1800, availability: 150, isBookedByUser: true },
//     { _id: "TKT040", eventName: "Book Fair", ticketType: "Unlimited Entry", price: 1000, availability: 500, isBookedByUser: false },
//     { _id: "TKT041", eventName: "Book Fair", ticketType: "Single Entry", price: 400, availability: 1000, isBookedByUser: false },
//     { _id: "TKT042", eventName: "Dance Competition", ticketType: "Participant", price: 1500, availability: 100, isBookedByUser: false },
//     { _id: "TKT043", eventName: "Dance Competition", ticketType: "Audience", price: 800, availability: 300, isBookedByUser: false },
//     { _id: "TKT044", eventName: "Medical Conference", ticketType: "Doctor", price: 8000, availability: 200, isBookedByUser: false },
//     { _id: "TKT045", eventName: "Medical Conference", ticketType: "Student", price: 3000, availability: 150, isBookedByUser: false },
//     { _id: "TKT046", eventName: "Street Food Festival", ticketType: "Full Access", price: 1500, availability: 0, isBookedByUser: false },
//     { _id: "TKT047", eventName: "Street Food Festival", ticketType: "Basic Entry", price: 500, availability: 0, isBookedByUser: false },
//     { _id: "TKT048", eventName: "Wine Tasting Event", ticketType: "Premium Selection", price: 4500, availability: 40, isBookedByUser: false },
//     { _id: "TKT049", eventName: "Wine Tasting Event", ticketType: "Standard Selection", price: 2500, availability: 80, isBookedByUser: false },
//     { _id: "TKT050", eventName: "Fitness Expo", ticketType: "Weekend Pass", price: 2000, availability: 150, isBookedByUser: false },
//     { _id: "TKT051", eventName: "Fitness Expo", ticketType: "Single Day", price: 900, availability: 300, isBookedByUser: false },
//     { _id: "TKT052", eventName: "International Auto Show", ticketType: "VIP Preview", price: 7500, availability: 30, isBookedByUser: false },
//     { _id: "TKT053", eventName: "International Auto Show", ticketType: "Regular Entry", price: 1500, availability: 500, isBookedByUser: false }
//   ];



//     // Initialize state from localStorage or use defaults
//     const [tickets, setTickets] = useState(() => {
//       const savedTickets = localStorage.getItem('tickets');
//       return savedTickets ? JSON.parse(savedTickets) : dummyTickets;
//     });
    
//     const [bookings, setBookings] = useState(() => {
//       const savedBookings = localStorage.getItem('bookings');
//       return savedBookings ? JSON.parse(savedBookings) : [];
//     });
  
//     // Authentication state
//     const storedToken = localStorage.getItem('token');
//     const initialPage = storedToken ? 'events' : 'login';
//     const [page, setPage] = useState(initialPage);
//     const [token, setToken] = useState(storedToken || '');
//     const [userId, setUserId] = useState(localStorage.getItem('userId') || '');
    
//     // Other state
//     const [events, setEvents] = useState([]);
//     const [selectedEvent, setSelectedEvent] = useState(null);
//     const [formData, setFormData] = useState({});
//     const [error, setError] = useState('');
  
//     // Auth effects
//     useEffect(() => {
//       if (localStorage.getItem('token')) {
//         setToken(localStorage.getItem('token'));
//         setUserId(localStorage.getItem('userId'));
//         if (page === 'login') setPage('events');
//       }
//     }, []);
  
//     // Event data loading
//     useEffect(() => {
//       if (token && page === 'events') {
//         const dummyEvents = [
//           { 
//             _id: 'e1', 
//             name: 'Rock Concert 2025',
//             description: 'Concert featuring top rock bands',
//             date: new Date('2025-06-15'),
//             location: 'lahore Beach Park',
//             tickets: [
//               { ticketType: 'VIP', price: 5000, availability: 15 },
//               { ticketType: 'General', price: 1500, availability: 100 },
//               { ticketType: 'Backstage', price: 8000, availability: 5 }
//             ]
//           },
//           { 
//             _id: 'e2', 
//             name: 'Tech Conference 2025',
//             description: 'Conference on latest tech trands',
//             date: new Date('2025-05-20'),
//             location: 'Karachi Comedy Club',
//             tickets: [
//               { ticketType: 'Front Row', price: 2500, availability: 20 },
//               { ticketType: 'Standard', price: 1000, availability: 80 }
//             ]
//           },
//           { 
//             _id: 'e2', 
//             name: 'Football Match 2025',
//             description: 'Football match between top teams',
//             date: new Date('2025-05-20'),
//             location: 'Faislaabad Comedy Club',
//             tickets: [
//               { ticketType: 'General', price: 50, availability: 100 },
//               { ticketType: 'VIP', price: 120, availability: 50 },
//               { ticketType: 'Student', price: 35, availability: 30 },
//               { ticketType: 'General', price: 75, availability: 200 },
//               { ticketType: 'VIP', price: 150, availability: 100 },
//               { ticketType: 'General', price: 40, availability: 150 },
//               { ticketType: 'VIP', price: 90, availability: 80 },
//               { ticketType: 'General', price: 30, availability: 50 },
//             ]
//           },
//           { 
//             _id: 'e2', 
//             name: 'Cooking workshop',
//             description: 'Cooking workshop with top chefs',
//             date: new Date('2025-05-20'),
//             location: 'Lahore Cheaf club',
//             tickets: [
//               { ticketType: 'Front Row', price: 2500, availability: 20 },
//               { ticketType: 'Standard', price: 1000, availability: 80 }
//             ]
//           }
//         ];
//         setEvents(dummyEvents);
//       }
//     }, [token, page]);
  
//     // Booking management
//     const handleBooking = (e) => {
//       e.preventDefault();
      
//       const newBooking = {
//         _id: 'b' + Date.now(),
//         eventName: selectedEvent.name,
//         ticketType: formData.ticketType,
//         quantity: formData.quantity || 1,
//         price: selectedEvent.tickets.find(t => t.ticketType === formData.ticketType)?.price || 0,
//         bookingDate: new Date(),
//         status: 'active'
//       };
      
//       const updatedBookings = [...bookings, newBooking];
//       setBookings(updatedBookings);
      
//       // Save to localStorage
//       localStorage.setItem('bookings', JSON.stringify(updatedBookings));
      
//       alert("Booking successful!");
//       setPage('purchases');
//     };
  
//     // Ticket booking logic
//     const bookTicket = (ticket) => {
//       // Update tickets state
//       const updatedTickets = tickets.map(t => 
//         t._id === ticket._id ? {
//           ...t,
//           isBookedByUser: true,
//           availability: t.availability - 1
//         } : t
//       );
//       setTickets(updatedTickets);
      
//       // Save updated tickets to localStorage
//       localStorage.setItem('tickets', JSON.stringify(updatedTickets));
    
//       // Create new booking object
//       const newBooking = {
//         _id: `b-${Date.now()}`,
//         eventName: ticket.eventName,
//         ticketType: ticket.ticketType,
//         quantity: 1,
//         price: ticket.price,
//         bookingDate: new Date(),
//         status: 'active'
//       };
    
//       // Update bookings state
//       const updatedBookings = [...bookings, newBooking];
//       setBookings(updatedBookings);
      
//       // Save bookings to localStorage
//       localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    
//       alert(`Ticket booked for ${ticket.eventName} - ${ticket.ticketType}`);
//     };
  
//     // Cancel booking
//     const cancelBooking = (bookingId) => {
//       if (window.confirm('Are you sure you want to cancel this booking?')) {
//         const updatedBookings = bookings.map(booking => 
//           booking._id === bookingId ? {...booking, status: 'cancelled'} : booking
//         );
//         setBookings(updatedBookings);
        
//         // Save to localStorage
//         localStorage.setItem('bookings', JSON.stringify(updatedBookings));
        
//         alert("Booking cancelled successfully!");
//       }
//     };
  
//     // Authentication handlers
//     const handleLogin = (e) => {
//       e.preventDefault();
//       localStorage.setItem('token', 'demo-token');
//       localStorage.setItem('userId', 'demo-user');
//       setToken('demo-token');
//       setUserId('demo-user');
//       setPage('events');
//     };
  
//     const handleSignup = (e) => {
//       e.preventDefault();
//       localStorage.setItem('token', 'demo-token');
//       localStorage.setItem('userId', 'demo-user');
//       setToken('demo-token');
//       setUserId('demo-user');
//       setPage('events');
//     };
//     // Function to retrieve token and userId from localStorage
// const getUserData = () => {
//   const token = localStorage.getItem('token');
//   const userId = localStorage.getItem('userId');
  
//   return { token, userId };
// };

// // Example usage:
// const displayUserData = () => {
//   const { token, userId } = getUserData();
  
//   console.log('User Token:', token);
//   console.log('User ID:', userId);
  
//   // You can use these values as needed in your application
//   // For example, to check if user is logged in:
//   if (token && userId) {
//     console.log('User is logged in');
//     // Perform actions for logged-in user
//   } else {
//     console.log('User is not logged in');
//     // Redirect to login page or show login options
//   }
// };

// // Call this function whenever you need the user data
// displayUserData();
  
//     // Navigation
//     const logout = () => {
//       localStorage.removeItem('token');
//       localStorage.removeItem('userId');
//       setToken('');
//       setUserId('');
//       setPage('login');
//     };
  
//     // Render methods
//     const renderNavbar = () => (
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="container">
//           <span className="navbar-brand">Ticket Booking</span>
//           <div className="d-flex">
//             <button onClick={() => setPage('events')} className="btn btn-outline-light me-2">
//               Events
//             </button>
//             <button onClick={() => setPage('purchases')} className="btn btn-outline-info me-2">
//               My Purchases
//             </button>
//             <button onClick={() => setPage('availableTickets')} className="btn btn-outline-secondary me-2">
//               Available Tickets
//             </button>
//             <button onClick={logout} className="btn btn-danger">Logout</button>
//           </div>
//         </div>
//       </nav>
//     );
  
//     const renderLogin = () => (
//       <div className="container py-5 h-100 d-flex align-items-center justify-content-center">
//         <div className="row shadow-lg rounded overflow-hidden" style={{ maxWidth: '900px', width: '100%', backgroundColor: '#ffffff' }}>
          
//           {/* Left Column - Login Form */}
//           <div className="col-md-6 p-5 d-flex flex-column justify-content-center" style={{ backgroundColor: '#f9f9f9' }}>
//             <h2 className="mb-4 text-primary fw-bold">Welcome Back</h2>
//             <form onSubmit={handleLogin}>
//               <input 
//                 type="email" 
//                 className="form-control mb-4" 
//                 placeholder="Enter your email" 
//                 required 
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
//               />
//               <input 
//                 type="password" 
//                 className="form-control mb-4" 
//                 placeholder="Enter your password" 
//                 required 
//                 onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
//               />
//               {error && <div className="alert alert-danger">{error}</div>}
    
//               <div className="d-flex align-items-center gap-2 mb-3">
//                 <button className="btn btn-primary w-100">Login</button>
//               </div>
    
//               <p className="text-center mb-0">
//                 Don't have an account?
//                 <button 
//                   onClick={() => setPage('signup')} 
//                   className="btn btn-link p-0 ms-1"
//                   style={{ textDecoration: 'none', color: '#007bff' }}
//                 >
//                   Sign Up
//                 </button>
//               </p>
//             </form>
//           </div>
    
//           {/* Right Column - Image and Info */}
//           <div className="col-md-6 d-flex flex-column justify-content-center align-items-center p-0">
//             <img 
//               src={imgage} 
//               alt="Event Visual" 
//               style={{ height: "100%", width: "100%", objectFit: "cover" }} 
//             />
//             <div className="text-center p-4" style={{ backgroundColor: '#ffffff', width: '100%' }}>
//               <h4 className="fw-bold">Welcome to Ticket Booking System</h4>
//               <p className="text-muted">Your gateway to the best events in town!</p>
//             </div>
//           </div>
    
//         </div>
//       </div>
//     );
    
//     const renderSignup = () => (
//       <div className="container py-5 h-100 d-flex align-items-center justify-content-center">
//         <div className="row shadow-lg rounded overflow-hidden" style={{ maxWidth: '900px', width: '100%', backgroundColor: '#ffffff' }}>
          
//           {/* Left Column - Sign Up Form */}
//           <div className="col-md-6 p-5 d-flex flex-column justify-content-center" style={{ backgroundColor: '#f9f9f9' }}>
//             <h2 className="mb-4 text-success fw-bold">Create Account</h2>
//             <form onSubmit={handleSignup}>
//               <input 
//                 type="text" 
//                 className="form-control mb-3" 
//                 placeholder="Username" 
//                 required 
//                 onChange={(e) => setFormData({ ...formData, username: e.target.value })} 
//               />
//               <input 
//                 type="email" 
//                 className="form-control mb-3" 
//                 placeholder="Email" 
//                 required 
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
//               />
//               <input 
//                 type="password" 
//                 className="form-control mb-3" 
//                 placeholder="Password" 
//                 required 
//                 onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
//               />
    
//               {error && <div className="alert alert-danger">{error}</div>}
    
//               <button className="btn btn-success w-100 mb-3">Sign Up</button>
    
//               <p className="text-center mb-0">
//                 Already have an account?
//                 <button 
//                   onClick={() => setPage('login')} 
//                   className="btn btn-link p-0 ms-1"
//                   style={{ textDecoration: 'none', color: '#28a745' }}
//                 >
//                   Login
//                 </button>
//               </p>
//             </form>
//           </div>
    
//           {/* Right Column - Info or Image */}
//           <div className="col-md-6 d-flex flex-column justify-content-center align-items-center p-0">
//             <img 
//               src={imgage} 
//               alt="Sign Up Visual" 
//               style={{ height: "100%", width: "100%", objectFit: "cover" }} 
//             />
//             <div className="text-center p-4" style={{ backgroundColor: '#ffffff', width: '100%' }}>
//               <h4 className="fw-bold">Join our Ticket Booking Community</h4>
//               <p className="text-muted">Create an account to book tickets for exciting events!</p>
//             </div>
//           </div>
    
//         </div>
//       </div>
//     );
    
  
//     const renderEvents = () => (
//       <div className="container py-5">
//         <h2 className="mb-4">Upcoming Events</h2>
//         <div className="row">
//           {events.map(event => (
//             <div key={event._id} className="col-md-6 mb-4">
//               <div className="card p-3 shadow-sm">
//                 <h4>{event.name}</h4>
//                 <p>{event.description}</p>
//                 <p>📅 {new Date(event.date).toLocaleDateString()}</p>
//                 <p>📍 {event.location}</p>
//                 <button className="btn btn-primary" 
//                   onClick={() => { setSelectedEvent(event); setPage('eventDetail'); }}>
//                   View & Book
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
  
//     const renderEventDetail = () => (
//       <div className="container py-5">
//         <button className="btn btn-link mb-3" onClick={() => setPage('events')}>← Back</button>
//         {selectedEvent ? (
//           <>
//             <h2>{selectedEvent.name}</h2>
//             <p>{selectedEvent.description}</p>
//             <p>📅 {new Date(selectedEvent.date).toLocaleDateString()}</p>
//             <p>📍 {selectedEvent.location}</p>
  
//             <form onSubmit={handleBooking} className="mt-4">
//               <input type="text" className="form-control mb-2" placeholder="Your Name" required 
//                 onChange={e => setFormData({ ...formData, name: e.target.value })} />
              
//               <select className="form-select mb-2" required
//                 onChange={e => setFormData({ ...formData, ticketType: e.target.value })}>
//                 <option value="">Select Ticket</option>
//                 {selectedEvent.tickets.map((t, idx) => (
//                   <option key={idx} value={t.ticketType} disabled={t.availability <= 0}>
//                     {t.ticketType} - Rs.{t.price} {t.availability <= 0 ? '(Sold Out)' : ''}
//                   </option>
//                 ))}
//               </select>
  
//               <input type="number" className="form-control mb-3" min="1" placeholder="Quantity" required 
//                 onChange={e => setFormData({ ...formData, quantity: parseInt(e.target.value) })} />
  
//               <button type="submit" className="btn btn-success">Book Now</button>
//             </form>
//           </>
//         ) : (
//           <p>Loading event details...</p>
//         )}
//       </div>
//     );
  
//     const renderPurchases = () => {
//       const { token, userId } = getUserData(); // Get user data from localStorage
    
//       return (
//         <div className="container py-5">
//           <button className="btn btn-link mb-3" onClick={() => setPage('events')}>
//             ← Back to Events
//           </button>
    
//           <h2 className="mb-4">My Purchases</h2>
    
//           {/* Show user data from localStorage */}
//           <div className="alert alert-secondary">
//             <p className="mb-1"><strong>User ID:</strong> {userId || 'Not Logged In'}</p>
//             <p className="mb-0"><strong>Token:</strong> {token ? `${token.substring(0, 20)}...` : 'Not Available'}</p>
//           </div>
    
//           {bookings.length === 0 ? (
//             // <p>No bookings yet.</p>

//             <div className="container mt-4">
//             <h4 className="mb-3">Ticket Booking Summary</h4>
//             <table className="table table-bordered table-striped">
//               <thead className="table-dark">
//                 <tr>
//                   <th>🎫 Ticket Type</th>
//                   <th>👤 Username</th>
//                   <th>🔢 Quantity</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>VIP</td>
//                   <td>john_doe</td>
//                   <td>1</td>
//                 </tr>
                
//                 <tr>
//                   <td>Standard</td>
//                   <td>michael_user</td>
//                   <td>2</td>
//                 </tr>
//                 <tr>
//                   <td>General</td>
//                   <td>jane_smith</td>
//                   <td>3</td>
//                 </tr>
//                 {/* Add more rows dynamically if needed */}
//               </tbody>
//             </table>
//           </div>
          
//           ) : (
//             <div className="container py-4">
//             <h4 className="mb-4">📋 My Bookings</h4>
          
//             {bookings.length === 0 ? (
//               <p>No bookings yet.</p>
//             ) : (
//               <div className="table-responsive">
//                 <table className="table table-bordered table-hover">
//                   <thead className="table-dark">
//                     <tr>
//                       <th>🎟️ Event Name</th>
//                       <th>🎫 Ticket Type</th>
//                       <th>🧍 Quantity</th>
//                       <th>💰 Price</th>
//                       <th>📅 Booking Date</th>
//                       <th>Status</th>
//                       <th>❌ Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {bookings.map((b) => (
//                       <tr key={b._id}>
//                         <td>{b.eventName}</td>
//                         <td>{b.ticketType}</td>
//                         <td>{b.quantity}</td>
//                         <td>Rs. {b.price}</td>
//                         <td>{new Date(b.bookingDate).toLocaleString()}</td>
//                         <td>
//                           <span className={b.status === 'active' ? 'text-success' : 'text-danger'}>
//                             {b.status === 'active' ? 'Active' : 'Cancelled'}
//                           </span>
//                         </td>
//                         <td>
//                           {b.status === 'active' && (
//                             <button
//                               className="btn btn-sm btn-danger"
//                               onClick={() => cancelBooking(b._id)}
//                             >
//                               Cancel
//                             </button>
//                           )}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
          
//           )}
//         </div>
//       );
//     };
    
  
//     const renderAvailableTickets = () => (
//       <div className="container py-5">
//         <button className="btn btn-link mb-3" onClick={() => setPage('events')}>← Back to Events</button>
//         <h2>Available Tickets</h2>
//         <table className="table table-bordered table-striped">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Event</th>
//               <th>Ticket Type</th>
//               <th>Price</th>
//               <th>Availability</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tickets.map((t) => (
//               <tr key={t._id}>
//                 <td>{t._id}</td>
//                 <td>{t.eventName}</td>
//                 <td>{t.ticketType}</td>
//                 <td>Rs. {t.price}</td>
//                 <td>{t.availability}</td>
//                 <td>
//                   <button 
//                     onClick={() => bookTicket(t)}
//                     disabled={t.availability <= 0 || t.isBookedByUser}
//                     className={`btn ${
//                       t.isBookedByUser ? 'btn-secondary' : 
//                       t.availability <= 0 ? 'btn-danger' : 'btn-primary'
//                     }`}>
//                     {t.isBookedByUser ? 'Already Booked' : 
//                      t.availability <= 0 ? 'Sold Out' : 'Book Now'}
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
  
//     return (
//       <div>
//         {['events', 'eventDetail', 'purchases', 'availableTickets'].includes(page) && renderNavbar()}
        
//         {page === 'login' && renderLogin()}
//         {page === 'signup' && renderSignup()}
//         {page === 'events' && renderEvents()}
//         {page === 'eventDetail' && renderEventDetail()}
//         {page === 'purchases' && renderPurchases()}
//         {page === 'availableTickets' && renderAvailableTickets()}
//       </div>
//     );
//   };
  
//   export default App;




import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import axios from 'axios';
import image from "./image/img.jpg"; // Make sure this image exists in your project

// API base URL - update this to match your backend
const API_URL = 'https://booking-backend-xi.vercel.app';
// 'http://localhost:5000/api';
// 'http://localhost:5000/api';
// 'https://booking-backend-xi.vercel.app';

// Set auth token for API requests
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};




const dummyEvents = [
  { 
    _id: 'e1', 
    name: 'Rock Concert 2025',
    description: 'Concert featuring top rock bands',
    date: new Date('2025-06-15'),
    location: 'Lahore Beach Park',
    tickets: [
      { ticketType: 'VIP', price: 5000, availability: 15 },
      { ticketType: 'General', price: 1500, availability: 100 },
      { ticketType: 'Backstage', price: 8000, availability: 5 }
    ]
  },
  { 
    _id: 'e2', 
    name: 'Tech Conference 2025',
    description: 'Conference on latest tech trends',
    date: new Date('2025-05-20'),
    location: 'Karachi Comedy Club',
    tickets: [
      { ticketType: 'Front Row', price: 2500, availability: 20 },
      { ticketType: 'Standard', price: 1000, availability: 80 }
    ]
  },

];
const App = () => {
  // Initialize with token from localStorage if available
  const storedToken = localStorage.getItem('token');
  const initialPage = storedToken ? 'events' : 'login';

  // State variables
  const [page, setPage] = useState(initialPage);
  const [token, setToken] = useState(storedToken || '');
  const [userId, setUserId] = useState(localStorage.getItem('userId') || '');
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  const [formData, setFormData] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);
  events.map(event => console.log(event.location));

  
  const [tickets, setTickets] = useState([]); 
  const [bookings, setBookings] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [codeError, setCodeError] = useState(false);

  // New state for creating events
  const [newEvent, setNewEvent] = useState({
    name: '',
    description: '',
    date: '',
    location: '',
    tickets: [{ ticketType: '', price: '', availability: 10 }]
  });

  // Set auth token when token changes
  useEffect(() => {
    if (token) setAuthToken(token);
  }, [token]);

  // Fetch data based on current page
  useEffect(() => {
    if (token && page === 'events') fetchEvents();
    if (token && page === 'availableTickets') fetchTickets();
    if (token && page === 'purchases') fetchBookings();
  }, [token, page]);

  // API Functions
  const fetchEvents = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_URL}/events`);
      setEvents(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError('Failed to load events');
      setLoading(false);
    }
  };

  const fetchTickets = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_URL}/tickets`);
      setTickets(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError('Failed to load tickets');
      setLoading(false);
    }
  };

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_URL}/bookings`);
      setBookings(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError('Failed to load bookings');
      setLoading(false);
    }
  };

  // Authentication Functions
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`${API_URL}/users/login`, {
        email: formData.email,
        password: formData.password,
      });
      const { token, userId, username } = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);
      localStorage.setItem('username', username);
      setToken(token);
      setUserId(userId);
      setUsername(username);
      setAuthToken(token);
      setPage('events');
      setLoading(false);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
      setLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`${API_URL}/users/register`, {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      const { token, userId, username } = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);
      localStorage.setItem('username', username);
      setToken(token);
      setUserId(userId);
      setUsername(username);
      setAuthToken(token);
      setPage('events');
      setLoading(false);
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
      setLoading(false);
    }
  };

  // Booking Functions
  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      
      // Find ticket for selected event and ticket type
      const selectedTicket = selectedEvent.tickets.find(
        t => t.ticketType === formData.ticketType
      );
      
      if (!selectedTicket) {
        setError('Ticket type not found');
        setLoading(false);
        return;
      }
      
      // Find ticket in database to get ID
      const apiTicket = tickets.find(
        t => t.eventName === selectedEvent.name && t.ticketType === formData.ticketType
      );
      
      if (!apiTicket) {
        setError('Ticket not available in system');
        setLoading(false);
        return;
      }
      
      // Create booking
      await axios.post(`${API_URL}/bookings`, {
        ticketId: apiTicket._id,
        quantity: parseInt(formData.quantity) || 1,
      });
      
      setLoading(false);
      alert('Booking successful!');
      setPage('purchases');
    } catch (err) {
      setError(err.response?.data?.message || 'Booking failed');
      setLoading(false);
    }
  };

  const bookTicket = async (ticket) => {
    try {
      setLoading(true);
      await axios.post(`${API_URL}/bookings`, {
        ticketId: ticket._id,
        quantity: 1,
      });
      fetchTickets();
      alert(`Ticket booked for ${ticket.eventName} - ${ticket.ticketType}`);
      setLoading(false);
    } catch (err) {
      alert(err.response?.data?.message || 'Booking failed');
      setLoading(false);
    }
  };

  const cancelBooking = async (id) => {
    if (!window.confirm('Are you sure you want to cancel this booking?')) return;
    try {
      setLoading(true);
      await axios.patch(`${API_URL}/bookings/${id}/cancel`);
      fetchBookings();
      alert('Booking cancelled successfully');
      setLoading(false);
    } catch (err) {
      alert(err.response?.data?.message || 'Cancellation failed');
      setLoading(false);
    }
  };

  // Event Creation Functions
  // const handleCreateEvent = async (e) => {
  //   e.preventDefault();
  //   try {
  //     setLoading(true);
      
  //     // Format tickets with number values
  //     const formattedEvent = {
  //       ...newEvent,
  //       tickets: newEvent.tickets.map(ticket => ({
  //         ticketType: ticket.ticketType,
  //         price: Number(ticket.price),
  //         availability: Number(ticket.availability)
  //       }))
  //     };
      
  //     // Send to API
  //     await axios.post(`${API_URL}/events`, formattedEvent);
      
  //     // Create individual tickets
  //     for (const ticket of formattedEvent.tickets) {
  //       await axios.post(`${API_URL}/tickets`, {
  //         eventName: formattedEvent.name,
  //         ticketType: ticket.ticketType,
  //         price: ticket.price,
  //         availability: ticket.availability
  //       });
  //     }
      
  //     alert('Event created successfully!');
      
  //     // Reset form
  //     setNewEvent({
  //       name: '',
  //       description: '',
  //       date: '',
  //       location: '',
  //       tickets: [{ ticketType: '', price: '', availability: 10 }]
  //     });
      
  //     // Refresh events
  //     fetchEvents();
  //     setPage('events');
  //     setLoading(false);
  //   } catch (err) {
  //     setError(err.response?.data?.message || 'Failed to create event');
  //     setLoading(false);
  //   }
  // };
  const handleCreateEvent = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError('');
      setCodeError(false);
  
      const DUMMY_ALLOWED_CODE = 'Xwave@123'; // 💡 This is the dummy code
  
      if (newEvent.secretCode !== DUMMY_ALLOWED_CODE) {
        setCodeError(true);
        setLoading(false);
        return;
      }
  
      // Format tickets
      const formattedEvent = {
        ...newEvent,
        tickets: newEvent.tickets.map(ticket => ({
          ticketType: ticket.ticketType,
          price: Number(ticket.price),
          availability: Number(ticket.availability)
        }))
      };
  
      // Save event
      await axios.post(`${API_URL}/events`, formattedEvent);
  
      // Save tickets
      for (const ticket of formattedEvent.tickets) {
        await axios.post(`${API_URL}/tickets`, {
          eventName: formattedEvent.name,
          ticketType: ticket.ticketType,
          price: ticket.price,
          availability: ticket.availability
        });
      }
  
      alert('Event created successfully!');
  
      // Reset form
      setNewEvent({
        name: '',
        code: '',
        secretCode: '',
        description: '',
        date: '',
        location: '',
        tickets: [{ ticketType: '', price: '', availability: 10 }]
      });
  
      fetchEvents();
      setPage('events');
      setLoading(false);
    } catch (err) {
      setError(err.response?.data?.message || 'Event created successfully!');
      setLoading(false);
    }
  };
  
  const addTicketType = () => {
    setNewEvent({
      ...newEvent,
      tickets: [...newEvent.tickets, { ticketType: '', price: '', availability: 10 }]
    });
  };

  const removeTicketType = (index) => {
    const updatedTickets = [...newEvent.tickets];
    updatedTickets.splice(index, 1);
    setNewEvent({
      ...newEvent,
      tickets: updatedTickets
    });
  };

  const updateTicketField = (index, field, value) => {
    const updatedTickets = [...newEvent.tickets];
    updatedTickets[index][field] = value;
    setNewEvent({
      ...newEvent,
      tickets: updatedTickets
    });
  };

  // Authentication & Utility Functions
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    setToken('');
    setUserId('');
    setUsername('');
    setAuthToken(null);
    setPage('login');
  };

  // UI Components
  const renderNavbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        <div className="row w-100 align-items-center">
          {/* Left - App Name */}
          <div className="col-12 col-md-3 text-center text-md-start mb-2 mb-md-0">
            <span className="navbar-brand">🎫 Event Booking System</span>
          </div>
  
          {/* Center - Navigation Buttons */}
          <div className="col-12 col-md-6 text-center mb-2 mb-md-0">
            <button className="btn btn-outline-light mx-1" onClick={() => setPage('events')}>
              Events
            </button>
            <button className="btn btn-outline-light mx-1" onClick={() => setPage('availableTickets')}>
              Available Tickets
            </button>
            <button className="btn btn-outline-light mx-1" onClick={() => setPage('purchases')}>
              My Purchases
            </button>
            <button className="btn btn-outline-light mx-1" onClick={() => setPage('createEvent')}>
              Create Event
            </button>
          </div>
  
          {/* Right - User info & Logout */}
          <div className="col-12 col-md-3 text-center text-md-end">
            <span className="text-light me-3">Hi, {username}</span>
            <button className="btn btn-danger" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

  const renderLogin = () => (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow rounded overflow-hidden">
            <div className="row g-0">
              {/* Left Column - Login Form */}
              <div className="col-md-6 p-4 bg-light">
                <h2 className="mb-4">Login</h2>
                <form onSubmit={handleLogin}>
                  <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Email"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                  <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="Password"
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    required
                  />
                  <button className="btn btn-primary w-100">Login</button>
                </form>
                <p className="mt-3 mb-0">
                  Don't have an account?{" "}
                  <button
                    className="btn btn-link p-0"
                    onClick={() => setPage("signup")}
                  >
                    Sign up
                  </button>
                </p>
                {error && <p className="text-danger mt-2">{error}</p>}
              </div>
  
              {/* Right Column - Image */}
              <div className="col-md-6 d-none d-md-block">
                <img
                  src={image}
                  alt="Login Illustration"
                  className="img-fluid h-100 w-100 object-fit-cover"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSignup = () => (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow rounded overflow-hidden">
            <div className="row g-0">
              {/* Left Column - Signup Form */}
              <div className="col-md-6 p-4 bg-light">
                <h2 className="mb-4">Signup</h2>
                <form onSubmit={handleSignup}>
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Username"
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                    required
                  />
                  <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Email"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                  <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="Password"
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    required
                  />
                  <button className="btn btn-success w-100">Signup</button>
                </form>
                <p className="mt-3 mb-0">
                  Already have an account?{" "}
                  <button
                    className="btn btn-link p-0"
                    onClick={() => setPage("login")}
                  >
                    Login
                  </button>
                </p>
                {error && <p className="text-danger mt-2">{error}</p>}
              </div>
  
              {/* Right Column - Image */}
              <div className="col-md-6 d-none d-md-block">
                <img
                  src={image}
                  alt="Signup Illustration"
                  className="img-fluid h-100 w-100 object-fit-cover"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );






  const getLocationMapIframe = (locationName) => {
    // Encode the location name for use in URL
    const encodedLocation = encodeURIComponent(locationName);
    
    // Return iframe with Google Maps embed
    return `<iframe 
      src="https://maps.google.com/maps?q=${encodedLocation}&t=&z=13&ie=UTF8&iwloc=&output=embed" 
      width="100%" 
      height="300" 
      frameBorder="0" 
      scrolling="no" 
      marginHeight="0" 
      marginWidth="0"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade">
    </iframe>`;
  };
  
  // Function to create map component for React rendering
  const LocationMap = ({ location }) => {
    if (!location) return null;
    
    return (
      <div className="map-container rounded overflow-hidden mt-3 mb-4">
        <div dangerouslySetInnerHTML={{ 
          __html: getLocationMapIframe(location) 
        }} />
      </div>
    );
  };





//   const renderEvents = () => (
//     <div className="container py-5">
//       <h2 className="mb-4">Upcoming Events</h2>
  
//       {events.length === 0 ? (
//         <div>
//           <div className="alert alert-info">
//           Wellcome to The Evens Booking Systems
//           </div>
  
//           <div className="row">
//             {dummyEvents.map((event, index) => (
//               <div key={index} className="col-md-6 mb-4">
//                 <div className="card shadow-sm h-100">
//                   <div className="card-body d-flex flex-column">
//                     <h4 className="card-title">{event.name}</h4>
//                     <p className="card-text">{event.description}</p>
//                     <p>📅 <strong>{event.date.toDateString()}</strong></p>
//                     <p>📍 <strong>{event.location}</strong></p>
  
//                     <div className="mt-3">
//                       <h5>🎟️ Tickets</h5>
//                       <ul className="list-group mb-3">
//                         {event.tickets.map((ticket, idx) => (
//                           <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
//                             <span>{ticket.ticketType}</span>
//                             <span>Rs {ticket.price} | Available: {ticket.availability}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
  
//                     <button 
//                       className="btn btn-success mt-auto"
//                       onClick={() => alert(`Booking event: ${event.name}`)}
//                     >
//                       Book Now
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <div className="row">
//           {events.map(event => (
//             <div key={event._id} className="col-md-6 mb-4">
//               <div className="card p-3 shadow-sm h-100">
//                 <h4>{event.name}</h4>
//                 <p>{event.description}</p>
//                 <p>📅 {new Date(event.date).toLocaleDateString()}</p>
//                 {/* <p>📍 {event.location}</p> */}

//                 <p style={{ display: 'flex', alignItems: 'center', gap: '6px', margin: 0 }}>
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     height="18"
//     width="18"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="#dc3545"  
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     style={{ marginRight: '4px' }}
//   >
//     <path d="M12 21s-6-5.7-6-10a6 6 0 1 1 12 0c0 4.3-6 10-6 10z" />
//     <circle cx="12" cy="11" r="2" />
//   </svg>
//   <strong>{event.location}</strong>
// </p>


//                 <button 
//                   className="btn btn-primary mt-auto" 
//                   onClick={() => { 
//                     setSelectedEvent(event); 
//                     setPage('eventDetail'); 
//                   }}
//                 >
//                   View & Book
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
const renderEvents = () => (
  <div className="container py-5">
    <h2 className="mb-4">Upcoming Events</h2>

    {events.length === 0 ? (
      <div>
        <div className="alert alert-info">
          Welcome to The Events Booking System
        </div>

        <div className="row">
          {dummyEvents.map((event, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title">{event.name}</h4>
                  <p className="card-text">{event.description}</p>
                  <p>📅 <strong>{event.date.toDateString()}</strong></p>
                  
                  <p style={{ display: 'flex', alignItems: 'center', gap: '6px', margin: 0 }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      width="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#dc3545"  
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ marginRight: '4px' }}
                    >
                      <path d="M12 21s-6-5.7-6-10a6 6 0 1 1 12 0c0 4.3-6 10-6 10z" />
                      <circle cx="12" cy="11" r="2" />
                    </svg>
                    <strong>{event.location}</strong>
                  </p>
                  
                  {/* Small map preview */}
                  <div className="small-map mt-2 mb-3" style={{ height: "120px", overflow: "hidden" }}>
                    <div dangerouslySetInnerHTML={{ 
                      __html: getLocationMapIframe(event.location) 
                    }} />
                  </div>

                  <div className="mt-3">
                    <h5>🎟️ Tickets</h5>
                    <ul className="list-group mb-3">
                      {event.tickets.map((ticket, idx) => (
                        <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
                          <span>{ticket.ticketType}</span>
                          <span>Rs {ticket.price} | Available: {ticket.availability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    className="btn btn-success mt-auto"
                    onClick={() => alert(`Booking event: ${event.name}`)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ) : (
      <div className="row">
        {events.map(event => (
          <div key={event._id} className="col-md-6 mb-4">
            <div className="card p-3 shadow-sm h-100">
              <h4>{event.name}</h4>
              <p>{event.description}</p>
              <p>📅 {new Date(event.date).toLocaleDateString()}</p>
              
              <p style={{ display: 'flex', alignItems: 'center', gap: '6px', margin: '0 0 10px 0' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  width="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#dc3545"  
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: '4px' }}
                >
                  <path d="M12 21s-6-5.7-6-10a6 6 0 1 1 12 0c0 4.3-6 10-6 10z" />
                  <circle cx="12" cy="11" r="2" />
                </svg>
                <strong>{event.location}</strong>
              </p>
              
              {/* Small map preview */}
              <div className="small-map mb-3" style={{ height: "100px", overflow: "hidden" }}>
                <div dangerouslySetInnerHTML={{ 
                  __html: getLocationMapIframe(event.location) 
                }} />
              </div>

              <button 
                className="btn btn-primary mt-auto" 
                onClick={() => { 
                  setSelectedEvent(event); 
                  setPage('eventDetail'); 
                }}
              >
                View & Book
              </button>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);
  


  const renderEventDetail = () => (
    <div className="container py-5">
      <button className="btn btn-link mb-3" onClick={() => setPage('events')}>← Back to Events</button>
      {selectedEvent ? (
        <>
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2>{selectedEvent.name}</h2>
              <p>{selectedEvent.description}</p>
              <p>📅 {new Date(selectedEvent.date).toLocaleDateString()}</p>
              <p> {selectedEvent.location}</p>
              <p><i className="fa fa-map-marker-alt"></i> <strong>{selectedEvent.location}</strong></p>

            </div>
          </div>

          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="mb-3">Book Tickets</h4>
              <form onSubmit={handleBooking}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    required
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="ticketType" className="form-label">Select Ticket Type</label>
                  <select 
                    className="form-select" 
                    id="ticketType" 
                    required
                    onChange={(e) => setFormData({ ...formData, ticketType: e.target.value })}
                  >
                    <option value="">Choose ticket type</option>
                    {selectedEvent.tickets.map((ticket, idx) => (
                      <option 
                        key={idx} 
                        value={ticket.ticketType} 
                        disabled={ticket.availability <= 0}
                      >
                        {ticket.ticketType} - £.{ticket.price} 
                        {ticket.availability <= 0 ? ' (Sold Out)' : ` (${ticket.availability} available)`}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="quantity" className="form-label">Quantity</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    id="quantity" 
                    min="1"
                    defaultValue="1"
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    required 
                  />
                </div>
                
                <button type="submit" className="btn btn-success">Book Now</button>
              </form>
            </div>
          </div>
        </>
      ) : (
        <p>Loading event details...</p>
      )}
    </div>
  );

  // const renderAvailableTickets = () => (
  //   <div className="container py-5">
  //     <button className="btn btn-link mb-3" onClick={() => setPage('events')}>← Back to Events</button>
  //     <h2 className="mb-4">Available Tickets</h2>
  //     {tickets.length === 0 ? (
  //       <div className="alert alert-info">No tickets available.</div>
  //     ) : (
  //       <div className="table-responsive">
  //         <table className="table table-striped table-hover">
  //           <thead className="table-dark">
  //             <tr>
  //               <th>Event</th>
  //               <th>Ticket Type</th>
  //               <th>Price</th>
  //               <th>Availability</th>
  //               <th>Action</th>
             
  //             </tr>
  //           </thead>
  //           <tbody>
  //             {tickets.map((ticket) => (
  //               <tr key={ticket._id}>
  //                 <td>{ticket.eventName}</td>
  //                 <td>{ticket.ticketType}</td>
  //                 <td>£. {ticket.price}</td>
  //                 <td>{ticket.availability}</td>
                  
  //                 <td>
  //                   <button 
  //                     className={`btn ${ticket.availability <= 0 ? 'btn-danger' : 'btn-primary'}`}
  //                     disabled={ticket.availability <= 0}
  //                     onClick={() => bookTicket(ticket)}
  //                   >
  //                     {ticket.availability <= 0 ? 'Sold Out' : 'Book Now'}
  //                   </button>
  //                 </td>
  //               </tr>
  //             ))}
  //           </tbody>
  //         </table>
  //       </div>
  //     )}
  //   </div>
  // );


  const renderAvailableTickets = () => (
    <div className="container py-5">
      <button className="btn btn-link mb-3" onClick={() => setPage('events')}>← Back to Events</button>
      <h2 className="mb-4">Available Tickets</h2>
      {tickets.length === 0 ? (
        <div className="alert alert-info">No tickets available.</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>Event</th>
                <th>Ticket Type</th>
                <th>Price</th>
                <th>Location</th>
                <th>Availability</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => {
                // Find the corresponding event to get its location
                const eventForTicket = events.find(event => event.name === ticket.eventName);
                const location = eventForTicket ? eventForTicket.location : "Location not available";
                
                return (
                  <tr key={ticket._id}>
                    <td>{ticket.eventName}</td>
                    <td>{ticket.ticketType}</td>
                    <td>£. {ticket.price}</td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
                          width="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#dc3545"  
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ marginRight: '6px' }}
                        >
                          <path d="M12 21s-6-5.7-6-10a6 6 0 1 1 12 0c0 4.3-6 10-6 10z" />
                          <circle cx="12" cy="11" r="2" />
                        </svg>
                        {location}
                      </div>
                    </td>
                    <td>{ticket.availability}</td>
                    <td>
                      <button 
                        className={`btn ${ticket.availability <= 0 ? 'btn-danger' : 'btn-primary'}`}
                        disabled={ticket.availability <= 0}
                        onClick={() => bookTicket(ticket)}
                      >
                        {ticket.availability <= 0 ? 'Sold Out' : 'Book Now'}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );


  // const renderPurchases = () => (
  //   <div className="container py-5">
  //     <button className="btn btn-link mb-3" onClick={() => setPage('events')}>← Back to Events</button>
  //     <h2 className="mb-4">My Purchases</h2>
  //     {bookings.length === 0 ? (
  //       <div className="alert alert-info">You haven't made any bookings yet.</div>
  //     ) : (
  //       <div className="table-responsive">
  //         <table className="table table-bordered table-hover">
  //           <thead className="table-dark">
  //             <tr>
  //               <th>🎟️ Event Name</th>
  //               <th>🎫 Ticket Type</th>
  //               <th>🧍 Quantity</th>
  //               <th>💰 Price</th>
  //               <th>📅 Booking Date</th>
  //               <th>Status</th>
  //               <th>❌ Action</th>
  //             </tr>
  //           </thead>
  //           <tbody>
  //             {bookings.map((booking) => (
  //               <tr key={booking._id}>
  //                 <td>{booking.eventName}</td>
  //                 <td>{booking.ticketType}</td>
  //                 <td>{booking.quantity}</td>
  //                 <td>£. {booking.price}</td>
  //                 <td>{new Date(booking.bookingDate).toLocaleString()}</td>
  //                 <td>
  //                   <span className={booking.status === 'active' ? 'text-success' : 'text-danger'}>
  //                     {booking.status === 'active' ? '✅ Active' : '❌ Cancelled'}
  //                   </span>
  //                 </td>
  //                 <td>
  //                   {booking.status === 'active' && (
  //                     <button
  //                       className="btn btn-sm btn-danger"
  //                       onClick={() => cancelBooking(booking._id)}
  //                     >
  //                       Cancel
  //                     </button>
  //                   )}
  //                 </td>
  //               </tr>
  //             ))}
  //           </tbody>
  //         </table>
  //       </div>
  //     )}
  //   </div>
  // );



  const renderPurchases = () => (
    <div className="container py-5">
      <button className="btn btn-link mb-3" onClick={() => setPage('events')}>← Back to Events</button>
      <h2 className="mb-4">My Purchases</h2>
      {bookings.length === 0 ? (
        <div className="alert alert-info">You haven't made any bookings yet.</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>🎟️ Event Name</th>
                <th>📍 Location</th>
                <th>🎫 Ticket Type</th>
                <th>🧍 Quantity</th>
                <th>💰 Price</th>
                <th>📅 Booking Date</th>
                <th>Status</th>
                <th>❌ Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => {
                // Find the corresponding event to get its location
                const eventForBooking = events.find(event => event.name === booking.eventName);
                const location = eventForBooking ? eventForBooking.location : "Location not available";
                
                return (
                  <tr key={booking._id}>
                    <td>{booking.eventName}</td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
                          width="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#dc3545"  
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ marginRight: '6px' }}
                        >
                          <path d="M12 21s-6-5.7-6-10a6 6 0 1 1 12 0c0 4.3-6 10-6 10z" />
                          <circle cx="12" cy="11" r="2" />
                        </svg>
                        {location}
                      </div>
                    </td>
                    <td>{booking.ticketType}</td>
                    <td>{booking.quantity}</td>
                    <td>£. {booking.price}</td>
                    <td>{new Date(booking.bookingDate).toLocaleString()}</td>
                    <td>
                      <span className={booking.status === 'active' ? 'text-success' : 'text-danger'}>
                        {booking.status === 'active' ? '✅ Active' : '❌ Cancelled'}
                      </span>
                    </td>
                    <td>
                      {booking.status === 'active' && (
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => cancelBooking(booking._id)}
                        >
                          Cancel
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );



  const renderCreateEvent = () => (
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
                onChange={(e) => setNewEvent({...newEvent, name: e.target.value})}
                required 
              />
            </div>
            
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea 
                className="form-control" 
                rows="3"
                value={newEvent.description}
                onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                required 
              ></textarea>
            </div>
            
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Date</label>
                <input 
                  type="date" 
                  className="form-control"
                  value={newEvent.date}
                  onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                  required 
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Location</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={newEvent.location}
                  onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                  required 
                />
              </div>
            </div>
            
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
                    <label className="form-label">Price (£.)</label>
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
            <button 
              type="button" 
              className="btn btn-outline-secondary mb-4"
              onClick={addTicketType}
            >
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

  // Main App Render
  return (
    <div className="app">
      {/* Loading overlay */}
      {loading && (
        <div className="position-fixed w-100 h-100 d-flex justify-content-center align-items-center" 
             style={{ background: 'rgba(255,255,255,0.7)', zIndex: 1000, top: 0, left: 0 }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      
      {/* Show navbar only when logged in */}
      {token && ['events', 'availableTickets', 'purchases', 'eventDetail', 'createEvent'].includes(page) && renderNavbar()}
      
      {/* Error message display */}
      {error && (
        <div className="container mt-3">
          <div className="alert alert-danger alert-dismissible fade show" role="alert">
            {error}
            <button type="button" className="btn-close" onClick={() => setError('')}></button>
          </div>
        </div>
      )}
      
      {/* Page content */}
      {page === 'login' && renderLogin()}
      {page === 'signup' && renderSignup()}
      {page === 'events' && renderEvents()}
      {page === 'eventDetail' && renderEventDetail()}
      {page === 'availableTickets' && renderAvailableTickets()}
      {page === 'purchases' && renderPurchases()}
      {page === 'createEvent' && renderCreateEvent()}
    </div>
  );
};

export default App;















