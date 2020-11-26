import React, { Component } from 'react';
import Button from './components/Button';
import DeleteButton from './components/DeleteButton';
import styled from 'styled-components';

//Extends means that we get all values from react component
export default class Move extends Component {
  //Always use setState() to modify states
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      showInfo: false,
    };
  }
  // Use ES6 if you use ES5 you need to set Bind in states
  addCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decreesCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  resetCount = () => {
    this.setState({
      count: 1,
    });
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    // Info is because we give such a name
    const { id, name, img, price, info } = this.props.info;
    const { handleDelete } = this.props;

    //Make function and the just insert ver i want to see returned value
    const checkInfo = (showInfo) => {
      if (showInfo === true) {
        return <p>{info}</p>;
      } else {
        return null;
      }
    };
    return (
      <section>
        <Img src={img} alt='move' />
        <Name> {name}</Name>
        <h5>Price: {price}$</h5>
        <Count>Count: {this.state.count}</Count>
        <ButtonSection>
          <Button type='button' onClick={this.addCount}>
            add count
          </Button>
          <Button type='button' onClick={this.decreesCount}>
            decrees
          </Button>
          <Button type='button' onClick={this.resetCount}>
            restart
          </Button>
          <DeleteButton name='delete' handleDelete={() => handleDelete(id)} />
          <InfoButton type='button' onClick={this.handleInfo}>
            Info
          </InfoButton>
        </ButtonSection>
        {checkInfo(this.state.showInfo)}
        {/* Ternary operator */}
        {/*this.state.showInfo ? <p>{info}</p> : null*/}
      </section>
    );
  }
}
const Name = styled.h3`
  text-align: center;
  padding: 1rem;
`;
const Count = styled.p`
  font-size: 1rem;
`;

const ButtonSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 0.3rem;
`;
const Img = styled.img`
  width: 100%;
`;
const InfoButton = styled.button`
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
