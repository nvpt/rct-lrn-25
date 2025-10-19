import { createContext } from 'react';

export const THEME_CONTEXT_LIST = {
  gray: 'gray',
  green: 'green',
  blue: 'blue',
};

export const initialThemeContextValue = {
  theme: THEME_CONTEXT_LIST.gray,
  changeTheme: () => {},
};
export const ThemeContext = createContext(initialThemeContextValue);
