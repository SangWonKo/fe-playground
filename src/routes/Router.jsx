import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';
import AuthProvider from '../components/AuthProvider';
import AuthLayout from '../layouts/AuthLayout';
import FeedLayout from '../layouts/FeedLayout';
import Home from '../pages/Home';
import Laundrygo from '../pages/Laundrygo';
import Laundrygo2 from '../pages/Laundrygo2';
import Yogiyo from '../pages/Yogiyo';
import PrivateRoute from './PrivateRoute';

const Router = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<LoginForm />} />
        </Route>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="yogiyo" element={<Yogiyo />} />
          <Route
            path="laundrygo"
            element={<Laundrygo menuConfig={menuConfig} />}
          />
          <Route path="laundrygo2" element={<Laundrygo2 />} />

          <Route
            path="feed"
            element={<PrivateRoute component={<FeedLayout />} />}
          >
            <Route index element={<Navigate to="feed" replace />} />
            <Route path="feed" element={<>feed</>} />
          </Route>
        </Route>
        {/* <Route path="/" element={<PrivateRoute component={<FeedLayout />} />}>
          <Route index element={<Navigate to="feed" replace />} />
          <Route path="feed" element={<>feed</>} />
        </Route> */}
      </Routes>
    </AuthProvider>
  );
};

export default Router;

const menuConfig = [
  {
    title: 'Home',
  },
  {
    title: 'Services',
    subItems: ['Cooking', 'Cleaning'],
  },
  {
    title: 'Contact',
    subItems: ['Phone', 'Mail'],
  },
];
