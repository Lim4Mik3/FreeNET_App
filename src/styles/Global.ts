import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --red-chill: #F51720;
    --gold: #F8D210;
    --pink: #FA26A0;
    --white: #fafafa;
    --black: #121211;
    --title: #212121;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    html {
      font-size: 93.75%;
    }
  }

  @media screen and (max-width: 767px) {
    html {
      font-size: 87.5%;
    }
  }

  html, body, #root {
    height: 100%
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--white);
  }

  h1, h2, h3, h4, h5, h6, span, strong, p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
  }

  button, input {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
