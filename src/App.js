import React from 'react';
import MoveList from './MoveList';
import './App.css';
import styled from 'styled-components';

const App = () => (
  <Section>
    <h3 className='title'>My favorite move list</h3>
    <MoveList />
  </Section>
);

export default App;

const Section = styled.section`
  .title {
    text-align: center;
    font-size: 3rem;
    padding: 2rem;
  }
`;
