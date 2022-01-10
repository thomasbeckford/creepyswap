import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Baloo2-Regular';
  src: url('fonts/Baloo2-Regular.ttf');
}
@font-face {
  font-family: 'Baloo2-Bold';
  src: url('fonts/Baloo2-Bold.ttf');
}
@font-face {
  font-family: 'Baloo2-Medium';
  src: url('fonts/Baloo2-Medium.ttf');
}
@font-face {
  font-family: 'Baloo2-SemiBold';
  src: url('fonts/Baloo2-SemiBold.ttf');
}
@font-face {
  font-family: 'Baloo2-ExtraBold';
  src: url('fonts/Baloo2-ExtraBold.ttf');
}

  html,
  body {
    background: ${({ theme }) => theme.colors.appBackground};
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
    font-family: 'Baloo2-Medium', sans-serif; 
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }


  p,
  label {
    line-height: 1.5em;
  }

  button, div, input, select {
    font-size: inherit;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 20px;
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #666; 
    border-radius: 8px;
  }
  
`
