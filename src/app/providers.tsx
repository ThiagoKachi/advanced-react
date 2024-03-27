'use client';

import GlobalStyles from '@/styles/global';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
