// // import React, { useState, useContext } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { login } from '../api/Api';
// // import { AuthContext } from '../context/Authcontext';

// // const Login = () => {
// //   const [formData, setFormData] = useState({
// //     email: '',
// //     password: ''
// //   });
// //   const [error, setError] = useState('');
// //   const [loading, setLoading] = useState(false);
  
// //   const { login: authLogin } = useContext(AuthContext);
// //   const navigate = useNavigate();

// //   const { email, password } = formData;

// //   const handleChange = e => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async e => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError('');

// //     try {
// //       const userData = await login(formData);
// //       authLogin(userData);
// //       navigate('/');
// //     } catch (err) {
// //       setError(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Login</h2>
// //       {error && <div>{error}</div>}
// //       <form onSubmit={handleSubmit}>
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
// //           />
// //         </div>
// //         <button type="submit" disabled={loading}>
// //           {loading ? 'Logging in...' : 'Login'}
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;







// import React, { useState, useContext, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { login } from '../api/Api';
// import { AuthContext } from '../context/Authcontext';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [formSubmitted, setFormSubmitted] = useState(false);
  
//   const { login: authLogin } = useContext(AuthContext);
//   const navigate = useNavigate();
  
//   const { email, password } = formData;

//   // Add custom CSS
//   useEffect(() => {
//     const style = document.createElement('style');
//     style.innerHTML = `
//       .login-container {
//         min-height: 100vh;
//         background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
//         padding-top: 100px;
//         padding-bottom: 50px;
//         display: flex;
//         align-items: center;
//       }
      
//       .login-card {
//         background: rgba(255, 255, 255, 0.9);
//         border-radius: 20px;
//         box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
//         overflow: hidden;
//         transition: all 0.3s ease;
//       }
      
//       .login-card:hover {
//         transform: translateY(-5px);
//         box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
//       }
      
//       .login-header {
//         background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
//         background-size: 200% 200%;
//         animation: gradientBG 15s ease infinite;
//         padding: 2.5rem;
//         border-radius: 20px 20px 0 0;
//       }
      
//       @keyframes gradientBG {
//         0% { background-position: 0% 50%; }
//         50% { background-position: 100% 50%; }
//         100% { background-position: 0% 50%; }
//       }
      
//       .login-title {
//         color: white;
//         font-weight: 700;
//         margin-bottom: 0;
//         letter-spacing: 1px;
//         font-size: 2rem;
//       }
      
//       .login-subtitle {
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
      
//       .login-btn {
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
      
//       .login-btn:hover {
//         transform: translateY(-3px);
//         box-shadow: 0 5px 15px rgba(78, 115, 223, 0.4);
//       }
      
//       .login-btn::after {
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
      
//       .login-btn:hover::after {
//         opacity: 1;
//       }
      
//       .login-btn:disabled {
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
      
//       .form-check-input:checked {
//         background-color: #4e73df;
//         border-color: #4e73df;
//       }
      
//       .social-login {
//         margin-top: 1.5rem;
//         padding-top: 1.5rem;
//         border-top: 1px solid rgba(0, 0, 0, 0.1);
//       }
      
//       .social-btn {
//         border-radius: 50px;
//         padding: 10px 20px;
//         margin: 0 5px;
//         font-weight: 500;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         transition: all 0.3s;
//       }
      
//       .social-btn:hover {
//         transform: translateY(-2px);
//         box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
//       }
      
//       .social-btn i {
//         margin-right: 8px;
//         font-size: 1.2rem;
//       }
      
//       .google-btn {
//         background-color: #fff;
//         color: #434343;
//         border: 1px solid #e0e0e0;
//       }
      
//       .facebook-btn {
//         background-color: #3b5998;
//         color: white;
//         border: none;
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
      
//       .forgot-password {
//         color: #4e73df;
//         transition: all 0.3s;
//         text-decoration: none;
//       }
      
//       .forgot-password:hover {
//         color: #224abe;
//         text-decoration: underline;
//       }
      
