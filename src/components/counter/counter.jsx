export const Counter = ({ min = 0, max = 5, value, increment, decrement }) => {
  const handleDecrement = () => {
    if (value > min) {
      decrement();
    }
  };
  const handleIncrement = () => {
    if (value < max) {
      increment();
    }
  };
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <button
        type='button'
        onClick={handleDecrement}
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
        onClick={handleIncrement}
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
