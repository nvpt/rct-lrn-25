import { useCallback, useState } from 'react';
import { initialThemeContextValue, ThemeContext } from '.';
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialThemeContextValue.theme);

  const changeTheme = useCallback((theme) => {
    setTheme(theme);
  }, []);
  return (
    <ThemeContext value={{ ...initialThemeContextValue, theme, changeTheme }}>
      {children}
    </ThemeContext>
  );
};
