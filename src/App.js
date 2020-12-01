import { Component } from 'react';

// import js file
import Header from './component/header/Header';

// Content file
import Mainpage from './component/main/Main';
import Intropage from './component/intro/Intro';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="wrap">
        <Header></Header>
        <Mainpage></Mainpage>
        <Intropage></Intropage>
      </div>
    );
  }
}

// script code
document.addEventListener('scroll', function () {

  var _header = document.querySelector("header");
  var ScrollTop = window.scrollY || document.documentElement.scrollTop;
  // // var sections = document.querySelectorAll("section");
  // var nav = document.querySelector(".nav");
  // var navlist = nav.querySelectorAll("li");

  // var _home = document.querySelector("#home");
  // var _about = document.querySelector("#about");
  // var _portfolio = document.querySelector("#portfolio");
  // var _contact = document.querySelector("#contact");

  // var homeHeight = _home.offsetHeight;
  // var aboutHeight = _about.offsetHeight;
  // var portfolioHeight = _portfolio.offsetHeight;
  // var contactHeight = _contact.offsetHeight;

  // var homeOffsetTop = _home.offsetTop;
  // var aboutOffsetTop = _about.offsetTop;
  // var portfolioOffsetTop = _portfolio.offsetTop;
  // var contactOffsetTop = _contact.offsetTop;

  // var top = this.offsetTop;
  // var bottom = top + this.offsetHeight();


  // if (ScrollTop >= 0 && ScrollTop < aboutOffsetTop) {
  //   navlist.classList.remove('on');
  //   navlist[0].classList.add("on");
  // }


  // header effect
  {
    ScrollTop > 0 ?
      _header.style.backgroundColor = 'rgba(0,0,0,0.3)'
      : _header.style.backgroundColor = 'rgba(0,0,0,0)';
  }



  // 

});

export default App;
