import React, { Component } from 'react';
import styled from "styled-components";

import Onetelimg from '../../img/onetel.png'
import Hubbleimg from '../../img/hubble.png'
import Knmmimg from '../../img/knmm.png'
import Remianimg from '../../img/remian.png'
import Ktrimg from '../../img/ktr.png'
import Salaglyimg from '../../img/salagly.png'
import Processimg from '../../img/process.png'
import Revealimg from '../../img/reveal.png'
import Mainimg from '../../img/main.png'

class Web extends Component {
  render() {
    return (
      <Container>

        <div className="weblist onetel">
          <Imgbox>
            <img src={Onetelimg} />
          </Imgbox>
          <Txtbox>
            <Title>
              Onetel
            </Title>
            <Dec>
              템플릿을 보고 만든 사이트입니다. 프론트 엔드 언어인 HTML, CSS, Jquery 를 사용하여 전체적인 UI 디자인을 하였고, 백 엔드 언어인 PHP 를 사용하여 Mysql 데이터 베이스의 정보를 가져와 로그인 기능 및 커뮤니티 기능, 관리자 페이지를 구현하였습니다. 모든 기기에 대응할 수 있도록 반응형 웹으로 구현하였습니다.
            </Dec>
            <View href="http://yyjj745.dothome.co.kr/onetel/" rel="noopener noreferrer" target="_blank">Site View</View>
          </Txtbox >
        </div>

        <div className="weblist hubble">
          <Imgbox>
            <img src={Hubbleimg} />
          </Imgbox>
          <Txtbox>
            <Title>
              Hubble
            </Title>
            <Dec>
              템플릿을 보고 만든 사이트입니다. 허블 API 데이터를 가져와서 화면에 슬라이드 이미지나 동영상으로 보여주는 사이트입니다. API 데이터를 활용하는 방법을 익히면서 만든 사이트입니다. 모든 기기에 대응할 수 있도록 반응형 웹으로 구현하였습니다.
            </Dec>
            <View href="http://yyjj745.dothome.co.kr/hubble/" rel="noopener noreferrer" target="_blank">Site View</View>
          </Txtbox >
        </div>

        <div className="weblist knmm">
          <Imgbox>
            <img src={Knmmimg} />
          </Imgbox>
          <Txtbox>
            <Title>
              KNMM
            </Title>
            <Dec>
              원 사이트를 보고 만든 카피 사이트입니다. 풀페이지 웹사이트이며 모바일 분리형으로 구현하였습니다. 탭 기능, 슬라이드 기능 등이 구현되어있습니다.
            </Dec>
            <View href="http://yyjj745.dothome.co.kr/knmm/" rel="noopener noreferrer" target="_blank">Site View</View>
          </Txtbox >
        </div>

        <div className="weblist remian">
          <Imgbox>
            <img src={Remianimg} />
          </Imgbox>
          <Txtbox>
            <Title>
              Remian
            </Title>
            <Dec>
              원 사이트를 보고 만든 리뉴얼 사이트입니다. 라이브러리에 의존하지 않기위해 하드 코딩으로만 만들었습니다. 아코디언 메뉴, 드롭다운 메뉴, 슬라이드, 탭 등의 기능을 구현하였습니다. 연혁 서브페이지까지 구현하였습니다. 원래 사이트와 다르게 태블릿 사이즈까지는 반응형으로 구현하고 모바일의 경우 원래 사이트와 같이 분리형으로 구현하였습니다.
            </Dec>
            <View href="http://yyjj745.dothome.co.kr/remian/" rel="noopener noreferrer" target="_blank">Site View</View>
          </Txtbox >
        </div>

        <div className="weblist ktr">
          <Imgbox>
            <img src={Knmmimg} />
          </Imgbox>
          <Txtbox>
            <Title>
              Korea Tour
            </Title>
            <Dec>
              원 사이트를 보고 만든 카피 사이트입니다. 풀페이지 웹사이트이며 모바일 분리형으로 구현하였습니다. 탭 기능, 슬라이드 기능 등이 구현되어있습니다.
            </Dec>
            <View href="http://yyjj745.dothome.co.kr/ktr/" rel="noopener noreferrer" target="_blank">Site View</View>
          </Txtbox >
        </div>

        <div className="weblist salagly">
          <Imgbox>
            <img src={Salaglyimg} />
          </Imgbox>
          <Txtbox>
            <Title>
              Salagly
            </Title>
            <Dec>
              학원 팀 프로젝트로 2명의 팀원과 함께 작업하였습니다. UI/UX 설계 기획부터 사이트 구현까지 2개월동안 작업하였습니다. 모바일 분리형으로 구현하였습니다.
            </Dec>
            <View href="http://yyjj745.dothome.co.kr/salagly/" rel="noopener noreferrer" target="_blank">Site View</View>
          </Txtbox >
        </div>

        <div className="weblist process">
          <Imgbox>
            <img src={Processimg} />
          </Imgbox>
          <Txtbox>
            <Title>
              Process
            </Title>
            <Dec>
              학원 다니는 동안 작업한 포트폴리오들의 진행률을 기록하기위해 만든 웹 사이트 입니다. PHP 언어를 사용하여 Mysql 데이터 베이스에 진행률을 기록 및 수정이 가능하도록 하였습니다. 모든 기기에 대응할 수 있도록 반응형 웹으로 구현하였습니다.
            </Dec>
            <View href="http://yyjj745.dothome.co.kr/process/" rel="noopener noreferrer" target="_blank">Site View</View>
          </Txtbox >
        </div>

        <div className="weblist reveal">
          <Imgbox>
            <img src={Revealimg} />
          </Imgbox>
          <Txtbox>
            <Title>
              Reveal
            </Title>
            <Dec>
              BootStrap과 다양한 라이브러리를 연습하기 위해 템플릿을 보고 만든 사이트입니다. 모든 기기에 대응할 수 있도록 반응형 웹으로 구현하였습니다.
            </Dec>
            <View href="http://yyjj745.dothome.co.kr/reveal/" rel="noopener noreferrer" target="_blank">Site View</View>
          </Txtbox >
        </div>

        <div className="weblist main">
          <Imgbox>
            <img src={Mainimg} />
          </Imgbox>
          <Txtbox>
            <Title>
              Main Portfolio
            </Title>
            <Dec>
              모든 포트폴리오를 담은 메인 포트폴리오 사이트입니다. 풀페이지 웹사이트이며 MAC 컨셉으로 디자인하였습니다. Home 탭의 포트폴리오 폴더를 열면 포트폴리오 목록이 나옵니다. PHP 언어를 사용하여 Contact 기능을 구현하였습니다. 모든 기기에 대응할 수 있도록 반응형 웹으로 구현하였습니다.
            </Dec>
            <View href="http://yyjj745.dothome.co.kr/portfolio/" rel="noopener noreferrer" target="_blank">Site View</View>
          </Txtbox >
        </div>


      </Container >
    )
  }
}

