import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Container, Label } from '../../elements';
import theme from '../../theme';

class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar backgroundColor={theme.black} />
        <Label>Home</Label>
      </Container>
    )
  }
}


export default Home;