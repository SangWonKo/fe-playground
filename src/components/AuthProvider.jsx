import React, { createContext, useCallback, useEffect, useState } from 'react';
import ScrollToTop from './elements/ScrollToTop';

export const AuthContext = createContext();

const initialValue = {
  isAuthenticated: false,
  id: '',
  password: '',
};
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialValue);

  const login = useCallback(
    (userInfo) => () => {
      const user = JSON.stringify(userInfo);
      setAuth({ ...user, isAuthenticated: true });
      localStorage.setItem('auth', user);
    },
    []
  );

  const logout = useCallback(() => {
    localStorage.removeItem('auth');
    setAuth(initialValue);
  }, []);

  useEffect(() => {
    const authUser = JSON.parse(localStorage.getItem('auth'));
    if (!!authUser) return;

    setAuth({});
  }, []);

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      <ScrollToTop />
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
