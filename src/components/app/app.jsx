import { Layout } from '../layout/layout';
import { RestaurantsPage } from '../../pages/restaurants-page/restaurants-page';
import '../../styles/variables.css';
import '../../styles/index.css';
import { ThemeProvider } from '../../providers/theme-provider/theme-provider';
import { AuthProvider } from '../../providers/auth-provider/auth-provider';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { RestaurantsLayout } from '../../layouts/restaurants-layout/restaurants-layout';
import { HomePage } from '../../pages/home-page/home-page';
import { RestaurantPage } from '../../pages/restaurant-page/restaurant-page';
import { Menu } from '../restaurant/menu/menu';
import { Reviews } from '../restaurant/reviews/reviews';
import { DishPage } from '../../pages/dish-page/dish-page';
import { WrongPage } from '../wrong-page/wrong-page';
import { ErrorBoundary } from '../error-boundary/error-boundary';

export const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <AuthProvider>
          <ThemeProvider>
            <BrowserRouter>
              <Routes>
                <Route element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path='restaurants' element={<RestaurantsLayout />}>
                    <Route index element={<RestaurantsPage />} />
                    <Route path=':restaurantId' element={<RestaurantPage />}>
                      <Route index element={<Navigate to='menu' />} />
                      <Route path='menu' element={<Menu />} />
                      <Route path='reviews' element={<Reviews />} />
                    </Route>
                    <Route
                      path='*'
                      element={
                        <WrongPage
                          title='Ресторан не найден'
                          linkUrl='/restaurants'
                          linkText={'Вернуться к списку ресторанов'}
                        />
                      }
                    />
                  </Route>
                  <Route path='dish/:dishId' element={<DishPage />} />
                  <Route path='*' index element={<WrongPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </AuthProvider>
      </Provider>
    </ErrorBoundary>
  );
};
