import React, { createContext, useState, useContext } from 'react';

const UsernameContext = createContext();

export function useUsername() {
  return useContext(UsernameContext);
}

export function UsernameProvider({ children }) {
  const [usernames, setUsernames] = useState([]);

  const addUsername = (username) => {
    setUsernames([...usernames, username]);
  };

  const removeUsername = (username) => {
    setUsernames(usernames.filter(name => name !== username));
  };

  return (
    <UsernameContext.Provider value={{ usernames, addUsername, removeUsername }}>
      {children}
    </UsernameContext.Provider>
  );
}
