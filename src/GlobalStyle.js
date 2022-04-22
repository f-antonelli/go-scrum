import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }

  :root{
    --black: #111;
    --grey: #D3D3D3;
    --white: #FFF;
    --primary: #FF452B;
    --light-orange: #FF6D5A;
    --dark-orange: #CB3E2B;
    --darkest-orange: #63302B;
  }
`
