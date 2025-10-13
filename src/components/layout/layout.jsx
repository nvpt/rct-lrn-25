import cn from './layout.module.css';
export const Layout = ({ children }) => {
  return (
    <div className={cn.layout}>
      <header>HEADER</header>
      <div className={cn.content}>{children}</div>
      <footer>FOOTER</footer>
    </div>
  );
};
