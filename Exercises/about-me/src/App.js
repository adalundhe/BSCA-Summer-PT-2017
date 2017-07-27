import React, { Component } from 'react';
import './App.css';
import {NavBar, Header, Content} from './components';
import './components/styles.css';

const about = "Hello, my name is Sean. I'm a Computer Science, Maths, and Physics major attending the University of Montana."

class App extends Component {
  render() {
    return (
      <div className="main-app">
        <NavBar />
        <Header title={"Hello!"} headerMsg={"Welcome to my About Me page!"} className="header"/>
        <Content about={about}/>
      </div>
    );
  }
}

export default App;
