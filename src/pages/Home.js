import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const Wrapper = styled.div`
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 16px;
`;
const Home = () => {
  return (
    <Wrapper>
      <Title>FE Playground</Title>
      <GridContainer>
        <Card link="yogiyo"></Card>
        <Card link="laundrygo"></Card>
        <Card link="laundrygo2"></Card>
        <Card link="feed"></Card>
      </GridContainer>
    </Wrapper>
  );
};

export default Home;
