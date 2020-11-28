import React, { Component } from 'react';
import styled from "styled-components";
import Homepage from './Home';
import Aboutpage from './About';
import Portfoliopage from './Portfolio';
import Contactpage from './Contact';

const Home_content = class Home extends Component {
  render() {
    return (
      <Container>
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
      <Container2>
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
      <Container3>
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
      <Container4>
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

const Container = styled.div`
  width:100%;
  position:relative;
  background:#181818;
  height:800px;
`;

const Container2 = styled.div`
  width:100%;
  position:relative;
  background:#aaa;
  height:500px;
  background:#282828;
`;

const Container3 = styled.div`
  width:100%;
  position:relative;
  background:#aaa;
  height:850px;
  background:#181818;
`;

const Container4 = styled.div`
  width:100%;
  position:relative;
  background:#aaa;
  height:500px;
  background:#282828;
`;

// export default Homepage;
export { Home_content, About_content, Portfolio_content, Contact_content };
