// // import React, { useContext } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { AuthContext } from '../context/Authcontext';

// // const Navbar = () => {
// //   const { isAuthenticated, logout, currentUser } = useContext(AuthContext);
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     logout();
// //     navigate('/');
// //   };

// //   return (
// //     <nav>
// //       <div>
// //         <Link to="/">Event Booking System</Link>
// //         <div>
// //           <ul>
// //             <li>
// //               <Link to="/">Events</Link>
// //             </li>
// //             {isAuthenticated ? (
// //               <>
// //                 <li>
// //                   <Link to="/my-bookings">My Bookings</Link>
// //                 </li>
// //                 <li>
// //                   <Link to="/create-event">Create Event</Link>
// //                 </li>
// //                 <li>
// //                   <span>Welcome, {currentUser?.username}</span>
// //                 </li>
// //                 <li>
// //                   <button onClick={handleLogout}>Logout</button>
// //                 </li>
// //               </>
// //             ) : (
// //               <>
// //                 <li>
// //                   <Link to="/login">Login</Link>
// //                 </li>
// //                 <li>
// //                   <Link to="/register">Register</Link>
// //                 </li>
// //               </>
// //             )}
// //           </ul>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;





// import React, { useContext, useState, useEffect } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { AuthContext } from '../context/Authcontext';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Navbar = () => {
//   const { isAuthenticated, logout, currentUser } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [scrolled, setScrolled] = useState(false);
//   const [expanded, setExpanded] = useState(false);

//   // Handle scroll effect for navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
    
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // Add custom CSS to the document
//   useEffect(() => {
//     const style = document.createElement('style');
//     style.innerHTML = `
//       .custom-navbar {
//         background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
//         background-size: 200% 200%;
//         animation: gradientBG 15s ease infinite;
//       }
      
//       .navbar-shrink {
//         padding: 0.5rem 1rem !important;
//       }
      
//       @keyframes gradientBG {
//         0% { background-position: 0% 50%; }
//         50% { background-position: 100% 50%; }
//         100% { background-position: 0% 50%; }
//       }
      
//       .nav-link {
//         position: relative;
//         margin: 0 5px;
//         font-weight: 500;
//       }
      
//       .nav-link:after {
//         content: '';
//         position: absolute;
//         width: 0;
//         height: 2px;
//         bottom: 0;
//         left: 0;
//         background-color: #ffffff;
//         transition: width 0.3s ease;
//       }
      
//       .nav-link:hover:after, .nav-link.active:after {
//         width: 100%;
//       }
      
//       .custom-btn {
//         border-radius: 50px;
//         padding: 0.5rem 1.5rem;
//         border: 2px solid rgba(255, 255, 255, 0.5);
//         background: rgba(255, 255, 255, 0.1);
//         backdrop-filter: blur(5px);
//         transition: all 0.3s ease;
//         font-weight: 600;
//         letter-spacing: 0.5px;
//       }
      
//       .custom-btn:hover {
//         background: rgba(255, 255, 255, 0.2);
//         transform: translateY(-3px);
//         box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
//       }
      
//       .navbar-brand {
//         font-weight: 700;
//         font-size: 1.5rem;
//         letter-spacing: 1px;
//         text-transform: uppercase;
//       }
      
//       .navbar-brand-icon {
//         font-size: 1.8rem;
//         margin-right: 10px;
//         vertical-align: middle;
//       }
      
//       .dropdown-menu {
//         background: rgba(0, 0, 0, 0.8);
//         backdrop-filter: blur(10px);
//         border: 1px solid rgba(255, 255, 255, 0.1);
//       }
      
//       .dropdown-item {
//         color: #fff;
//       }
      
//       .dropdown-item:hover {
//         background: rgba(255, 255, 255, 0.1);
//       }
      
//       .navbar-toggler {
//         border: none;
//         padding: 0.5rem;
//         position: relative;
//         border-radius: 50%;
//         width: 40px;
//         height: 40px;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         background: rgba(255, 255, 255, 0.2);
//       }
      
//       .user-avatar {
//         width: 30px;
//         height: 30px;
//         border-radius: 50%;
//         object-fit: cover;
//         margin-right: 5px;
//         border: 2px solid #fff;
//       }
      
//       .dropdown-toggle::after {
//         vertical-align: middle;
//       }
      
//       @media (max-width: 992px) {
//         .custom-navbar .navbar-collapse {
//           background: rgba(0, 0, 0, 0.85);
//           backdrop-filter: blur(10px);
//           border-radius: 10px;
//           padding: 1rem;
//           margin-top: 10px;
//         }
        
//         .nav-link {
//           padding: 0.8rem 1rem;
//           margin: 5px 0;
//           border-radius: 5px;
//         }
        
//         .nav-link:hover {
//           background: rgba(255, 255, 255, 0.1);
//         }
//       }
      
//       .navbar-nav .badge {
//         position: absolute;
//         top: 0;
//         right: 0;
//         transform: translate(50%, -50%);
//       }
      
//       .notification-dot {
//         width: 8px;
//         height: 8px;
//         border-radius: 50%;
//         background-color: #ff4757;
//         position: absolute;
//         top: 0;
//         right: 0;
//       }
//     `;
//     document.head.appendChild(style);

//     return () => {
//       document.head.removeChild(style);
//     };
//   }, []);

//   // Check if current path matches the link
//   const isActive = (path) => {
//     return location.pathname === path ? 'active' : '';
//   };

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   // Close mobile menu when a link is clicked
//   const closeMenu = () => {
//     setExpanded(false);
//   };

