import { Layout } from '../layout/layout';
import { RestaurantsPage } from '../restaurants-page/restaurants-page';
import '../../index.css';
import { ThemeProvider } from '../../providers/theme-provider/theme-provider';

export const App = () => {
  return (
    <ThemeProvider>
      <Layout>
        <RestaurantsPage title='Рестораны' />
      </Layout>
    </ThemeProvider>
  );
};
