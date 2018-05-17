import React, { Component } from 'react';
import './App.css';
import Choice from './components/Choice';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Choice />
      </Container>
    );
  }
}

export default App;
