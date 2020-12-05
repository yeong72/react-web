import React, { Component } from 'react';
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJsSquare, faPhp, faReact, faLinux } from '@fortawesome/free-brands-svg-icons'

// img import


class Skillcard extends Component {

  render() {
    return (
      <Skillwrap className="card">
        <Container className="html_con left">
          <Background className="html_bg">
            <FontAwesomeIcon icon={faHtml5} className="skill_icon" />
            <Txtbox>
              <Title>HTML5</Title>
              <Sub>Expert</Sub>
              <Dec>웹 표준을 준수하며 기초에 충실한 코딩을 지향합니다. </Dec>
            </Txtbox>
          </Background>
        </Container>
        <Container className="css_con right">
          <Background className="css_bg">
            <FontAwesomeIcon icon={faCss3Alt} className="skill_icon" />
            <Txtbox>
              <Title>CSS3</Title>
              <Sub>Expert</Sub>
              <Dec>유지보수 하기 깔끔한 코드와 감각적인 디자인을 코딩합니다.</Dec>
            </Txtbox>
          </Background>
        </Container>
        <Container className="js_con left">
          <Background className="js_bg">
            <FontAwesomeIcon icon={faJsSquare} className="skill_icon" />
            <Txtbox>
              <Title>JSㆍJquery</Title>
              <Sub>Beginner</Sub>
              <Dec>효율적인 코드를 지향하며 새로운 코드를 꾸준히 배우려고 합니다.</Dec>
            </Txtbox>
          </Background>
        </Container>
        <Container className="php_con right">
          <Background className="php_bg">
            <FontAwesomeIcon icon={faPhp} className="skill_icon" />
            <Txtbox>
              <Title>PHP</Title>
              <Sub>Beginner</Sub>
              <Dec>백 앤드 개발자와의 원활한 협업과 전체적인 프로그래밍 구조의 이해를 위해 PHP 언어를 사용하여 기본적인 로그인 & 게시판 기능을 구현하였습니다.</Dec>
            </Txtbox>
          </Background>
        </Container>
        <Container className="react_con left">
          <Background className="react_bg">
            <FontAwesomeIcon icon={faReact} className="skill_icon" />
            <Txtbox>
              <Title>React</Title>
              <Sub>Beginner</Sub>
              <Dec>추후에 프론트 앤드 개발자로 성장하기 위해 개인적으로 React를 공부하고 있습니다.</Dec>
            </Txtbox>
          </Background>
        </Container>
        <Container className="os_con right">
          <Background className="os_bg">
            <FontAwesomeIcon icon={faLinux} className="skill_icon" />
            <Txtbox>
              <Title>OSㆍHW</Title>
              <Sub>Expert</Sub>
              <Dec>HP & DELL & LENOVO 등의 서버 Hardware 설치 및 구축과 Windows Server & Linux의 OS를 다룰 수 있습니다.</Dec>
            </Txtbox>
          </Background>
        </Container>
      </Skillwrap>
    )
  }
}

const Skillwrap = styled.div`

`;

const Container = styled.div`
  width:49%;
  float:left;
  height:300px;
  text-align:center;
  border-radius:20px;
  overflow:hidden;
`;

const Background = styled.div`
  width:100%;
  height:100%;
  opacity:0.9;
  padding:2rem;
  box-sizing:border-box;
`;

const Txtbox = styled.div`
  
`;

const Title = styled.h2`
  padding:0.5rem;
  
`;

const Sub = styled.h3`

`;

const Dec = styled.p`
  padding:0.5rem;
  font-size:0.8rem;
  font-weight:600;
`;

export default Skillcard;