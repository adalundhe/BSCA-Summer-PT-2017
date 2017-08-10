import React, { Component } from 'react';
import './App.css';
import DATA from './DATA.js';
import AppTitle from './AppTitle'
import TopFourteen from './TopFourteen'
import Contact from './Contact'

// Create a component 'Title' that retuns an h1 with some text. Render it
// below insinde our App component.

class App extends Component {
  render() {
    console.log(DATA,"Number of names",DATA.names.length,"Number of books",DATA.books.length,"Number of numbers",DATA.numbers.length);
    const address = {
      street: '101 Oberon Ln.',
      city: 'Denver',
      state: 'CO',
      zip: '80202'
    }

    return (
      <div>
        <AppTitle title={'Reading Rainbow Bookstore'} />
        <TopFourteen books={DATA.books} rankings={DATA.numbers} readers={DATA.names}/>
        <Contact title={'Reading Rainbow Bookstore'} address={address} phoneNumber={'(303)-202-4456'} email={'reading@rainbowstore.com'}/>
      </div>
    );
  }
}

export default App;
