import { Component } from 'react';
import styled from "styled-components";
// awesomefont
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

class Contactpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '010-4900-1885',
      email: 'yyjj745@naver.com',
      github: 'https://github.com/yeong72',
    }
  }

  render() {
    return (
      <Container className="contact_con">
        <Txtbox>
          <Title>Contact</Title>
          <Dec>제 포트폴리오가 마음에 드신다면 연락주세요!</Dec>
          <Form>
            <ul>
              <li><FontAwesomeIcon icon={faMobileAlt} /><span>연락처 :</span>{this.state.phone}</li>
              <li><FontAwesomeIcon icon={faEnvelope} /><span>이메일 :</span>{this.state.email}</li>
              <li><FontAwesomeIcon icon={faGithub} /><span>Github :</span>{this.state.github}</li>
            </ul>
          </Form>
        </Txtbox>
        <Copyright>
          <Txtbox>
            <p>
              Copyright ⓒ 2020 웹 퍼블리셔 유영진 All rights reserved<br />
            본 사이트는 개인포트폴리오 사이트로 상업적 용도가 아닙니다.
            </p>
          </Txtbox>
        </Copyright>
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
  height:auto;
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

const Form = styled.div`
  width:100%;
  height:200px;
  padding:2rem;
  box-sizing:border-box;
  color:#feb633;
`;

const Copyright = styled.div`
  width:100%;
  height:100px;
  color:#bbb;
  font-size:0.7rem;
`;

export default Contactpage;