import React from 'react';
import { Global } from '@emotion/react';

export function GlobalStyle(): React.ReactElement {
  return (
    <Global
      styles={`
html {
  font-size: 87.5%;
  /* 87.5% of 16px = 14px */
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-transform: none;
}


a {
  text-decoration: none;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`}
    />
  );
}
