import React, { Component } from 'react';
import theme from '../theme'
import styled from 'styled-components';

const TextInput = styled.TextInput`
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.padding}px;
  background: ${props => props.background};

  border-radius: 2px;
`;

const TextInputElement = (props) => (
    <TextInput {...props} onPress={props.onPress}>
      {props.children}
    </TextInput>
)

TextInputElement.defaultProps = {
  width: '100%',
  height: '30px',
  padding: 5,
  background: theme.white
}

export default TextInputElement;