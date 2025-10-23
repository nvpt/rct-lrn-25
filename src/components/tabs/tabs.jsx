import cn from './tabs.module.css';

export const Tabs = ({ children }) => {
  return <div className={cn.tabs}>{children}</div>;
};
