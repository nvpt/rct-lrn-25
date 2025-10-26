import { Layout } from '../layout/layout';
import { RestaurantsPage } from '../restaurants-page/restaurants-page';
import '../../styles/variables.css';
import '../../styles/index.css';
import { ThemeProvider } from '../../providers/theme-provider/theme-provider';
import { AuthProvider } from '../../providers/auth-provider/auth-provider';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { BrowserRouter, Route, Routes } from 'react-router';
import { HomeLayout } from '../../layouts/home-layout';

export const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<HomeLayout />} />
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
