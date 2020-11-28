import { Component } from 'react';
import styled from "styled-components";
import Slider from "react-slick";

// img import
import Onetelimg from '../img/onetel.png'
import Hubbleimg from '../img/hubble.png'
import Knmmimg from '../img/knmm.png'
import Remianimg from '../img/remian.png'
import Ktrimg from '../img/ktr.png'
import Salaglyimg from '../img/salagly.png'
import Processimg from '../img/process.png'
import Mainimg from '../img/main.png'

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
          <div className="slides onetel">
            <img src={Onetelimg}></img>
            <h2>Onetel</h2>
            <p>PHP를 사용한 로그인, 게시판 기능을 구현한 반응형 웹사이트</p>
            <a href="#" class="link">View </a>
          </div>
          <div className="slides hubble">
            <img src={Hubbleimg}></img>
            <h2>Hubble</h2>
            <p>API 데이터를 사용한 반응형 웹사이트</p>
            <a href="#" class="link">View </a>
          </div>
          <div className="slides knmm">
            <img src={Knmmimg}></img>
            <h2>KNMM</h2>
            <p>풀페이지 라이브러리를 사용한 모바일 분리형 웹사이트</p>
            <a href="#" class="link">View </a>
          </div>
          <div className="slides remian">
            <img src={Remianimg}></img>
            <h2>Remian</h2>
            <p>하드 코딩으로 구현한 반응형 웹사이트 & 서브페이지</p>
            <a href="#" class="link">View </a>
          </div>
          <div className="slides Ktr">
            <img src={Ktrimg}></img>
            <h2>Korea Tour</h2>
            <p>API 데이터를 불러와 원하는 정보를 검색하는 반응형 웹사이트</p>
            <a href="#" class="link">View </a>
          </div>
          <div className="slides salagly">
            <img src={Salaglyimg}></img>
            <h2>Salagly</h2>
            <p>풀페이지 라이브러리를 사용한 분리형 웹사이트 & 팀프로젝트 기획</p>
            <a href="#" class="link">View </a>
          </div>
          <div className="slides process">
            <img src={Processimg}></img>
            <h2>Process</h2>
            <p>PHP를 사용한 진행률 기록용 반응형 웹사이트</p>
            <a href="#" class="link">View </a>
          </div>
          <div className="slides main">
            <img src={Mainimg}></img>
            <h2>Main Portfolio</h2>
            <p>포트폴리오를 담은 메인 반응형 웹사이트</p>
            <a href="#" class="link">View </a>
          </div>
        </Slider>
      </Container>
    )
  };
}

const Container = styled.div`
  width:100%;
  height:70%;
  position:relative;
`;


export default Slidebox;