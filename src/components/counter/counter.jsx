import { useState } from 'react';

export const Counter = () => {
  const [value, setValue] = useState(1);
  const increment = () => {
    setValue(value + 1);
    console.log('counter.jsx 7 >>>', 'value:', value);
  };
  const decrement = () => {
    setValue(value + 1);
    console.log('counter.jsx 11 >>>', 'value:', value);
  };
  return (
    <div>
      <button type='button' onClick={increment}>
        +
      </button>
      <span>{value}</span>
      <button type='button' onClick={increment}>
        -
      </button>
    </div>
  );
};
