import { Component } from 'react';
import styled from "styled-components";
import Mainimg1 from '../img/main_img.png'

class Homepage extends Component {
  render() {
    return (
      <Container className="Contents">
        <Txtbox>
          <Title>I'm Yeongjin</Title>
          <Dec>Web Publisher & <br />Responsive Web Developer</Dec>
          <Button href="#">Intro Me</Button>
        </Txtbox>
        <Imgbox>
          <img src={Mainimg1}></img>
        </Imgbox>
      </Container>
    )
  }
}

const Container = styled.div`
  width:100%;
  height:100%;
  text-align:left;
  float:left;
`;

const Imgbox = styled.div`
  width:55%;
  height:100%;
  float:right;
  position:relative;
`;

const Txtbox = styled.div`
  width:45%;
  position:absolute;
  top:50%;
  transform:translateY(-50%);
`;

const Title = styled.h1`
  font-size:3.5rem;
  color:#eee;
`;

const Dec = styled.p`
  font-size:1.8rem;
  color:#999;
`;

const Button = styled.a`
  background:#feb633;
  border-radius:5px;
  padding:1rem 4rem;
  margin-top:3rem;
  display:inline-block;
  color:#fff;
  font-weight:500;
  font-size:1.2rem;
`;

export default Homepage;