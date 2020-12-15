import React, { Component } from 'react';
import styled from "styled-components";
import logo from '../../img/logo.png' // relative path to image 

class Logo extends Component {
  render() {
    return (
      <Container>
        <img src={logo} alt={"logo"}></img>
      </Container>
    )
  };
}

const Container = styled.div`
  position:absolute;
  left:0;
  top:50%;
  transform:translateY(-50%);
  overflow:hidden;
  @media screen and (max-width:350px){
    left:-15%;
  }
`;

export default Logo;