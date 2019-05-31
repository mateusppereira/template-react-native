import React from 'react';
import styled from 'styled-components';

const Img = styled.Image`
  height: ${props => props.height};
  width: ${props => props.width};
`;

const ImgElement = (props) => (
  <Img {...props} />
);

ImgElement.defaultProps = {
  height: 25,
  width: 25,
};

export default ImgElement;