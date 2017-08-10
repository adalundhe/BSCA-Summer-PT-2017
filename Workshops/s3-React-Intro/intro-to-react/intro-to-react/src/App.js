import React, { Component } from 'react';
import './App.css';

const NavBar = () =>
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
    <li>Blog</li>
  </ul>

const HelloWorld = (props) => <div className="title">Hello {props.title}!</div>

const About = () => {
  const postDate = new Date()

  return(
    <div>
      <p>{'Posted:'}</p>
      <p>{postDate.toString()}</p>
    </div>
  )
}

const Section = (props) => {
  const name = '-' + props.name;

  return(
    <div className="post-card">
      <p>{props.content}</p>
      <p>{props.name}</p>
      <p>{props.children}</p>
    </div>
  )
}



class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <HelloWorld title={'Khalesi'} />
        <Section content={'Tyrion is helping Khalesi topple Cerci.'} name={'Khalesi'}>
          <About />
        </Section>

      </div>
    );
  }
}

export default App;
