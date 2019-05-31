import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

export const Label = styled.Text`
  font-size: ${props => props.fontSize};
  padding: ${props => props.padding}px;
  color: ${props => props.color};
  font-weight: ${props => props.bold ? 700 : 400};
`;

const LabelElement = (props) => (
  <Label {...props}>
    {props.children}
  </Label>
);

LabelElement.defaultProps = {
  fontSize: '14px',
  color: theme.black,
  padding: 2,
  bold: false
}

export default LabelElement;