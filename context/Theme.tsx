'use client';

import { type ThemeProviderProps, ThemeProvider as NextThemesProvider } from 'next-themes';

export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
