// src/components/routing/AdminRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/Authcontext';

const AdminRoute = ({ children }) => {
  const { isAuthenticated, isAdmin, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated && isAdmin ? children : <Navigate to="/" />;
};

export default AdminRoute;