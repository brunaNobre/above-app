import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import { GlobalStyle } from './GlobalStyle';
import { styledTheme } from './styledTheme';
import { theme } from './theme';

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <EmotionThemeProvider theme={styledTheme}>
      {children}
      <GlobalStyle />
    </EmotionThemeProvider>
  </MuiThemeProvider>
);

export default ThemeProvider;
