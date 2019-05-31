import React from 'react';
import theme from '../theme';
import styled from 'styled-components';

export const Container = styled.View`
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.padding}px;
  background: ${props => props.bgColor};

  justify-content: ${props => props.jc};
  align-items: ${props => props.ai};
`;

const ContainerElement = (props) => (
  <Container {...props}>
    {props.children}
  </Container>
);

ContainerElement.defaultProps = {
  width: '100%',
  height: '100%',
  padding: 10,
  bgColor: theme.white,
  jc: 'flex-start',
  ai: 'stretch',
}

export default ContainerElement;