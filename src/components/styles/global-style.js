import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  ${'' /* put your global css here */}
  body {
    color: ${({ theme }) => theme.colors.fontColor}
  }
  h1{

    font-family: 'Staatliches', cursive;
    font-weight: 400;

  }
  p{

  }
`
