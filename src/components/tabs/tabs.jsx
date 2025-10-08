export const Tabs = ({ items, selectItem, selectedId }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        overflow: 'auto',
        justifyContent: 'stretch',
        gap: '16px',
      }}
    >
      {items.map((item) => {
        return (
          <div
            style={{
              display: 'flex',
              flex: '1',
              border: '1px solid',
              padding: '16px 30px',
              justifyContent: 'center',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              background: selectedId === item.id ? 'gray' : 'none',
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
