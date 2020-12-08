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
          <Keywords>Windows, Linux, Cluster, VMware, Backup Exec, Acronis, 서버 엔지니어</Keywords>
          <Sub>KBS MNC 서버 점검 & 유지보수 1년</Sub>
          <Sub>합동참모본부 서버 보안 설정 & 서버 점검 1년</Sub>
          <Sub>희귀의약품센터 백업 환경 구축</Sub>
          <Sub>닐슨코리아 서버 구축 프로젝트 서버 엔지니어로 참여</Sub>
          <Sub>오상헬스케어 서버 가상화 프로젝트 서버 엔지니어로 참여</Sub>
          <Sub>한국 경제 TV 서버 클러스트 구축 프로젝트 서버 엔지니어로 참여</Sub>
          <Main>더 조은 아카데미 웹 퍼블리셔 과정 수료(2020.05~2020.11)</Main>
          <Keywords>HTML, CSS, Jquery, PHP, Flutter, Mysql, 웹 접근성, 웹 퍼블리셔</Keywords>
          <Sub>입사 추천서 및 모범 공로상 수상</Sub>
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
  padding:1rem 0;
  font-weight:600;
  font-size:1.1rem;
  color:#feb633;
`;

const Keywords = styled.p`
  color:#ddd;
  padding:0.5rem;
`;

const Sub = styled.p`
  padding:0.2rem 1rem;
  color:#bbb;
  position:relative;
  :before{content:''; display:block; width:8px; height:1px; position:absolute; left:0; top:50%; background:#999;}
`;

export default Career;