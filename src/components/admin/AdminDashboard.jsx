// // src/components/admin/AdminDashboard.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const AdminDashboard = () => {
//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
//       <div>
//         <h2>Manage Content</h2>
//         <ul>
//           <li><Link to="/admin/users">Manage Users</Link></li>
//           <li><Link to="/admin/events">Manage Events</Link></li>
//           <li><Link to="/admin/bookings">View All Bookings</Link></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
// src/components/admin/AdminDashboard.js



import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminDashboard = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">Admin Dashboard</h1>
        <p className="lead text-secondary">Quick access to manage users, events, and bookings</p>
      </div>

      <div className="row justify-content-center g-4">
        <div className="col-md-6 col-lg-3">
          <div className="card border-0 shadow h-100 hover-shadow">
            <div className="card-body text-center">
              <i className="bi bi-people-fill display-4 text-primary mb-3"></i>
              <h5 className="card-title">Manage Users</h5>
              <p className="card-text text-muted">View, edit, or remove user accounts.</p>
              <Link to="/admin/users" className="btn btn-primary w-100">Go to Users</Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card border-0 shadow h-100 hover-shadow">
            <div className="card-body text-center">
              <i className="bi bi-calendar-event-fill display-4 text-success mb-3"></i>
              <h5 className="card-title">Manage Events</h5>
              <p className="card-text text-muted">Create, update, or delete events.</p>
              <Link to="/admin/events" className="btn btn-success w-100">Go to Events</Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card border-0 shadow h-100 hover-shadow">
            <div className="card-body text-center">
              <i className="bi bi-journal-text display-4 text-warning mb-3"></i>
              <h5 className="card-title">View Bookings</h5>
              <p className="card-text text-muted">Check all user bookings in detail.</p>
              <Link to="/admin/bookings" className="btn btn-warning w-100 text-white">View Bookings</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card border-0 shadow h-100 hover-shadow">
            <div className="card-body text-center">
              <i className="bi bi-journal-text display-4 text-warning mb-3"></i>
              <h5 className="card-title">Delete Events</h5>
              <p className="card-text text-muted">Check all Events in detail.</p>
              <Link to="/deleteevent" className="btn btn-warning w-100 text-white">View Bookings</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;





