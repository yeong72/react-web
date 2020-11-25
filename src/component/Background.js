import React, { Component } from 'react';
import styled from "styled-components";
import Homepage from './Home';
// import Aboutpage from './About';

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
            {/* <Aboutpage /> */}
          </div>
        </ContentBox>
      </Container2>
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
  background:#222;
  height:800px;
`;

const Container2 = styled.div`
  width:100%;
  position:relative;
  background:#aaa;
  height:500px;
  background-size:cover;
`;

// export default Homepage;
export { Home_content, About_content };
