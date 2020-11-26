import React, { Component } from 'react';
import styled from "styled-components";
import Aboutimg from '../img/about.png'

class Aboutpage extends Component {
  render() {
    return (
      <Container className="about_con">
        <Imgbox>
          <img src={Aboutimg}></img>
          <Title>About Me</Title>
        </Imgbox>
        <Txtbox>
          <Dec1>
            경청하는 자세와 성실함이 강점인 신입 웹 퍼블리셔 유영진입니다.<br /> 현재에 안주하지 않고 꾸준히 발전하려고 노력하는 모습을 보여드리겠습니다.
          </Dec1>
          <Dec2>
            HTML5, CSS3, JS, Jquery 를 다루며 웹 표준 및 접근성을 준수한 코딩을 지향하며 반응형 웹을 선호합니다. 백 엔드 언어는 PHP 를 사용한 경험이 있으며 현재 개인적으로 React 를 공부하고 있습니다.
          </Dec2>
          <Button href="#">More View</Button>
        </Txtbox>
      </Container>
    )
  }
}

const Container = styled.div`
  width:100%;
  height:100%;
`;

const Imgbox = styled.div`
  width:45%;
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  left:0;
`;

const Title = styled.h1`
  font-size:2.6rem;
  position:absolute;
  top:50%;
  left:40%;
  border-bottom:4px solid #feb633;
  padding-bottom:0.3rem;
  color:#eee;
`;

const Txtbox = styled.div`
  width:55%;
  position:relative;
  top:50%;
  transform:translateY(-50%);
  text-align:left;
  float:right;
`;

const Dec1 = styled.div`
  color:#aaa;
  line-height:1.8;
  padding-bottom:1.5rem;
  font-weight:500;
  font-family: 'Noto Serif KR', serif;
  font-weight:500;
`;

const Dec2 = styled.div`
  color:#aaa;
  line-height:1.8;
  padding-bottom:2rem;
  font-family: 'Noto Serif KR', serif;
  font-weight:500;
`;

const Button = styled.a`
  background:#feb633;
  border-radius:5px;
  padding:0.8rem 3rem;
  display:inline-block;
  color:#fff;
  font-weight:500;
  font-size:1.2rem;
  transition:all 0.4s;
  border:2px solid #feb633;
  &:hover{
    background:#101010;
    color:#feb633;
  }
`;

export default Aboutpage;