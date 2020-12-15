import React, { Component } from 'react';
import styled from "styled-components";
import Homepage from './Home';
import Aboutpage from './About';
import Portfoliopage from './Portfolio';
import Contactpage from './Contact';

const Home_content = class Home extends Component {
  render() {
    return (
      <Container id="home">
        <ContentBox>
          <div className="center">
            <Homepage />
          </div>
        </ContentBox>
      </Container>
    )
  };
}

const About_content = class About extends Component {
  render() {
    return (
      <Container2 id="about">
        <ContentBox>
          <div className="center">
            <Aboutpage />
          </div>
        </ContentBox>
      </Container2>
    )
  };
}

const Portfolio_content = class Portfolio extends Component {
  render() {
    return (
      <Container3 id="portfolio">
        <ContentBox>
          <div className="center">
            <Portfoliopage />
          </div>
        </ContentBox>
      </Container3>
    )
  };
}

const Contact_content = class Contact extends Component {
  render() {
    return (
      <Container4 id="contact">
        <ContentBox>
          <div className="center">
            <Contactpage />
          </div>
        </ContentBox>
      </Container4>
    )
  };
}

const ContentBox = styled.div`
  width:100%;
  height:100%;
  position:absolute;
  top:50%;
  transform:translateY(-50%);
`;

const Container = styled.section`
  width:100%;
  position:relative;
  background:#181818;
  height:800px;
  @media screen and (max-width:1200px){
    height:660px;
  }
  @media screen and (max-width:700px){
    height:800px;
  }
`;

const Container2 = styled.section`
  width:100%;
  position:relative;
  background:#aaa;
  height:500px;
  background:#282828;
  @media screen and (max-width:700px){
  height:500px;
  }
`;

const Container3 = styled.section`
  width:100%;
  position:relative;
  background:#aaa;
  height:850px;
  background:#181818;
  @media screen and (max-width:700px){
  height:720px;
  }
  @media screen and (max-width:450px){
  height:620px;
  }
`;

const Container4 = styled.section`
  width:100%;
  position:relative;
  background:#aaa;
  height:500px;
  background:#282828;
  @media screen and (max-width:550px){
    height:450px;
  }
`;

// export default Homepage;
export { Home_content, About_content, Portfolio_content, Contact_content };
