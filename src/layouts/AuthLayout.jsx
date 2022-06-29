import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4f5fa;
  font-family: 'Inter', Arial;
`;

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 368px;
  background-color: #ffffff;
  border-radius: 24px;
  box-shadow: 0px 40px 80px 0px rgba(0, 0, 0, 0.05),
    inset 0px -10px 20px 0px rgba(0, 0, 0, 0.05),
    0px 10px 20px 0px rgba(0, 0, 0, 0.05);
  padding: 32px 16px;
`;

const AuthTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const AuthLayout = () => {
  return (
    <Container>
      <AuthContainer>
        <AuthTitle>로그인</AuthTitle>
        <Outlet />
      </AuthContainer>
    </Container>
  );
};

export default AuthLayout;
