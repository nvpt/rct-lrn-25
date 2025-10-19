import { Header } from '../header/header';
import cn from './layout.module.css';
export const Layout = ({ children }) => {
  return (
    <div className={cn.layout}>
      <Header />
      <div className={cn.content}>{children}</div>
      <footer>FOOTER</footer>
    </div>
  );
};
