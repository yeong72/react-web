import React, { Component } from 'react';
import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

class Menu extends Component {

  render() {

    const names = ['Home', 'Intro', 'Detail'];
    // const listItems = names.map((name, index, link) => <li key={index}><a href="#">{name}</a></li>);

    return (
      <Container className="nav">
        <li><NavLink exact to="/reactmain" activeClassName="nav_on">{names[0]}</NavLink></li>
        <li><NavLink to="/reactmain/Intro" activeClassName="nav_on">{names[1]}</NavLink></li>
        <li><NavLink to="/reactmain/Detail" activeClassName="nav_on">{names[2]}</NavLink></li>
      </Container>
    )
  };
}

const Container = styled.ul`
  float:right;
`;

// script code

export default Menu;