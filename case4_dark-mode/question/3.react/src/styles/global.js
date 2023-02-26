import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
}
body {
  font-family: "Open Sans";
  font-weight: 300;
  background-color: ${(props) => props.theme.bgColor}
}

`;

export default GlobalStyle;
