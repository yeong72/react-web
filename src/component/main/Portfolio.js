import { Component } from 'react';
import styled from "styled-components";
import Slidebox from './Slide';

class Portfoliopage extends Component {
  render() {
    return (
      <Container className="Contents">
        <Txtbox>
          <Title>Portfolio</Title>
          <Dec>
            좌ㆍ우 슬라이드<br />
          </Dec>
        </Txtbox>
        <Slidebox />
      </Container>
    )
  };
}

const Container = styled.div`
  width:100%;
  height:100%;
  position:relative;
`;

const Txtbox = styled.div`
  width:100%;
  height:120px;
  text-align:center;
  padding-top:50px;
  @media screen and (max-width:700px){
    height:100px;
  }
`;

const Title = styled.h1`
  font-size:2rem;
  color:#eee;
  padding-bottom:20px;
  @media screen and (max-width:400px){
    font-size:1.5rem;
    margin-bottom:20px;
    padding-bottom:0.3rem;
    display:inline-block;
    border-bottom:4px solid #feb633;
  }
`;

const Dec = styled.p`
  font-size:0.8rem;
  color:#999;
  
`;

export default Portfoliopage;