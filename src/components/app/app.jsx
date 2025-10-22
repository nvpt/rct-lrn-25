import { Layout } from '../layout/layout';
import { RestaurantsPage } from '../restaurants-page/restaurants-page';
import '../../index.css';
import { ThemeProvider } from '../../providers/theme-provider/theme-provider';
import { AuthProvider } from '../../providers/auth-provider/auth-provider';

export const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Layout>
          <RestaurantsPage title='Рестораны' />
        </Layout>
      </ThemeProvider>
    </AuthProvider>
  );
};