//   return (
//     <nav className={`navbar navbar-expand-lg navbar-dark fixed-top custom-navbar ${scrolled ? 'navbar-shrink' : ''}`} 
//       style={{
//         transition: 'all 0.3s ease-in-out',
//         boxShadow: scrolled ? '0 5px 20px rgba(0, 0, 0, 0.2)' : 'none',
//         padding: scrolled ? '0.5rem 1rem' : '1rem'
//       }}>
//       <div className="container">
//         <Link className="navbar-brand d-flex align-items-center" to="/" onClick={closeMenu}>
//           <i className="bi bi-calendar-event navbar-brand-icon"></i>
//           <span className="d-none d-md-inline">Event Booking System</span>
//           <span className="d-inline d-md-none">EBS</span>
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           onClick={() => setExpanded(!expanded)}
//           aria-controls="navbarNav"
//           aria-expanded={expanded}
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbarNav">
//           <ul className="navbar-nav ms-auto align-items-center">
//             <li className="nav-item position-relative">
//               <Link 
//                 className={`nav-link px-3 py-2 ${isActive('/')}`} 
//                 to="/" 
//                 onClick={closeMenu}
//               >
//                 <i className="bi bi-calendar-week me-1"></i> Events
//               </Link>
//             </li>
//             {isAuthenticated ? (
//               <>
//                 <li className="nav-item position-relative">
//                   <Link 
//                     className={`nav-link px-3 py-2 ${isActive('/my-bookings')}`} 
//                     to="/my-bookings" 
//                     onClick={closeMenu}
//                   >
//                     <i className="bi bi-bookmark me-1"></i> My Bookings
//                     {/* Example notification dot */}
//                     <span className="notification-dot"></span>
//                   </Link>
//                 </li>
//                 <li className="nav-item position-relative">
//                   <Link 
//                     className={`nav-link px-3 py-2 ${isActive('/create-event')}`} 
//                     to="/create-event" 
//                     onClick={closeMenu}
//                   >
//                     <i className="bi bi-plus-circle me-1"></i> Create Event
//                   </Link>
//                 </li>
//                 <li className="nav-item dropdown ms-lg-3">
//                   <a 
//                     className="nav-link dropdown-toggle d-flex align-items-center" 
//                     href="#" 
//                     id="navbarDropdown" 
//                     role="button" 
//                     data-bs-toggle="dropdown" 
//                     aria-expanded="false"
//                   >
//                     <img 
//                       src={`https://ui-avatars.com/api/?name=${currentUser?.username || 'User'}&background=random&color=fff`} 
//                       alt="User" 
//                       className="user-avatar"
//                     />
//                     <span className="ms-1">{currentUser?.username}</span>
//                   </a>
//                   <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
//                     <li>
//                       <Link 
//                         className="dropdown-item" 
//                         to="/profile" 
//                         onClick={closeMenu}
//                       >
//                         <i className="bi bi-person me-2"></i> Profile
//                       </Link>
//                     </li>
//                     <li>
//                       <Link 
//                         className="dropdown-item" 
//                         to="/settings" 
//                         onClick={closeMenu}
//                       >
//                         <i className="bi bi-gear me-2"></i> Settings
//                       </Link>
//                     </li>
//                     <li><hr className="dropdown-divider" style={{ borderColor: 'rgba(255,255,255,0.1)' }}/></li>
//                     <li>
//                       <button 
//                         className="dropdown-item text-danger" 
//                         onClick={() => {
//                           handleLogout();
//                           closeMenu();
//                         }}
//                       >
//                         <i className="bi bi-box-arrow-right me-2"></i> Logout
//                       </button>
//                     </li>
//                   </ul>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li className="nav-item">
//                   <Link 
//                     className={`nav-link px-3 py-2 ${isActive('/login')}`} 
//                     to="/login" 
//                     onClick={closeMenu}
//                   >
//                     <i className="bi bi-box-arrow-in-right me-1"></i> Login
//                   </Link>
//                 </li>
//                 <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
//                   <Link 
//                     className="custom-btn btn text-white"
//                     to="/register" 
//                     onClick={closeMenu}
//                   >
//                     <i className="bi bi-person-plus me-1"></i> Register
//                   </Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };


// // src/components/layout/Navbar.js
// import React, { useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import AuthContext from '../context/Authcontext';

// const Navbar = () => {
//   const { isAuthenticated, isAdmin, user, logout } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   const guestLinks = (
//     <>
//       <li><Link to="/login">Login</Link></li>
//       <li><Link to="/register">Register</Link></li>
//     </>
//   );

//   const userLinks = (
//     <>
//       <li><Link to="/events">Events</Link></li>
//       <li><Link to="/my-bookings">My Bookings</Link></li>
//       {isAdmin && <li><Link to="/admin">Admin</Link></li>}
//       <li>
//         <span>Welcome, {user?.username}</span>
//       </li>
//       <li>
//         <button onClick={handleLogout}>Logout</button>
//       </li>
//     </>
//   );

//   return (
//     <nav>
//       <h1><Link to="/">Ticket Booking System</Link></h1>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         {isAuthenticated ? userLinks : guestLinks}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/Authcontext';

const Navbar = () => {
  const { isAuthenticated, isAdmin, user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          🎟️ Ticket Booking
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            {isAuthenticated && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/events">Events</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/my-bookings">My Bookings</Link>
                </li>
                {isAdmin && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin">Admin</Link>
                  </li>
                )}
              </>
            )}
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {!isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item d-flex align-items-center text-white me-3">
                  <i className="bi bi-person-circle me-1"></i>
                  {user?.username}
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