//       .login-image {
//         max-height: 150px;
//         margin-bottom: 1rem;
//       }
      
//       /* Animation for form */
//       .login-form-container {
//         animation: slideUp 0.5s ease;
//       }
      
//       @keyframes slideUp {
//         from { opacity: 0; transform: translateY(20px); }
//         to { opacity: 1; transform: translateY(0); }
//       }
//     `;
//     document.head.appendChild(style);

//     return () => {
//       document.head.removeChild(style);
//     };
//   }, []);

//   const handleChange = e => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
    
//     try {
//       const userData = await login(formData);
//       setFormSubmitted(true);
      
//       // Delay to show success animation
//       setTimeout(() => {
//         authLogin(userData);
//         navigate('/');
//       }, 1500);
//     } catch (err) {
//       setError(err.message || 'Login failed. Please check your credentials.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (formSubmitted) {
//     return (
//       <div className="login-container">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-12 col-md-8 col-lg-5">
//               <div className="login-card p-4 text-center">
//                 <div className="success-checkmark">
//                   <div className="check-icon">
//                     <span className="icon-line line-tip"></span>
//                     <span className="icon-line line-long"></span>
//                   </div>
//                 </div>
//                 <h2 className="mt-4">Login Successful!</h2>
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
//     <div className="login-container">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-12 col-md-8 col-lg-5">
//             <div className="login-card login-form-container">
//               <div className="login-header text-center">
//                 <h2 className="login-title">Welcome Back</h2>
//                 <p className="login-subtitle mb-0">Sign in to continue to Event Booking</p>
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
//                     />
//                     <label htmlFor="password">
//                       <i className="bi bi-lock me-2"></i>Password
//                     </label>
//                     <button
//                       type="button"
//                       className="toggle-password"
//                       onClick={togglePasswordVisibility}
//                     >
//                       <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
//                     </button>
//                   </div>
                  
//                   <div className="d-flex justify-content-between align-items-center mb-4">
//                     <div className="form-check">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         id="rememberMe"
//                         checked={rememberMe}
//                         onChange={() => setRememberMe(!rememberMe)}
//                       />
//                       <label className="form-check-label" htmlFor="rememberMe">
//                         Remember me
//                       </label>
//                     </div>
//                     <Link to="/forgot-password" className="forgot-password">
//                       Forgot Password?
//                     </Link>
//                   </div>
                  
//                   <div className="d-grid">
//                     <button 
//                       type="submit" 
//                       className="btn btn-primary btn-lg login-btn" 
//                       disabled={loading}
//                     >
//                       {loading ? (
//                         <>
//                           <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
//                           Signing In...
//                         </>
//                       ) : (
//                         <>
//                           <i className="bi bi-box-arrow-in-right me-2"></i>
//                           Sign In
//                         </>
//                       )}
//                     </button>
//                   </div>
//                 </form>
                
//                 <div className="social-login">
//                   <p className="text-center text-muted mb-3">Or sign in with</p>
//                   <div className="d-flex justify-content-center">
//                     <button className="btn social-btn google-btn me-2">
//                       <i className="bi bi-google"></i> Google
//                     </button>
//                     <button className="btn social-btn facebook-btn">
//                       <i className="bi bi-facebook"></i> Facebook
//                     </button>
//                   </div>
//                 </div>
                
//                 <div className="text-center mt-4">
//                   <p className="mb-0">
//                     Don't have an account? <Link to="/register" className="text-primary fw-bold">Sign Up</Link>
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

// export default Login;



// import React, { useState, useContext } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import AuthContext from '../context/Authcontext';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
  
//   const { login, error, isAuthenticated } = useContext(AuthContext);
//   const navigate = useNavigate();

//   // Redirect if logged in
//   if (isAuthenticated) {
//     navigate('/');
//   }

//   const { email, password } = formData;

