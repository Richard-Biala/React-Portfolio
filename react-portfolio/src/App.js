import React from 'react';
import './App.css';

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
      <div>Hello from React</div>
    );
  }
  
}

export default App;
