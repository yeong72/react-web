import { Component } from 'react';
import './App.css';
import { Home_content, About_content, Portfolio_content, Contact_content } from './component/Background';

// awesomefont
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

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
        <Contact_content></Contact_content>
      </div>
    );
  }
}


export default App;
