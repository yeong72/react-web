import React, { Component } from 'react';
import styled from "styled-components";
import Logo from "./Logo";
import Menu from "./Menu";

class Header extends Component {
  render() {
    return (
      <Container>
        <div className="center">
          <Logo />
          <Menu />
        </div>
      </Container>
    )
  };
}

const Container = styled.header`
  
`;

export default Header;