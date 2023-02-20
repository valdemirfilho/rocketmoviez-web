import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* Firefox */
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.PINK_SALMON_100} ${({ theme }) => theme.DARK_GRAY};
  }
  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.DARK_GRAY};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.PINK_SALMON_100};
    border-radius: 10px;
    border: 3px solid ${({ theme }) => theme.DARK_GRAY};
  }

  ::selection {
    background-color: ${({ theme }) => theme.PINK_SALMON_100};
    color: ${({ theme }) => theme.DARK_GRAY};
  }

  body {
    background-color: ${({ theme }) => theme.DARK_GRAY};
    color: ${({ theme }) => theme.WHITE}; 
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
   font-family: "Roboto Slab", serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.7);
  }

  button {
    appearance: none;
  }

  /* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
`

// font-family: "Roboto", sans-serif;
