import { Component } from 'react';
import { Route } from 'react-router';

// import dom


// Content file
import Header from './component/header/Header';
import Mainpage from './component/main/Main';
import Intropage from './component/intro/Intro';
import Detailpage from './component/detail/Detail';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="wrap">
        <Header></Header>
        <Route exact path="/" component={Mainpage} />
        <Route path="/Intro" component={Intropage} />
        <Route path="/Detail" component={Detailpage} />
      </div>
    );
  }
}

// script code
document.addEventListener('scroll', function () {

  var _header = document.querySelector("header");
  var ScrollTop = window.scrollY || document.documentElement.scrollTop;

  // header effect
  {
    ScrollTop > 0 ?
      _header.style.backgroundColor = 'rgba(0,0,0,0.3)'
      : _header.style.backgroundColor = 'rgba(0,0,0,0)';
  }



  // 

});

export default App;
