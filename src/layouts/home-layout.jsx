import { useContext } from 'react';
import { HomePage } from '../pages/home-page';
import { ThemeContext } from '../providers/theme-provider';

export const HomeLayout = () => {
  const { theme } = useContext(ThemeContext);

  return <HomePage theme={theme} />;
};
