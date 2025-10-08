import { Layout } from '../layout/layout';
import { RestaurantsPage } from '../restaurants-page/restaurants-page';
import '../../index.css';

export const App = () => {
  return (
    <Layout>
      <RestaurantsPage title='Рестораны' />
    </Layout>
  );
};
