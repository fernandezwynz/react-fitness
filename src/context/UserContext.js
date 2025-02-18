import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ id: null });

  const unsetUser = () => {
    localStorage.clear();
    setUser({ id: null });
  };

  return (
    <UserContext.Provider value={{ user, setUser, unsetUser }}>
      {children}
    </UserContext.Provider>
  );
};