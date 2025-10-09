import { useState } from 'react';

export const Counter = ({ min = 0, max = 5 }) => {
  const [value, setValue] = useState(min);
  const increment = () => {
    if (value < max) {
      setValue(value + 1);
    }
  };
  const decrement = () => {
    if (value > min) {
      setValue(value - 1);
    }
  };
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <button
        type='button'
        onClick={decrement}
        style={{
          cursor: 'pointer',
          width: '30px',
          height: '30px',
          fontSize: '22px',
        }}
      >
        -
      </button>
      <span>{value}</span>
      <button
        type='button'
        onClick={increment}
        style={{
          cursor: 'pointer',
          width: '30px',
          height: '30px',
          fontSize: '22px',
        }}
      >
        +
      </button>
    </div>
  );
};
