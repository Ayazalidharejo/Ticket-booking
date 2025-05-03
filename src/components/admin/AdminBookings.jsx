// // src/components/admin/AdminBookings.js
// import React, { useContext, useEffect } from 'react';
// import BookingContext from '../context/Bookingcontext';

// const AdminBookings = () => {
//   const { allBookings, loading, error, getAllBookings, cancelBooking } = useContext(BookingContext);

//   useEffect(() => {
//     getAllBookings();
//   }, []);

//   const handleCancelBooking = async (id) => {
//     if (window.confirm('Are you sure you want to cancel this booking?')) {
//       await cancelBooking(id);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <h1>All Bookings</h1>
//       {allBookings.length > 0 ? (
//         <div>
//           {allBookings.map(booking => (
//             <div key={booking.id}>
//               <h3>{booking.eventName}</h3>
//               <p>User: {booking.username}</p>
//               <p>Ticket Type: {booking.ticketType}</p>
//               <p>Quantity: {booking.quantity}</p>
//               <p>Total Price: ${booking.price}</p>
//               <p>Status: {booking.status}</p>
//               <p>Booking Date: {booking.bookingDate}</p>
//               {booking.status === 'active' && (
//                 <button onClick={() => handleCancelBooking(booking.id)}>
//                   Cancel Booking
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No bookings available.</p>
//       )}
//     </div>
//   );
// };

// export default AdminBookings;



import React, { useContext, useEffect, useState } from 'react';
import BookingContext from '../context/Bookingcontext';

