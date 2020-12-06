import React, { Component } from 'react';
import styled from "styled-components";

class Career extends Component {
  state = {
    name: []
  }
  render() {
    return (
      <Container>
        <Txtbox>
          <Title>Career</Title>
          <Dec>저의 경험 및 경력입니다.</Dec>
        </Txtbox>
        <CareerList>
          <Main>브이테크피아 서버엔지니어 2년(2018.02~2020.03)</Main>
          <Sub>- KBS MNC 서버 점검 & 유지보수 1년</Sub>
          <Sub>- 희귀의약품센터 백업 환경 구축</Sub>
          <Sub>- 닐슨코리아 서버 구축 프로젝트 서버 엔지니어로 참여</Sub>
          <Sub>- 닐슨코리아 서버 구축 프로젝트 참여</Sub>
          <Main>더 조은 아카데미 웹 퍼블리셔 과정 수료(2020.05~2020.11)</Main>
        </CareerList>
      </Container>
    )
  };
}

const Container = styled.div`
  width:100%;
  height:800px;
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
`;

const Dec = styled.p`
  color:#fff;
  padding:1rem;
`;

const CareerList = styled.div`
  width:100%;
  height:auto;
  
`;

const Main = styled.h3`
  padding-top:1rem;
  font-weight:600;
  font-size:1.1rem;
  color:#feb633;
`;

const Sub = styled.p`
  padding:0.2rem 1rem;
  color:#bbb;
`;

export default Career;