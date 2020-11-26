import React, { Component } from 'react';
import Move from './Move';
import moves from './data';
import styled from 'styled-components';

//Constructor allows us to manipulate with states
export default class MoveList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moves: moves,
    };
  }
  //Changing props and passing to screen
  handleDelete = (id) => {
    //console.log(id);
    const sortedList = this.state.moves.filter((item) => item.id !== id);
    this.setState({
      moves: sortedList,
    });
  };

  // this.setState({})
  // We put everything inside states and return map ore one by one
  // index is for unique key
  render() {
    //const books = this.state.books.map((item) => item.book)
    return (
      <Section>
        {this.state.moves.map((item) => (
          <Move info={item} key={item.id} handleDelete={this.handleDelete} />
        ))}
      </Section>
    );
  }
}

const Section = styled.section`
  font-size: 1.5em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 2rem;
`;
