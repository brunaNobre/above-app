import '@emotion/react';

import { theme } from 'src/design/theme';

export const styledTheme = {
  ...theme,
};

export type StyledThemeType = typeof styledTheme;

declare module '@emotion/react' {
  export interface Theme extends StyledThemeType {} // eslint-disable-line
}
