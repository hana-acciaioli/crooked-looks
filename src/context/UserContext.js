import { useState, createContext, useContext } from 'react';
import { getUser } from '../services/auth.js';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser);
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('UseUserContext must be wrapped in a UserProvider');
  }
  return context;
};

export { UserProvider, useUserContext };