const Container = styled.div`
  width:100%;
  height:auto;
  position:relative;
`;

const Imgbox = styled.div`
  width:100%;
  height:400px;
  position:relative;
  top:0;
  left:50%;
  transform:translateX(-50%);
  padding:1% 0;
  box-sizing:border-box;
  @media screen and (max-width:700px){
    height:300px;
  }
  @media screen and (max-width:500px){
    height:250px;
  }
`;

const Txtbox = styled.div`
  width:60%;
  height:auto;
  position:relative;
  text-align:center;
  left:50%;
  transform:translateX(-50%);
  border-bottom:2px solid #111;
  @media screen and (max-width:1100px){
    width:80%;
  }
  @media screen and (max-width:700px){
    width:90%;
  }
`;

const Title = styled.h2`
  color:#feb633;
  font-weight:500;
  padding:0.5rem;
`;

const Dec = styled.p`
  color:#ccc;
  font-size:0.9rem;
  line-height:1.6;
  padding:1rem;
  @media screen and (max-width:700px){
    font-size:0.8rem;
  }
  @media screen and (max-width:700px){
    font-size:0.7rem;
  }
`;

const View = styled.a`
  display:inline-block;
  box-sizing:border-box;
  padding:0.5rem 1.5rem;
  color:#fff;
  border:2px solid #feb633;
  border-radius:5px;
  font-weight:600;
  transition:all 0.6s;
  background:#feb633;
  margin-bottom:4rem;
  &:hover{
    color:#fff;
    background:0;
  }
`;

export default Web;