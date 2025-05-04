// // import React, { useState, useContext } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { register } from '../api/Api';
// // import { AuthContext } from '../context/Authcontext';

// // const Register = () => {
// //   const [formData, setFormData] = useState({
// //     username: '',
// //     email: '',
// //     password: '',
// //     confirmPassword: ''
// //   });
// //   const [error, setError] = useState('');
// //   const [loading, setLoading] = useState(false);
  
// //   const { login } = useContext(AuthContext);
// //   const navigate = useNavigate();

// //   const { username, email, password, confirmPassword } = formData;

// //   const handleChange = e => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async e => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError('');

// //     // Check if passwords match
// //     if (password !== confirmPassword) {
// //       setError('Passwords do not match');
// //       setLoading(false);
// //       return;
// //     }

// //     try {
// //       // Remove confirmPassword before sending to API
// //       const { confirmPassword, ...registerData } = formData;
// //       const userData = await register(registerData);
// //       login(userData);
// //       navigate('/');
// //     } catch (err) {
// //       setError(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Register</h2>
// //       {error && <div>{error}</div>}
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label>Username:</label>
// //           <input
// //             type="text"
// //             name="username"
// //             value={username}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label>Email:</label>
// //           <input
// //             type="email"
// //             name="email"
// //             value={email}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label>Password:</label>
// //           <input
// //             type="password"
// //             name="password"
// //             value={password}
// //             onChange={handleChange}
// //             required
// //             minLength="6"
// //           />
// //         </div>
// //         <div>
// //           <label>Confirm Password:</label>
// //           <input
// //             type="password"
// //             name="confirmPassword"
// //             value={confirmPassword}
// //             onChange={handleChange}
// //             required
// //             minLength="6"
// //           />
// //         </div>
// //         <button type="submit" disabled={loading}>
// //           {loading ? 'Registering...' : 'Register'}
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Register;
















// import React, { useState, useContext, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { register } from '../api/Api';
// import { AuthContext } from '../context/Authcontext';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [passwordStrength, setPasswordStrength] = useState(0);
//   const [formSubmitted, setFormSubmitted] = useState(false);
  
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();
  
//   const { username, email, password, confirmPassword } = formData;
  
//   // Add custom CSS
//   useEffect(() => {
//     const style = document.createElement('style');
//     style.innerHTML = `
//       .register-container {
//         min-height: 100vh;
//         background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
//         padding-top: 100px;
//         padding-bottom: 50px;
//       }
      
//       .register-card {
//         background: rgba(255, 255, 255, 0.9);
//         border-radius: 20px;
//         box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
//         overflow: hidden;
//         transition: all 0.3s ease;
//       }
      
//       .register-card:hover {
//         transform: translateY(-5px);
//         box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
//       }
      
//       .register-header {
//         background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
//         background-size: 200% 200%;
//         animation: gradientBG 15s ease infinite;
//         padding: 2rem;
//         border-radius: 20px 20px 0 0;
//       }
      
//       @keyframes gradientBG {
//         0% { background-position: 0% 50%; }
//         50% { background-position: 100% 50%; }
//         100% { background-position: 0% 50%; }
//       }
      
//       .register-title {
//         color: white;
//         font-weight: 700;
//         margin-bottom: 0;
//         letter-spacing: 1px;
//       }
      
//       .register-subtitle {
//         color: rgba(255, 255, 255, 0.8);
//         font-weight: 300;
//       }
      
//       .form-floating {
//         margin-bottom: 1.5rem;
//       }
      
//       .form-floating > label {
//         padding-left: 1rem;
//       }
      
//       .form-control {
//         border-radius: 10px;
//         padding: 1rem 1rem;
//         height: 58px;
//         border: 2px solid #e3e8ef;
//         transition: all 0.3s;
//       }
      
//       .form-control:focus {
//         border-color: #4e73df;
//         box-shadow: 0 0 0 0.25rem rgba(78, 115, 223, 0.15);
//       }
      
