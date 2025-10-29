import { Outlet } from 'react-router';
import { Header } from '../header/header';
import cn from './layout.module.css';
export const Layout = () => {
  return (
    <div className={cn.layout}>
      <Header />
      <div className={cn.content}>{<Outlet />}</div>
      <footer>FOOTER</footer>
    </div>
  );
};
