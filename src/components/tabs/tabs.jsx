import cn from './tabs.module.css';

export const Tabs = ({ items, selectItem, selectedId }) => {
  return (
    <div className={cn.tabs}>
      {items.map((item) => {
        return (
          <div
            className={cn.tab}
            style={{
              background: selectedId === item.id && 'gray',
            }}
            key={item.id}
            onClick={() => selectItem(item.id)}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};
