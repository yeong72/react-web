import React, { Component } from 'react';
import styled from "styled-components";

import Profilepage from './Profile';
import Skillpage from './Skill';

class Intropage extends Component {
  render() {
    return (
      <Container>
        <div className="center">
          <Profilepage />
          <Skillpage />
        </div>
      </Container>
    )
  }
}

const Container = styled.div`
  width:100%;
  height:auto;
  background:#303030;
`;

export default Intropage;