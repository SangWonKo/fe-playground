import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';
import AuthProvider from '../components/AuthProvider';
import AuthLayout from '../layouts/AuthLayout';
import FeedLayout from '../layouts/FeedLayout';
import PrivateRoute from './PrivateRoute';

const Router = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<LoginForm />} />
        </Route>

        <Route path="/" element={<PrivateRoute component={<FeedLayout />} />}>
          <Route index element={<Navigate to="feed" replace />} />
          <Route path="feed" element={<>feed</>} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default Router;