//   const onChange = e => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async e => {
//     e.preventDefault();
//     const success = await login(formData);
//     if (success) {
//       navigate('/');
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       {error && <div>{error}</div>}
//       <form onSubmit={onSubmit}>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={onChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={onChange}
//             minLength="6"
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       <p>
//         Don't have an account? <Link to="/register">Register</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;

// import React, { useState, useContext } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import AuthContext from '../context/Authcontext';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [showPassword, setShowPassword] = useState(false);

//   const { login, error, isAuthenticated } = useContext(AuthContext);
//   const navigate = useNavigate();

//   if (isAuthenticated) {
//     navigate('/');
//   }

//   const { email, password } = formData;

//   const onChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const success = await login(formData);
//     if (success) {
//       navigate('/');
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div
//       className="min-vh-100 d-flex align-items-center justify-content-center"
//       style={{
//         background: 'linear-gradient(to right, #00c6ff, #0072ff)',
//         padding: '20px'
//       }}
//     >
//       <div
//         className="card p-4 shadow-lg border-0"
//         style={{
//           maxWidth: '480px',
//           width: '100%',
//           borderRadius: '1rem',
//           backdropFilter: 'blur(20px)',
//           backgroundColor: 'rgba(255, 255, 255, 0.1)',
//           color: '#fff'
//         }}
//       >
//         <div className="card-body">
//           <h2 className="text-center fw-bold mb-4">
//             <i className="bi bi-box-arrow-in-right me-2"></i>Login
//           </h2>

//           {error && (
//             <div className="alert alert-danger text-center">{error}</div>
//           )}

//           <form onSubmit={onSubmit}>
//             <div className="mb-3">
//               <label className="form-label">Email</label>
//               <div className="input-group">
//                 <span className="input-group-text bg-white">
//                   <i className="bi bi-envelope-fill"></i>
//                 </span>
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

//             <div className="mb-3 position-relative">
//               <label className="form-label">Password</label>
//               <div className="input-group">
//                 <span className="input-group-text bg-white">
//                   <i className="bi bi-lock-fill"></i>
//                 </span>
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   className="form-control"
//                   name="password"
//                   value={password}
//                   onChange={onChange}
//                   minLength="6"
//                   required
//                 />
//                 <button
//                   type="button"
//                   className="btn btn-outline-secondary"
//                   onClick={togglePasswordVisibility}
//                   style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
//                 >
//                   <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
//                 </button>
//               </div>
//             </div>

//             <div className="d-grid mt-4">
//               <button type="submit" className="btn btn-light btn-lg fw-bold">
//                 <i className="bi bi-box-arrow-in-right me-2"></i>Login
//               </button>
//             </div>
//           </form>

//           <p className="mt-4 text-center text-white">
//             Don't have an account?{' '}
//             <Link to="/register" className="text-warning fw-semibold text-decoration-none">
//               Register here
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../context/Authcontext';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const { login, error, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  if (isAuthenticated) {
    navigate('/');
  }

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const success = await login(formData);
    if (success) {
      navigate('/');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center  px-3">
      <div
        className="card p-4 shadow-sm border-0 w-100"
        style={{ maxWidth: '420px', borderRadius: '1rem' }}
      >
        <div className="card-body">
          <h3 className="text-center fw-bold mb-4 text-primary">
            <i className="bi bi-box-arrow-in-right me-2"></i>Login
          </h3>

          {error && (
            <div className="alert alert-danger text-center">{error}</div>
          )}

          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-lock-fill"></i>
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChange}
                  minLength="6"
                  required
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={togglePasswordVisibility}
                >
                  <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                </button>
              </div>
            </div>

            <div className="d-grid mt-4">
              <button type="submit" className="btn btn-primary btn-lg fw-semibold">
                <i className="bi bi-box-arrow-in-right me-2"></i>Login
              </button>
            </div>
          </form>

          <p className="mt-4 text-center">
            Don't have an account?{' '}
            <Link to="/register" className="text-decoration-none text-primary fw-semibold">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
