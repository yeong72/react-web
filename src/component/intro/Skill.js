import React, { Component } from 'react';
import styled from "styled-components";
import Skillcard from './Card';
import Career from './Career';

class Skillpage extends Component {
  render() {
    return (
      <Container className="profile_con">
        <Txtbox>
          <Title>Skill</Title>
          <Dec>제가 할 수 있는 기술들 입니다.</Dec>
        </Txtbox>
        <Skillbox>
          <Skillcard />
        </Skillbox>
        <Careerbox>
          <Career />
        </Careerbox>
      </Container>
    )
  }
}

const Container = styled.div`
  width:100%;
  height:auto;
  box-sizing:border-box;
  padding-top:50px;
`;

const Txtbox = styled.div`
  width:100%;
  height:150px;
  text-align:center;
`;

const Title = styled.h2`
  font-size:2.6rem;
  color:#fff;
  border-bottom:3px solid #feb633;
  display:inline-block;
  font-weight:500;
  @media screen and (max-width:700px){
    font-size:2rem;
  }
`;

const Dec = styled.p`
  color:#fff;
  padding:1rem;
`;

const Skillbox = styled.div`

`;

const Careerbox = styled.div`

`;

export default Skillpage;