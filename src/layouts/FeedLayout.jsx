import React from 'react';
import { Outlet } from 'react-router-dom';

const FeedLayout = () => {
  return (
    <div>
      feed
      <Outlet />
    </div>
  );
};

export default FeedLayout;
