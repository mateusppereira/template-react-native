import React, { Component } from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import theme from './theme';

class App extends Component {

  render() {
    return (
      <View style={{ height: '100%' }}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </View>
    );
  }
}

export default App