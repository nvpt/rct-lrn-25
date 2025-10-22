import { useCallback, useState } from 'react';
import { AuthContext, initialAuthContext } from '.';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(initialAuthContext.user);
  const changeAuthorize = useCallback((user) => {
    setUser(user);
  }, []);
  return (
    <AuthContext value={{ ...initialAuthContext, user, changeAuthorize }}>
      {children}
    </AuthContext>
  );
};
