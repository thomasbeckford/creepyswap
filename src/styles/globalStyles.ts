import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    background: ${({ theme }) => theme.colors.appBackground};
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
    font-family: 'Baloo2-Medium', sans-serif; 
  }
`;
