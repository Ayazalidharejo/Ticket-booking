// import React, { createContext, useState, useEffect } from 'react';
// import { getCurrentUser } from '../api/Api';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem('token'));
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Check if user is logged in
//     const fetchUser = async () => {
//       if (token) {
//         try {
//           const userData = await getCurrentUser(token);
//           setCurrentUser(userData);
//         } catch (error) {
//           console.error('Error fetching user data:', error.message);
//           logout();
//         }
//       }
//       setLoading(false);
//     };

//     fetchUser();
//   }, [token]);

//   const login = (userData) => {
//     localStorage.setItem('token', userData.token);
//     localStorage.setItem('userId', userData.userId);
//     localStorage.setItem('username', userData.username);
//     setToken(userData.token);
//     setCurrentUser({
//       id: userData.userId,
//       username: userData.username
//     });
//   };

//   const logout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('userId');
//     localStorage.removeItem('username');
//     setToken(null);
//     setCurrentUser(null);
//   };

//   const value = {
//     currentUser,
//     token,
//     login,
//     logout,
//     isAuthenticated: !!token,
//     loading
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };



















import React, { createContext, useState, useEffect } from 'react';
import api from '../api/Api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load user on initial render
  useEffect(() => {
    const loadUser = async () => {
      try {
        if (localStorage.getItem('token')) {
          const res = await api.get('/users/me');
          setUser(res.data);
          setIsAuthenticated(true);
          setIsAdmin(res.data.isAdmin === 1);
        }
      } catch (err) {
        console.error(err);
        localStorage.removeItem('token');
        setUser(null);
        setIsAuthenticated(false);
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  // Register user
  const register = async (formData) => {
    try {
      setError(null);
      const res = await api.post('/users/register', formData);
      
      localStorage.setItem('token', res.data.token);
      setUser({
        id: res.data.userId,
        username: res.data.username,
        isAdmin: res.data.isAdmin
      });
      setIsAuthenticated(true);
      setIsAdmin(res.data.isAdmin);
      return true;
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      return false;
    }
  };

  // Login user
  const login = async (formData) => {
    try {
      setError(null);
      const res = await api.post('/users/login', formData);
      
      localStorage.setItem('token', res.data.token);
      setUser({
        id: res.data.userId,
        username: res.data.username,
        isAdmin: res.data.isAdmin
      });
      setIsAuthenticated(true);
      setIsAdmin(res.data.isAdmin);
      return true;
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
      return false;
    }
  };

  // Logout user
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setIsAuthenticated(false);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isAdmin,
        loading,
        error,
        register,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;