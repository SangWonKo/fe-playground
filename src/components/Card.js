import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 5%) 0px 4px 8px 8px;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin-bottom: 4px;
  font-size: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const Card = ({ link, children }) => {
  return (
    <StyledCard>
      {!!link && <StyledLink to={link}>{link}</StyledLink>}
      {children}
    </StyledCard>
  );
};

export default Card;
