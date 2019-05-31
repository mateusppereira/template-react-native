import styled from 'styled-components';

export const TestItem = styled.View`
  background: ${props => props.theme.white};
  padding: 10px 0;
`;

export const Separator = styled.View`
  height: 1px;
  background: ${props => props.theme.lightGray};
  width: 100%;
`;