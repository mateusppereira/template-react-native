import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Button, Container, Label, LinkButton, TextInput } from '../../elements';
import theme from '../../theme';
import { LoginForm } from './styles';

class Login extends Component {
  state = {
    credentials: {
      login: '',
      password: ''
    },
    loading: false,
  }

  doLogin = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
      this.props.navigation.navigate('PrivateRoutes')
    }, 1000)
  }

  render() {
    return (
      <Container bgColor={theme.primary} jc="center" ai="center">
        <StatusBar backgroundColor={theme.primary} />
        <Label fontSize={28} padding={5} color={theme.dark}>Login</Label>
        <LoginForm>
          <TextInput
            placeholder="Login"
            value={this.state.credentials.login}
            onChangeText={text => this.setState({ credentials: { login: text } })}
          />
          <TextInput
            secureTextEntry
            placeholder="Senha"
            value={this.state.credentials.password}
            onChangeText={text => this.setState({ credentials: { password: text } })}
          />
          <Button background={theme.primaryLighten} onPress={this.doLogin} loading={this.state.loading}>
            <Label color={theme.dark}>Logar</Label>
          </Button>
          <LinkButton text="Cadastrar-se" onPress={() => this.props.navigation.navigate('SignUp')} />
        </LoginForm>
      </Container>
    );
  }
}

export default Login