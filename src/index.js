import React, { Component } from 'react';
import { View } from 'react-native';
import theme from './theme';
import Routes from './routes';
import { ThemeProvider } from 'styled-components';

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