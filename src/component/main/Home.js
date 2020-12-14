import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import Homeimg from '../../img/main_img.png'

class Homepage extends Component {
  render() {
    return (
      <Container className="Contents">
        <Txtbox>
          <Title>I'm Yeongjin</Title>
          <Dec>Web Publisher & <br />Responsive Web Developer</Dec>
          {/* <Button href="#">Intro Me</Button> */}
          <NavLink to="Intro" className="homelink">Intro Me</NavLink>
        </Txtbox>
        <Imgbox>
          <img src={Homeimg}></img>
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
  @media screen and (max-width:700px){
    width:100%;
    float:none;
    z-index:-1;
  }
`;

const Txtbox = styled.div`
  width:45%;
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  @media screen and (max-width:700px){
    width:100%;
    top:30%;
    transform:translate(0,-50%);
    left:auto;
    text-align:center;
  }
`;

const Title = styled.h1`
  font-size:3.5rem;
  color:#eee;
  @media screen and (max-width:1480px){
    font-size:3.0rem;
  }
  @media screen and (max-width:1200px){
    font-size:2.5rem;
    padding-bottom:1rem;
  }
  @media screen and (max-width:900px){
    font-size:2rem;
  }
`;

const Dec = styled.p`
  font-size:1.8rem;
  color:#999;
  @media screen and (max-width:1480px){
    font-size:1.6rem;
  }
  @media screen and (max-width:900px){
    font-size:1.2rem;
  }
`;

// const Button = styled.a`
//   background:#feb633;
//   border-radius:5px;
//   padding:1rem 4rem;
//   margin-top:3rem;
//   display:inline-block;
//   color:#fff;
//   font-weight:500;
//   font-size:1.2rem;
//   transition:all 0.4s;
//   border:2px solid #feb633;
//   &:hover{
//     background:#101010;
//     color:#feb633;
//   }
//   @media screen and (max-width:1480px){
//     padding:1rem 3.4rem;
//     font-size:1.0rem;
//   }
// `;

export default Homepage;