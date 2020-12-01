import React, { Component } from 'react';
import styled from "styled-components";

class Menu extends Component {

  render() {

    const names = ['Home', 'Intro', 'Detail', 'Contact'];
    // const listItems = names.map((name, index, link) => <li key={index}><a href="#">{name}</a></li>);

    return (
      <Container className="nav">
        <li><a>{names[0]}</a></li>
        <li><a>{names[1]}</a></li>
        <li><a>{names[2]}</a></li>
        <li><a>{names[3]}</a></li>
      </Container>
    )
  };
}

const Container = styled.ul`
  float:right;
`;






export default Menu;