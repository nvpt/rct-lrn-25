import { Button } from '../button/button';
import cn from './tabs.module.css';

export const Tabs = ({ items, selectItem, selectedId }) => {
  return (
    <div className={cn.tabs}>
      {items.map((item) => {
        return (
          <Button
            className={cn.tab}
            key={item.id}
            onClick={() => selectItem(item.id)}
            title={item.name}
            isActive={selectedId === item.id}
          />
        );
      })}
    </div>
  );
};
