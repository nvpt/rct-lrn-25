import { Layout } from '../layout/layout';
import { RestaurantsPage } from '../../pages/restaurants-page/restaurants-page';
import '../../styles/variables.css';
import '../../styles/index.css';
import { ThemeProvider } from '../../providers/theme-provider/theme-provider';
import { AuthProvider } from '../../providers/auth-provider/auth-provider';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { BrowserRouter, Route, Routes } from 'react-router';
import { RestaurantsLayout } from '../../layouts/restaurants-layout/restaurants-layout';
import { HomePage } from '../../pages/home-page/home-page';
import { RestaurantPage } from '../../pages/restaurant-page/restaurant-page';

export const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<HomePage />}></Route>
                <Route path='restaurants' element={<RestaurantsLayout />}>
                  <Route index element={<RestaurantsPage />} />
                  <Route path=':restaurantId' element={<RestaurantPage />} />
                  <Route path='*' element={<div>ресторанам не найден</div>} />
                </Route>
                <Route
                  path='*'
                  index
                  element={<div>Страница не найдена</div>}
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  );
};
