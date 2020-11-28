import { Component } from 'react';
import styled from "styled-components";
// awesomefont
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

class Contactpage extends Component {
  render() {
    return (
      <Container className="contact_con">
        <Txtbox>
          <Title>Contact</Title>
          <Dec>제 포트폴리오가 마음에 드신다면 연락주세요!</Dec>
          <Form>
            <ul>
              <li><FontAwesomeIcon icon={faMobileAlt} /><span>연락처 :</span></li>
              <li><FontAwesomeIcon icon={faEnvelope} /><span>이메일 :</span></li>
              <li><span>카카오톡 :</span></li>
            </ul>
          </Form>
        </Txtbox>
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
  background:#fff;
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
  background:#eee;
  padding:2rem;
  box-sizing:border-box;
`;

export default Contactpage;