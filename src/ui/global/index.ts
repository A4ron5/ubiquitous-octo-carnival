import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

import { variables } from "ui/global/variables";

export const GlobalStyles = createGlobalStyle`
  ${normalize};
  
  html {
    ${variables};
    
    height: 100vh;
  }
  
  * {
    box-sizing: border-box;
  }
  
  body {
    font-size: 16px;
    font-family: "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    color: var(--color-font-primary);
    background: var(--color-background);
  }
`;
