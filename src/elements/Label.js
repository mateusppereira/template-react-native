import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

export const Label = styled.Text`
  font-size: ${props => props.fontSize};
  padding: ${props => props.padding}px;
  color: ${props => props.color};
`;

const LabelElement = (props) => (
  <Label {...props}>
    {props.children}
  </Label>
);

LabelElement.defaultProps = {
  fontSize: '14px',
  color: theme.black,
  padding: 2
}

export default LabelElement;