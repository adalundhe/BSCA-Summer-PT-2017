import React, { Component } from 'react';
import './App.css';
import {NavBar, Header, Content, Contact} from './components';
import './components/styles.css';

const about = "Hello, my name is Sean. I'm a Computer Science, Maths, and Physics major attending the University of Montana."
const info = {
  name: "Sean Corbett",
  phone: "885-231-9090",
  email: "sean.c@nerd.net"
}

class App extends Component {
  render() {
    return (
      <div className="main-app">
        <NavBar />
        <Header title={"Hello!"} headerMsg={"Welcome to my About Me page!"} className="header"/>
        <Content about={about}/>
        <Contact info={info}/>
      </div>
    );
  }
}

export default App;
