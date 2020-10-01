import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      title: 'Richard Biala',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'},
      ],
      home: {
        title: 'Fight for the Future',
        subTitle: 'Project Created',
        text: 'Checkout my projects below'
      },
      about: {
        title: 'About Me',
        
      },
      contact: {
        title: 'Contact Me',
        
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className ="border-bottom">
            <Navbar.Brand>
              Richard Biala
            </Navbar.Brand>
          </Navbar>


        </Container>
      </Router>
    );
  }
  
}

export default App;
