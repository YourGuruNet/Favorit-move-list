import React from 'react';
import styled from 'styled-components';
export default function DeleteButton({ handleDelete, name }) {
  return (
    <Button type='button' onClick={handleDelete}>
      {name}
    </Button>
  );
}

const Button = styled.button`
  width: 100%;
  text-transform: uppercase;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  color: var(--mainColorDark2);
  background-color: var(--mainColorLight);
  border: solid 0.1rem var(--mainColorDark2);
  grid-column: 1 / span 2;
  cursor: pointer;
  transition: all 0.2s;
  :hover {
    color: var(--mainColorLight);
    background-color: var(--mainColorDark2);
    border: solid 0.1rem var(--mainColorLight);
  }
`;
