import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';
import theme from '../theme'

const LinkButton = styled.TouchableOpacity`
  padding: ${props => props.padding}px;
  color: ${props => props.color};
  align-self: ${props => props.alignSelf};
`;

const LinkButtonElement = (props) => (
  <LinkButton {...props}>
    <Text style={{ textDecorationLine: 'underline' }}>{props.text}</Text>
  </LinkButton>
);

LinkButtonElement.defaultProps = {
  padding: 5,
  color: theme.secondary,
  alignSelf: "center"
}

export default LinkButtonElement;