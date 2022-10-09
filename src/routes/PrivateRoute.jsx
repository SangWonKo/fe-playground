import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthProvider';

const PrivateRoute = ({ component }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? component : <Navigate to="/auth" replace />;
};

export default PrivateRoute;
