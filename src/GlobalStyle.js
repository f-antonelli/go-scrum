import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root{
  --black: #111;
  --white: #FFF;
  --primary: #FF452B;
  --light-orange: #FF6D5A;
  --dark-orange: #CB3E2B;
  --darkest-orange: #63302B;
}
`
