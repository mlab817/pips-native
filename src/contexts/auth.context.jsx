import {createContext, useContext, useState} from 'react';

const AuthContext = createContext({
  isAuthenticated: false,
  currentUser: null,
  login: () => {},
  updateProfile: () => {},
});

export const AuthProvider = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [currentUser, setCurrentUser] = useState(null);

  const login = async () => {
    try {
      setIsAuthenticated(true);
      setCurrentUser({
        username: 'pip_user',
        first_name: 'PIP',
        last_name: 'User',
        position: 'PIP User',
        contact_number: '1234',
      });
    } catch (err) {
      console.error(err);
    }
  };

  const updateProfile = async payload => {
    try {
      setCurrentUser(payload);
    } catch (err) {
      console.error(err);
    }
  };

  const value = {isAuthenticated, currentUser, login, updateProfile};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
