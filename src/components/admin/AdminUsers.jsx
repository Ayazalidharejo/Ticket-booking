// // src/components/admin/AdminUsers.js
// import React, { useState, useEffect } from 'react';
// import api from '../api/Api';

// const AdminUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await api.get('/admin/users');
//         setUsers(res.data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.response?.data?.message || 'Failed to fetch users');
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <h1>Manage Users</h1>
//       {users.length > 0 ? (
//         <div>
//           {users.map(user => (
//             <div key={user.id}>
//               <h3>{user.username}</h3>
//               <p>Email: {user.email}</p>
//               <p>Role: {user.isAdmin ? 'Admin' : 'User'}</p>
//               <p>Joined: {user.date}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No users found.</p>
//       )}
//     </div>
//   );
// };

// export default AdminUsers;



import React, { useState, useEffect } from 'react';
import api from '../api/Api';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('username');
  const [sortDirection, setSortDirection] = useState('asc');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await api.get('/admin/users');
        setUsers(res.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch users');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Filter users based on search term
  const filteredUsers = users.filter(user => 
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort users
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    let compareA = a[sortField];
    let compareB = b[sortField];
    
    // Handle special case for role sorting
    if (sortField === 'isAdmin') {
      compareA = a.isAdmin ? 'Admin' : 'User';
      compareB = b.isAdmin ? 'Admin' : 'User';
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
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
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
            <i className="fas fa-users me-2"></i>Manage Users
          </h1>
          <p className="text-muted">Manage and monitor your platform users</p>
        </div>
        
        <div className="col-lg-6">
          <div className="card bg-light border-0 shadow-sm">
            <div className="card-body p-3">
              <div className="row text-center">
                <div className="col-md-4">
                  <h3 className="fw-bold text-primary mb-0">{users.length}</h3>
                  <small className="text-muted">Total Users</small>
                </div>
                <div className="col-md-4">
                  <h3 className="fw-bold text-success mb-0">{users.filter(user => user.isAdmin).length}</h3>
                  <small className="text-muted">Admins</small>
                </div>
                <div className="col-md-4">
                  <h3 className="fw-bold text-info mb-0">{users.filter(user => !user.isAdmin).length}</h3>
                  <small className="text-muted">Regular Users</small>
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
              placeholder="Search by username or email..."
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
            <button className="btn btn-success me-2">
              <i className="fas fa-plus-circle me-1"></i> Add User
            </button>
            <button className="btn btn-primary">
              <i className="fas fa-file-export me-1"></i> Export
            </button>
          </div>
        </div>
      </div>

      {/* Users Table */}
      {sortedUsers.length > 0 ? (
        <div className="card shadow-sm border-0">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover mb-0 align-middle">
                <thead className="bg-light">
                  <tr>
                    <th className="ps-4" style={{width: "5%"}}>#</th>
                    <th 
                      className="cursor-pointer" 
                      onClick={() => handleSort('username')}
                      style={{width: "20%", cursor: 'pointer'}}
                    >
                      Username
                      {sortField === 'username' && (
                        <i className={`ms-1 fas fa-sort-${sortDirection === 'asc' ? 'up' : 'down'}`}></i>
                      )}
                    </th>
                    <th 
                      className="cursor-pointer" 
                      onClick={() => handleSort('email')}
                      style={{width: "25%", cursor: 'pointer'}}
                    >
                      Email
                      {sortField === 'email' && (
                        <i className={`ms-1 fas fa-sort-${sortDirection === 'asc' ? 'up' : 'down'}`}></i>
                      )}
                    </th>
                    <th 
                      className="cursor-pointer" 
                      onClick={() => handleSort('isAdmin')}
                      style={{width: "15%", cursor: 'pointer'}}
                    >
                      Role
                      {sortField === 'isAdmin' && (
                        <i className={`ms-1 fas fa-sort-${sortDirection === 'asc' ? 'up' : 'down'}`}></i>
                      )}
                    </th>
                    <th 
                      className="cursor-pointer" 
                      onClick={() => handleSort('date')}
                      style={{width: "20%", cursor: 'pointer'}}
                    >
                      Joined Date
                      {sortField === 'date' && (
                        <i className={`ms-1 fas fa-sort-${sortDirection === 'asc' ? 'up' : 'down'}`}></i>
                      )}
                    </th>
                    <th className="text-end pe-4" style={{width: "15%"}}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedUsers.map((user, index) => (
                    <tr key={user.id}>
                      <td className="ps-4">{index + 1}</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className={`rounded-circle bg-${user.isAdmin ? 'primary' : 'secondary'} text-white p-2 me-2`} style={{width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <i className="fas fa-user"></i>
                          </div>
                          <span className="fw-medium">{user.username}</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <i className="fas fa-envelope text-muted me-2"></i>
                          {user.email}
                        </div>
                      </td>
                      <td>
                        <span className={`badge bg-${user.isAdmin ? 'primary' : 'secondary'} py-2 px-3`}>
                          {user.isAdmin ? 'Admin' : 'User'}
                        </span>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <i className="fas fa-calendar text-muted me-2"></i>
                          {formatDate(user.date)}
                        </div>
                      </td>
                      <td className="text-end pe-4">
                        <div className="btn-group">
                          <button className="btn btn-sm btn-outline-primary">
                            <i className="fas fa-edit"></i>
                          </button>
                          <button className="btn btn-sm btn-outline-info">
                            <i className="fas fa-eye"></i>
                          </button>
                          <button className="btn btn-sm btn-outline-danger">
                            <i className="fas fa-trash"></i>
                          </button>
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
                <small className="text-muted">Showing {sortedUsers.length} of {users.length} users</small>
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
            <i className="fas fa-users-slash text-muted mb-3" style={{fontSize: '4rem'}}></i>
            <h3 className="card-title">No Users Found</h3>
            <p className="card-text text-muted">
              {searchTerm ? `No users matching "${searchTerm}"` : "There are no users in the system yet."}
            </p>
            <button className="btn btn-primary mt-2">
              <i className="fas fa-plus-circle me-1"></i> Add New User
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUsers;