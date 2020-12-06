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
`;

const Imgbox = styled.div`
  width:45%;
  position:relative;
  top:50%;
  transform:translateY(-50%);
  float:left;
  height:300px;
  overflow:hidden;
  @media screen and (max-width:700px){
    width:100%;
    top:5%;
    transform:none;
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
  @media screen and (max-width:700px){
    width:100%;
    top:60%;
    float:none;
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
    font-size:2.2rem;
  }
  @media screen and (max-width:1200px){
    font-size:1.8rem;
  }
`;


export default Profilepage;