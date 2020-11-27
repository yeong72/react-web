import { Component } from 'react';
import './App.css';
import { Home_content, About_content, Portfolio_content } from './component/Background';

// import js file
import Header from './component/Header';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="wrap">
        <Header></Header>
        <Home_content></Home_content>
        <About_content></About_content>
        <Portfolio_content></Portfolio_content>
      </div>
    );
  }
}


export default App;
