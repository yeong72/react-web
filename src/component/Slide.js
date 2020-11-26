import { Component } from 'react';
import styled from "styled-components";
import Slider from "react-slick";

class Slidebox extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Container>
        <Slider {...settings}>
          <div className="slides">
            <h3>1</h3>
          </div >
          <div className="slides">
            <h3>2</h3>
          </div>
          <div className="slides">
            <h3>3</h3>
          </div>
        </Slider>
      </Container>
    )
  };
}

const Container = styled.div`
  width:100%;
  height:70%;
  position:absolute;
  bottom:0;
`;


export default Slidebox;