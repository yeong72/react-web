import React, { Component } from 'react';
import styled from "styled-components";
import Profileimg from '../../img/profile.jpg'

class Profilepage extends Component {
  render() {
    return (
      <Container className="profile_con">
        <Imgbox>
          <img src={Profileimg}></img>
        </Imgbox>
        <Txtbox>
          <Title>
            안녕하세요.<br />
            웹 퍼블리셔 유영진입니다.<br />
            저를 소개하겠습니다.
          </Title>
        </Txtbox>
      </Container>
    )
  }
}

const Container = styled.div`
  width:100%;
  height:500px;
  padding-top:80px;
  box-sizing:border-box;
  position:relative;
  @media screen and (max-width:1480px){
    height:450px;
    
  }
  @media screen and (max-width:1100px){
    height:350px;
    padding-top:100px;
  }
  @media screen and (max-width:400px){
    height:260px;
  }
`;

const Imgbox = styled.div`
  width:45%;
  position:relative;
  top:50%;
  transform:translateY(-50%);
  float:left;
  height:300px;
  overflow:hidden;
  @media screen and (max-width:1100px){
    height:210px;
  }

  @media screen and (max-width:700px){
    width:100%;
    top:5%;
    transform:none;
    height:260px;
  }
  @media screen and (max-width:400px){
    height:150px;
  }
`;

const Txtbox = styled.div`
  width:55%;
  height:300px;
  position:relative;
  top:50%;
  transform:translateY(-50%);
  text-align:left;
  float:right;
  box-sizing:border-box;
  padding-top:50px;
  @media screen and (max-width:1400px){
    padding-top:30px;
  }
  
  @media screen and (max-width:1100px){
    height:210px;
  }

  @media screen and (max-width:700px){
    width:100%;
    top:60%;
    float:none;
  }
  @media screen and (max-width:400px){
    display:none;
  }
`;

const Title = styled.h1`
  font-size:2rem;
  position:absolute;
  color:#eee;
  box-sizing:border-box;
  padding:2rem;
  font-weight:600;
  @media screen and (max-width:1480px){
    font-size:1.6rem;
  }
  @media screen and (max-width:1200px){
    font-size:1.3rem;
  }
  @media screen and (max-width:900px){
    font-size:1rem;
  }
  @media screen and (max-width:700px){
    font-size:0.8rem;
    color:#feb633;
    letter-spacing:0.2rem;
    line-height:1.6;
  }
  
`;


export default Profilepage;