import styled from 'styled-components';
const Button = styled.button`
  text-transform: uppercase;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  color: var(--mainColorLight);
  background-color: var(--mainColorDark2);
  border: solid 0.1rem var(--mainColorLight);
  cursor: pointer;
  transition: all 0.2s;

  :hover {
    color: var(--mainColorDark2);
    background-color: var(--mainColorLight);
    border: solid 0.1rem var(--mainColorDark2);
  }
`;

export default Button;
