import { createContext } from 'react';

export const THEME_MAP = {
  gray: 'gray',
  green: 'green',
  blue: 'blue',
};

export const THEME_OPTIONS = Object.values(THEME_MAP);

export const initialThemeContextValue = {
  theme: THEME_MAP.gray,
  changeTheme: () => {},
};
export const ThemeContext = createContext(initialThemeContextValue);
