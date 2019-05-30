import styled from 'styled-components';
import theme from '../../theme';

export const LoginForm = styled.View`
  padding: 5px;
  /* background: ${props => props.theme.primaryLighten}; */
  width: 70%;
  height: 25%;
  min-height: 150px;
  border-radius: 1px;
  box-shadow: 15px 15px 10px #000;

  flex-direction:column;
  justify-content: space-around;
`;