import {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Keychain from 'react-native-keychain';
import api from '../utils/api';

const AuthContext = createContext({
  isAuthenticated: false,
  currentUser: null,
  setCurrentUser: () => {},
  login: () => {},
  updateProfile: () => {},
  setIsAuthenticated: () => {},
});

export const AuthProvider = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchTokenFromStorage = async () => {
      const token = await AsyncStorage.getItem('TOKEN');

      if (token) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    };

    fetchTokenFromStorage();
  }, []);

  const login = async payload => {
    try {
      const response = await api.post('/auth/login', payload);

      const {access_token, user} = response.data;

      console.log('login response: ', response);

      await AsyncStorage.setItem('TOKEN', access_token);

      setIsAuthenticated(true);

      setCurrentUser(user);
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

  const savePasswordInKeychain = async payload => {
    try {
      const result = await Keychain.setGenericPassword(
        payload.username,
        payload.password,
      );

      console.log('savePasswordInKeychain: ', result);
    } catch (err) {
      console.error(err);
    }
  };

  const value = {
    isAuthenticated,
    currentUser,
    setCurrentUser,
    login,
    updateProfile,
    setIsAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
