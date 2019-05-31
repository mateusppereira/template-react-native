import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components';
import theme from '../theme';

const Button = styled.TouchableOpacity`
  width: ${props => props.width};
  padding: ${props => props.padding}px;
  background: ${props => props.background};

  border-radius: 500px;

  flex-direction: row;
  justify-content: center;
`;

const ButtonElement = (props) => (
  <Button {...props} onPress={props.onPress}>
    {props.loading
    ? <ActivityIndicator />
    : props.children }
  </Button>
);

ButtonElement.defaultProps = {
  width: '100%',
  padding: 5,
  background: theme.primary,
  color: theme.secondary
}

export default ButtonElement;