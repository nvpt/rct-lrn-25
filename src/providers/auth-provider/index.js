import { createContext } from 'react';

export const initialAuthContext = {
  user: null,
  changeAuthorize: () => {},
};

export const AuthContext = createContext(initialAuthContext);
