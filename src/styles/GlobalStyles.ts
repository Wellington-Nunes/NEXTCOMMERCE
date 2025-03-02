import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Reset básico */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Define 1rem = 10px */
    html {
    font-size: 62.5%;
  }

  /* Estilos globais */
  body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    background-color: ${({ theme }) => theme.colors.background_deep_00};
    color: ${({ theme }) => theme.colors.primary_text};
  }

  /* Links */
  a {
    color: ${({ theme }) => theme.colors.primary_default};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default GlobalStyles;
