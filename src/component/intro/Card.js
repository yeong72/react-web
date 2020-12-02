import React, { Component } from 'react';
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'

class Skillcard extends Component {
  render() {
    return (
      <Container>
        <FontAwesomeIcon icon={faHtml5} className="skill_icon" />
      </Container>
    )
  }
}

const Container = styled.div`
  width:49%;
  float:left;
  background:#fff;
  height:400px;
  padding:2rem;
  box-sizing:border-box;
`;



export default Skillcard;