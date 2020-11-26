import React, { Component } from 'react';
import styled from "styled-components";

class Menu extends Component {

  render() {

    const names = ['Home', 'About', 'Portfolio', 'Contact'];
    const listItems = names.map((name, index) => <li key={index}><a href="#">{name}</a></li>);
    return (
      <Container>
        {listItems}
      </Container>
    )
  };
}

const Container = styled.ul`
  float:right;
`;



export default Menu;