//       .register-btn {
//         background: linear-gradient(to right, #4e73df, #224abe);
//         border: none;
//         border-radius: 50px;
//         padding: 12px 30px;
//         font-weight: 600;
//         letter-spacing: 0.5px;
//         transition: all 0.3s;
//         position: relative;
//         overflow: hidden;
//       }
      
//       .register-btn:hover {
//         transform: translateY(-3px);
//         box-shadow: 0 5px 15px rgba(78, 115, 223, 0.4);
//       }
      
//       .register-btn::after {
//         content: '';
//         position: absolute;
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         background: linear-gradient(to right, #224abe, #4e73df);
//         opacity: 0;
//         transition: opacity 0.3s ease;
//         z-index: -1;
//       }
      
//       .register-btn:hover::after {
//         opacity: 1;
//       }
      
//       .register-btn:disabled {
//         background: #a2aecc;
//         transform: none;
//         box-shadow: none;
//       }
      
//       .spinner-border {
//         width: 1rem;
//         height: 1rem;
//         margin-right: 0.5rem;
//       }
      
//       .error-message {
//         background-color: rgba(255, 107, 107, 0.1);
//         border-left: 4px solid #ff6b6b;
//         padding: 1rem;
//         border-radius: 0 8px 8px 0;
//         margin-bottom: 1.5rem;
//         animation: fadeIn 0.3s ease;
//       }
      
//       @keyframes fadeIn {
//         from { opacity: 0; transform: translateY(-10px); }
//         to { opacity: 1; transform: translateY(0); }
//       }
      
//       .password-strength {
//         height: 5px;
//         border-radius: 5px;
//         margin-top: 10px;
//         transition: all 0.3s;
//       }
      
//       .password-strength-weak {
//         background: linear-gradient(to right, #ff6b6b 0%, #f0f0f0 30%);
//       }
      
//       .password-strength-medium {
//         background: linear-gradient(to right, #feca57 0%, #f0f0f0 60%);
//       }
      
//       .password-strength-strong {
//         background: linear-gradient(to right, #1dd1a1 0%, #1dd1a1 100%);
//       }
      
//       .toggle-password {
//         position: absolute;
//         right: 15px;
//         top: 50%;
//         transform: translateY(-50%);
//         border: none;
//         background: transparent;
//         color: #6c757d;
//         cursor: pointer;
//         z-index: 10;
//       }
      
//       .toggle-password:focus {
//         outline: none;
//       }
      
//       .success-checkmark {
//         width: 80px;
//         height: 80px;
//         margin: 0 auto;
//       }
      
//       .check-icon {
//         width: 80px;
//         height: 80px;
//         position: relative;
//         border-radius: 50%;
//         box-sizing: content-box;
//         border: 4px solid #4CAF50;
//       }
      
//       .check-icon::before {
//         top: 3px;
//         left: -2px;
//         width: 30px;
//         transform-origin: 100% 50%;
//         border-radius: 100px 0 0 100px;
//       }
      
//       .check-icon::after {
//         top: 0;
//         left: 30px;
//         width: 60px;
//         transform-origin: 0 50%;
//         border-radius: 0 100px 100px 0;
//         animation: rotate-circle 4.25s ease-in;
//       }
      
//       .check-icon::before, .check-icon::after {
//         content: '';
//         height: 100px;
//         position: absolute;
//         background: #FFFFFF;
//         transform: rotate(-45deg);
//       }
      
//       .icon-line {
//         height: 5px;
//         background-color: #4CAF50;
//         display: block;
//         border-radius: 2px;
//         position: absolute;
//         z-index: 10;
//       }
      
//       .icon-line.line-tip {
//         top: 46px;
//         left: 14px;
//         width: 25px;
//         transform: rotate(45deg);
//         animation: icon-line-tip 0.75s;
//       }
      
//       .icon-line.line-long {
//         top: 38px;
//         right: 8px;
//         width: 47px;
//         transform: rotate(-45deg);
//         animation: icon-line-long 0.75s;
//       }
      
//       @keyframes icon-line-tip {
//         0% {
//           width: 0;
//           left: 1px;
//           top: 19px;
//         }
//         54% {
//           width: 0;
//           left: 1px;
//           top: 19px;
//         }
//         70% {
//           width: 50px;
//           left: -8px;
//           top: 37px;
//         }
//         84% {
//           width: 17px;
//           left: 21px;
//           top: 48px;
//         }
//         100% {
//           width: 25px;
//           left: 14px;
//           top: 45px;
//         }
//       }
      
//       @keyframes icon-line-long {
//         0% {
//           width: 0;
//           right: 46px;
//           top: 54px;
//         }
//         65% {
//           width: 0;
//           right: 46px;
//           top: 54px;
//         }
//         84% {
//           width: 55px;
//           right: 0px;
//           top: 35px;
//         }
//         100% {
//           width: 47px;
//           right: 8px;
//           top: 38px;
//         }
//       }
//     `;
//     document.head.appendChild(style);

//     return () => {
//       document.head.removeChild(style);
//     };
//   }, []);

//   const checkPasswordStrength = (password) => {
//     let strength = 0;
//     if (password.length >= 8) strength += 1;
//     if (/[A-Z]/.test(password)) strength += 1;
//     if (/[0-9]/.test(password)) strength += 1;
//     if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
//     setPasswordStrength(strength);
//   };

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
    
//     if (name === 'password') {
//       checkPasswordStrength(value);
//     }
//   };

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const togglePasswordVisibility = (field) => {
//     if (field === 'password') {
//       setShowPassword(!showPassword);
//     } else {
//       setShowConfirmPassword(!showConfirmPassword);
//     }
//   };

//   const renderPasswordStrength = () => {
//     if (password.length === 0) return null;
    
//     let strengthClass = 'password-strength';
//     let strengthText = '';
    
//     if (passwordStrength <= 1) {
//       strengthClass += ' password-strength-weak';
//       strengthText = 'Weak';
//     } else if (passwordStrength <= 3) {
//       strengthClass += ' password-strength-medium';
//       strengthText = 'Medium';
//     } else {
//       strengthClass += ' password-strength-strong';
//       strengthText = 'Strong';
//     }
    
//     return (
//       <div className="mt-1">
//         <div className={strengthClass}></div>
//         <small className="text-muted mt-1 d-block">{strengthText}</small>
//       </div>
//     );
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
    
//     // Check if passwords match
//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       setLoading(false);
//       return;
//     }
    
//     try {
//       // Remove confirmPassword before sending to API
//       const { confirmPassword, ...registerData } = formData;
//       const userData = await register(registerData);
//       setFormSubmitted(true);
      
//       // Delay to show success animation
//       setTimeout(() => {
//         login(userData);
//         navigate('/');
//       }, 2000);
//     } catch (err) {
//       setError(err.message || 'Registration failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (formSubmitted) {
//     return (
//       <div className="register-container">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-12 col-md-8 col-lg-6">
//               <div className="register-card p-4 text-center">
//                 <div className="success-checkmark">
//                   <div className="check-icon">
//                     <span className="icon-line line-tip"></span>
//                     <span className="icon-line line-long"></span>
//                   </div>
//                 </div>
//                 <h2 className="mt-4">Registration Successful!</h2>
//                 <p className="text-muted mb-4">Redirecting you to the homepage...</p>
//                 <div className="spinner-border text-primary" role="status">
//                   <span className="visually-hidden">Loading...</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="register-container">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-12 col-md-8 col-lg-6">
//             <div className="register-card">
//               <div className="register-header text-center">
//                 <h2 className="register-title">Create an Account</h2>
//                 <p className="register-subtitle mb-0">Join our event booking platform</p>
//               </div>
              
//               <div className="p-4 p-md-5">
//                 {error && (
//                   <div className="error-message">
//                     <i className="bi bi-exclamation-circle me-2"></i>
//                     {error}
//                   </div>
//                 )}
                
//                 <form onSubmit={handleSubmit}>
//                   <div className="form-floating">
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="username"
//                       name="username"
//                       placeholder="Username"
//                       value={username}
//                       onChange={handleChange}
//                       required
//                     />
//                     <label htmlFor="username">
//                       <i className="bi bi-person me-2"></i>Username
//                     </label>
//                   </div>
                  
//                   <div className="form-floating">
//                     <input
//                       type="email"
//                       className="form-control"
//                       id="email"
//                       name="email"
//                       placeholder="Email"
//                       value={email}
//                       onChange={handleChange}
//                       required
//                     />
//                     <label htmlFor="email">
//                       <i className="bi bi-envelope me-2"></i>Email Address
//                     </label>
//                   </div>
                  
//                   <div className="form-floating position-relative">
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       className="form-control"
//                       id="password"
//                       name="password"
//                       placeholder="Password"
//                       value={password}
//                       onChange={handleChange}
//                       required
//                       minLength="6"
//                     />
//                     <label htmlFor="password">
//                       <i className="bi bi-lock me-2"></i>Password
//                     </label>
//                     <button
//                       type="button"
//                       className="toggle-password"
//                       onClick={() => togglePasswordVisibility('password')}
//                     >
//                       <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
//                     </button>
//                     {renderPasswordStrength()}
//                   </div>
                  
//                   <div className="form-floating position-relative mb-4">
//                     <input
//                       type={showConfirmPassword ? "text" : "password"}
//                       className="form-control"
//                       id="confirmPassword"
//                       name="confirmPassword"
//                       placeholder="Confirm Password"
//                       value={confirmPassword}
//                       onChange={handleChange}
//                       required
//                       minLength="6"
//                     />
//                     <label htmlFor="confirmPassword">
//                       <i className="bi bi-shield-lock me-2"></i>Confirm Password
//                     </label>
//                     <button
//                       type="button"
//                       className="toggle-password"
//                       onClick={() => togglePasswordVisibility('confirm')}
//                     >
//                       <i className={`bi ${showConfirmPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
//                     </button>
//                   </div>
                  
//                   <div className="d-grid">
//                     <button 
//                       type="submit" 
//                       className="btn btn-primary btn-lg register-btn" 
//                       disabled={loading}
//                     >
//                       {loading ? (
//                         <>
//                           <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
//                           Creating Account...
//                         </>
//                       ) : 'Create Account'}
//                     </button>
//                   </div>
//                 </form>
                
//                 <div className="text-center mt-4">
//                   <p className="mb-0">
//                     Already have an account? <Link to="/login" className="text-primary fw-bold">Sign In</Link>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


// import React, { useState, useContext } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import AuthContext from '../context/Authcontext';
// import 'bootstrap-icons/font/bootstrap-icons.css';


// const Register = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     role: 'user',
//     accessKey: ''
//   });

//   const { register, error, isAuthenticated } = useContext(AuthContext);
//   const navigate = useNavigate();

//   if (isAuthenticated) {
//     navigate('/');
//   }

//   const { username, email, password, role, accessKey } = formData;

//   const onChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const success = await register(formData);
//     if (success) {
//       navigate('/');
//     }
//   };

//   return (
//     <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
//       <div className="card shadow-lg border-0 rounded-4 p-4" style={{ width: '100%', maxWidth: '500px' }}>
//         <div className="card-body">
//           <h2 className="card-title text-center mb-4 fw-bold text-primary">
//             <i className="bi bi-person-plus-fill me-2"></i>Register
//           </h2>
//           {error && <div className="alert alert-danger">{error}</div>}
//           <form onSubmit={onSubmit}>
//             <div className="mb-3">
//               <label className="form-label">Username</label>
//               <div className="input-group">
//                 <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="username"
//                   value={username}
//                   onChange={onChange}
//                   required
//                 />
//               </div>
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Email</label>
//               <div className="input-group">
//                 <span className="input-group-text"><i className="bi bi-envelope-fill"></i></span>
//                 <input
//                   type="email"
//                   className="form-control"
//                   name="email"
//                   value={email}
//                   onChange={onChange}
//                   required
//                 />
//               </div>
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Password</label>
//               <div className="input-group">
//                 <span className="input-group-text"><i className="bi bi-lock-fill"></i></span>
//                 <input
//                   type="password"
//                   className="form-control"
//                   name="password"
//                   value={password}
//                   onChange={onChange}
//                   minLength="6"
//                   required
//                 />
//               </div>
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Role</label>
//               <select
//                 className="form-select"
//                 name="role"
//                 value={role}
//                 onChange={onChange}
//               >
//                 <option value="user">User</option>
//                 <option value="admin">Admin</option>
//               </select>
//             </div>
//             {role === 'admin' && (
//               <div className="mb-3">
//                 <label className="form-label">Admin Access Key</label>
//                 <div className="input-group">
//                   <span className="input-group-text"><i className="bi bi-key-fill"></i></span>
//                   <input
//                     type="password"
//                     className="form-control"
//                     name="accessKey"
//                     value={accessKey}
//                     onChange={onChange}
//                     required
//                   />
//                 </div>
//               </div>
//             )}
//             <div className="d-grid mt-4">
//               <button type="submit" className="btn btn-primary btn-lg shadow-sm">
//                 <i className="bi bi-check-circle-fill me-2"></i> Register
//               </button>
//             </div>
//           </form>
//           <p className="mt-3 text-center text-muted">
//             Already have an account? <Link to="/login" className="text-decoration-none">Login</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;





import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../context/Authcontext';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'user',
    accessKey: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const { register, error, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const { username, email, password, role, accessKey } = formData;

  const validateForm = () => {
    const errors = {};
    
    if (!username.trim()) {
      errors.username = 'Username is required';
    }
    
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    
    if (role === 'admin' && !accessKey) {
      errors.accessKey = 'Access key is required for admin registration';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitting(true);
      try {
        console.log('Submitting registration form', formData);
        const success = await register(formData);
        if (success) {
          navigate('/');
        }
      } catch (err) {
        console.error('Error during form submission:', err);
      } finally {
        setSubmitting(false);
      }
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow-lg border-0 rounded-4 p-4" style={{ width: '100%', maxWidth: '500px' }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4 fw-bold text-primary">
            <i className="bi bi-person-plus-fill me-2"></i>Register
          </h2>
          
          {error && <div className="alert alert-danger">{error}</div>}
          
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
                <input
                  type="text"
                  className={`form-control ${formErrors.username ? 'is-invalid' : ''}`}
                  name="username"
                  value={username}
                  onChange={onChange}
                  required
                />
              </div>
              {formErrors.username && <div className="invalid-feedback d-block">{formErrors.username}</div>}
            </div>
            
            <div className="mb-3">
              <label className="form-label">Email</label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-envelope-fill"></i></span>
                <input
                  type="email"
                  className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                />
              </div>
              {formErrors.email && <div className="invalid-feedback d-block">{formErrors.email}</div>}
            </div>
            
            <div className="mb-3">
              <label className="form-label">Password</label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-lock-fill"></i></span>
                <input
                  type="password"
                  className={`form-control ${formErrors.password ? 'is-invalid' : ''}`}
                  name="password"
                  value={password}
                  onChange={onChange}
                  minLength="6"
                  required
                />
              </div>
              {formErrors.password && <div className="invalid-feedback d-block">{formErrors.password}</div>}
            </div>
            
            <div className="mb-3">
              <label className="form-label">Role</label>
              <select
                className="form-select"
                name="role"
                value={role}
                onChange={onChange}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            
            {role === 'admin' && (
              <div className="mb-3">
                <label className="form-label">Admin Access Key</label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-key-fill"></i></span>
                  <input
                    type="password"
                    className={`form-control ${formErrors.accessKey ? 'is-invalid' : ''}`}
                    name="accessKey"
                    value={accessKey}
                    onChange={onChange}
                    required={role === 'admin'}
                  />
                </div>
                {formErrors.accessKey && <div className="invalid-feedback d-block">{formErrors.accessKey}</div>}
                <small className="text-muted">This key is required for admin registration and should be provided by system administrators.</small>
              </div>
            )}
            
            <div className="d-grid mt-4">
              <button 
                type="submit" 
                className="btn btn-primary btn-lg shadow-sm"
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Processing...
                  </>
                ) : (
                  <>
                    <i className="bi bi-check-circle-fill me-2"></i> Register
                  </>
                )}
              </button>
            </div>
          </form>
          
          <p className="mt-3 text-center text-muted">
            Already have an account? <Link to="/login" className="text-decoration-none">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;