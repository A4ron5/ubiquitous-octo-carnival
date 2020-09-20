import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

import { variables } from "ui/global/variables";

export const GlobalStyles = createGlobalStyle`
  ${normalize};
  
  html {
    ${variables};
  }  
  
  body {
    font-size: 14px;
    font-family: "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    color: var(--color-font-primary);
    box-sizing: border-box;
    background: var(--color-background-primary);
  }
`;
