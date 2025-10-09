export const Layout = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <header
        style={{ width: '100%', padding: '16px 30px', border: '1px solid' }}
      >
        HEADER
      </header>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          flex: '1',
          margin: '0 30px',
        }}
      >
        {children}
      </div>
      <footer
        style={{ width: '100%', padding: '16px 30px', border: '1px solid' }}
      >
        FOOTER
      </footer>
    </div>
  );
};
