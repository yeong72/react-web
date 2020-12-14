import React, { Component } from 'react';
import styled from "styled-components";

import Web from './Weblist';

class Detailpage extends Component {
  render() {
    return (
      <Container>
        <div className="center">
          <Txtbox>
            <Title>포트폴리오</Title>
            <Sub>그 동안의 제 포트폴리오 작품들입니다</Sub>
          </Txtbox>
          <Web></Web>
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

const Txtbox = styled.div`
  width:100%;
  height:200px;
  padding-top:100px;
  box-sizing:border-box;
  text-align:center;
`;

const Title = styled.h3`
  border-bottom:2px solid #feb633;
  display:inline-block;
  padding-bottom:0.3rem;
  color:#fff;
  font-weight:600;
`;

const Sub = styled.p`
  padding:1rem;
  color:#ddd;
`;

export default Detailpage;