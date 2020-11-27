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
            저의 포트폴리오들이며 좌ㆍ우로 슬라이드가 됩니다.<br />
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
`;

const Title = styled.h1`
  font-size:2rem;
  color:#eee;
  padding-bottom:20px;                                                                 
`;

const Dec = styled.p`
  font-size:0.8rem;
  color:#999;
  
`;

export default Portfoliopage;