const AdminBookings = () => {
  const { allBookings, loading, error, getAllBookings, cancelBooking } = useContext(BookingContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortField, setSortField] = useState('bookingDate');
  const [sortDirection, setSortDirection] = useState('desc');

  useEffect(() => {
    getAllBookings();
  }, []);

  const handleCancelBooking = async (id) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      await cancelBooking(id);
    }
  };

  // Filter bookings based on search term and status
  const filteredBookings = allBookings.filter(booking => 
    (booking.eventName.toLowerCase().includes(searchTerm.toLowerCase()) || 
     booking.username.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filterStatus === 'all' || booking.status === filterStatus)
  );

  // Sort bookings
  const sortedBookings = [...filteredBookings].sort((a, b) => {
    let compareA = a[sortField];
    let compareB = b[sortField];
    
    // Convert to numbers if sorting by price or quantity
    if (sortField === 'price' || sortField === 'quantity') {
      compareA = parseFloat(compareA);
      compareB = parseFloat(compareB);
    }
    
    if (compareA < compareB) {
      return sortDirection === 'asc' ? -1 : 1;
    }
    if (compareA > compareB) {
      return sortDirection === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getStatusBadgeClass = (status) => {
    switch(status.toLowerCase()) {
      case 'active':
        return 'bg-success';
      case 'cancelled':
        return 'bg-danger';
      case 'completed':
        return 'bg-info';
      case 'pending':
        return 'bg-warning';
      default:
        return 'bg-secondary';
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Error!</h4>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid px-4 py-5">
      {/* Header Section */}
      <div className="row mb-4 align-items-center">
        <div className="col-lg-6">
          <h1 className="fw-bold text-primary">
            <i className="fas fa-ticket-alt me-2"></i>All Bookings
          </h1>
          <p className="text-muted">Manage and monitor event bookings</p>
        </div>
        
        <div className="col-lg-6">
          <div className="card bg-light border-0 shadow-sm">
            <div className="card-body p-3">
              <div className="row text-center">
                <div className="col-md-3">
                  <h3 className="fw-bold text-primary mb-0">{allBookings.length}</h3>
                  <small className="text-muted">Total Bookings</small>
                </div>
                <div className="col-md-3">
                  <h3 className="fw-bold text-success mb-0">
                    {allBookings.filter(booking => booking.status === 'active').length}
                  </h3>
                  <small className="text-muted">Active</small>
                </div>
                <div className="col-md-3">
                  <h3 className="fw-bold text-danger mb-0">
                    {allBookings.filter(booking => booking.status === 'cancelled').length}
                  </h3>
                  <small className="text-muted">Cancelled</small>
                </div>
                <div className="col-md-3">
                  <h3 className="fw-bold text-info mb-0">
                    ${allBookings.reduce((total, booking) => total + parseFloat(booking.price), 0).toFixed(2)}
                  </h3>
                  <small className="text-muted">Total Revenue</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="input-group">
            <span className="input-group-text bg-primary text-white">
              <i className="fas fa-search"></i>
            </span>
            <input 
              type="text" 
              className="form-control border-primary shadow-none" 
              placeholder="Search by event name or username..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button 
                className="btn btn-outline-secondary" 
                type="button"
                onClick={() => setSearchTerm('')}
              >
                Clear
              </button>
            )}
          </div>
        </div>
        <div className="col-md-6 mt-3 mt-md-0">
          <div className="d-flex justify-content-md-end">
            <select 
              className="form-select me-2" 
              style={{maxWidth: "200px"}}
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Statuses</option>
              <option value="active">Active</option>
              <option value="cancelled">Cancelled</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
            <button className="btn btn-primary">
              <i className="fas fa-file-export me-1"></i> Export
            </button>
          </div>
        </div>
      </div>

      {/* Bookings Table */}
      {sortedBookings.length > 0 ? (
        <div className="card shadow-sm border-0">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover mb-0 align-middle">
                <thead className="bg-light">
                  <tr>
                    <th className="ps-4" style={{width: "5%"}}>#</th>
                    <th 
                      className="cursor-pointer" 
                      onClick={() => handleSort('eventName')}
                      style={{cursor: 'pointer'}}
                    >
                      Event Name
                      {sortField === 'eventName' && (
                        <i className={`ms-1 fas fa-sort-${sortDirection === 'asc' ? 'up' : 'down'}`}></i>
                      )}
                    </th>
                    <th 
                      className="cursor-pointer" 
                      onClick={() => handleSort('username')}
                      style={{cursor: 'pointer'}}
                    >
                      User
                      {sortField === 'username' && (
                        <i className={`ms-1 fas fa-sort-${sortDirection === 'asc' ? 'up' : 'down'}`}></i>
                      )}
                    </th>
                    <th 
                      className="cursor-pointer" 
                      onClick={() => handleSort('ticketType')}
                      style={{cursor: 'pointer'}}
                    >
                      Ticket Type
                      {sortField === 'ticketType' && (
                        <i className={`ms-1 fas fa-sort-${sortDirection === 'asc' ? 'up' : 'down'}`}></i>
                      )}
                    </th>
                    <th 
                      className="cursor-pointer" 
                      onClick={() => handleSort('quantity')}
                      style={{cursor: 'pointer'}}
                    >
                      Qty
                      {sortField === 'quantity' && (
                        <i className={`ms-1 fas fa-sort-${sortDirection === 'asc' ? 'up' : 'down'}`}></i>
                      )}
                    </th>
                    <th 
                      className="cursor-pointer" 
                      onClick={() => handleSort('price')}
                      style={{cursor: 'pointer'}}
                    >
                      Price
                      {sortField === 'price' && (
                        <i className={`ms-1 fas fa-sort-${sortDirection === 'asc' ? 'up' : 'down'}`}></i>
                      )}
                    </th>
                    <th 
                      className="cursor-pointer" 
                      onClick={() => handleSort('status')}
                      style={{cursor: 'pointer'}}
                    >
                      Status
                      {sortField === 'status' && (
                        <i className={`ms-1 fas fa-sort-${sortDirection === 'asc' ? 'up' : 'down'}`}></i>
                      )}
                    </th>
                    <th 
                      className="cursor-pointer" 
                      onClick={() => handleSort('bookingDate')}
                      style={{cursor: 'pointer'}}
                    >
                      Booking Date
                      {sortField === 'bookingDate' && (
                        <i className={`ms-1 fas fa-sort-${sortDirection === 'asc' ? 'up' : 'down'}`}></i>
                      )}
                    </th>
                    <th className="text-end pe-4" style={{width: "10%"}}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedBookings.map((booking, index) => (
                    <tr key={booking.id}>
                      <td className="ps-4">{index + 1}</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="rounded-circle bg-primary text-white p-2 me-2" style={{width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <i className="fas fa-calendar-day"></i>
                          </div>
                          <span className="fw-medium">{booking.eventName}</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <i className="fas fa-user text-muted me-2"></i>
                          {booking.username}
                        </div>
                      </td>
                      <td>{booking.ticketType}</td>
                      <td>{booking.quantity}</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <i className="fas fa-dollar-sign text-success me-1"></i>
                          {booking.price}
                        </div>
                      </td>
                      <td>
                        <span className={`badge ${getStatusBadgeClass(booking.status)} py-2 px-3`}>
                          {booking.status}
                        </span>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <i className="fas fa-clock text-muted me-2"></i>
                          <small>{formatDate(booking.bookingDate)}</small>
                        </div>
                      </td>
                      <td className="text-end pe-4">
                        <div className="btn-group">
                          <button className="btn btn-sm btn-outline-primary">
                            <i className="fas fa-eye"></i> View
                          </button>
                          {booking.status === 'active' && (
                            <button 
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => handleCancelBooking(booking.id)}
                            >
                              <i className="fas fa-ban"></i> Cancel
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="card-footer bg-white p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <small className="text-muted">Showing {sortedBookings.length} of {allBookings.length} bookings</small>
              </div>
              <nav aria-label="Page navigation">
                <ul className="pagination pagination-sm mb-0">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                  </li>
                  <li className="page-item active" aria-current="page">
                    <a className="page-link" href="#">1</a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      ) : (
        <div className="card text-center border-0 shadow-sm">
          <div className="card-body py-5">
            <i className="fas fa-ticket-alt text-muted mb-3" style={{fontSize: '4rem'}}></i>
            <h3 className="card-title">No Bookings Found</h3>
            <p className="card-text text-muted">
              {searchTerm || filterStatus !== 'all' 
                ? "No bookings match your search criteria." 
                : "There are no bookings available in the system yet."}
            </p>
            <button className="btn btn-primary mt-2">
              <i className="fas fa-sync-alt me-1"></i> Refresh
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBookings;