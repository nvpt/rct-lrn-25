import classNames from 'classnames';
import { Button } from '../button/button';
import cn from './tabs.module.css';

export const Tabs = ({ items, selectItem, selectedId }) => {
  return (
    <div className={cn.tabs}>
      {items.map((item) => {
        return (
          <Button
            className={classNames(cn.tab, {
              active: selectedId === item.id,
            })}
            key={item.id}
            onClick={() => selectItem(item.id)}
            title={item.name}
          />
        );
      })}
    </div>
  );
};
