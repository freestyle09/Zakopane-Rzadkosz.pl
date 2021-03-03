import React, { Component } from 'react';

// Components
import Header from './Header';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/style.scss';
import Home from './Home';
import Location from './Location';
import Gallery from './Gallery';
import Contact from './Contact';
import GoToTop from './GoToTop';

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <Home />
        <Location />
        <Gallery />
        <Contact />
        <GoToTop />
      </div>
    );
  }
}

export default App;
