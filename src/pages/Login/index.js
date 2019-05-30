import React, { Component } from 'react';
import { Button, Container, Label, LinkButton, TextInput } from '../../elements';
import theme from '../../theme';
import { LoginForm } from './styles';

class Login extends Component {
  state = {
    login: '',
    password: ''
  }

  doLogin = () => {
    console.log(this.state.login, this.state.password)
  }

  render() {
    return (
      <Container bgColor={theme.primary} jc="center" ai="center">
        <Label fontSize={28} padding={5} color={theme.dark}>Login</Label>
        <LoginForm>
          <TextInput placeholder="Login" value={this.state.login} onChangeText={text => this.setState({ login: text })} />
          <TextInput placeholder="Senha" value={this.state.password} onChangeText={text => this.setState({ password: text })} />
          <Button background={theme.primaryLighten} onPress={this.doLogin}>
            <Label color={theme.dark}>Logar</Label>
          </Button>
          <LinkButton text="Cadastrar-se" onPress={() => this.props.navigation.navigate('SignUp')} />
        </LoginForm>
      </Container>
    );
  }
}

export default Login