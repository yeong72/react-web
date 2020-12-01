import React, { Component } from 'react';
import styled from "styled-components";
import { Home_content, About_content, Portfolio_content, Contact_content } from './Background';


class Mainpage extends Component {
  render() {
    return (
      <Container>
        <Home_content></Home_content>
        <About_content></About_content>
        <Portfolio_content></Portfolio_content>
        <Contact_content></Contact_content>
      </Container>
    )
  }
}

const Container = styled.div`
  width:100%;
  height:auto;
`;

export default Mainpage;