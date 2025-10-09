import { Counter } from '../../counter/counter';

export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Меню</h3>
      <div>
        {menu.length ? (
          menu.map((dish) => {
            return (
              <div
                key={dish.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '15px',
                }}
              >
                <Counter />
                <div key={dish.id}>{dish.name}</div>
              </div>
            );
          })
        ) : (
          <div>Не указано</div>
        )}
      </div>
    </div>
  );
};
