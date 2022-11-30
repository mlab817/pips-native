import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  PropsWithChildren,
} from 'react';
import {Toast} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../utils/api';

export type CurrentUser = {
  first_name: string;
  last_name: string;
  position: string;
  contact_number: string;
};

type TypeAuthContext = {
  isAuthenticated: boolean;
  updateAuthenticatedState: (bool: boolean) => void;
  isLoading: boolean;
  updateLoadingState: (bool: boolean) => void;
  currentUser: CurrentUser | null;
  setCurrentUser: (user: CurrentUser) => void;
  logout: () => void;
};

const AuthContext = createContext<TypeAuthContext | null>(null);

export const AuthProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const updateLoadingState = (bool: boolean) => setIsLoading(bool);

  const updateAuthenticatedState = (bool: boolean) => setIsLoading(bool);

  const validateToken = async () => {
    try {
      const response = await api.get('/auth/me');

      setCurrentUser(response.data.user);

      return true;
    } catch (err) {
      // remove token from local storage
      await AsyncStorage.clear();

      // setIsAuthenticated to false
      return false;
    }
  };

  const getTokenFromAsyncStorage = useCallback(async () => {
    setIsLoading(true);
    try {
      const token = await AsyncStorage.getItem('TOKEN');

      const success = await validateToken();

      if (success) {
        setIsAuthenticated(!!token);
        setIsLoading(false);
      } else {
        throw new Error('Token validation failed.');
      }
    } catch (err) {
      Toast.show({
        title: 'Unauthenticated',
      });
      await AsyncStorage.clear();
      setIsAuthenticated(false);
      setIsLoading(false);
    }
  }, []);

  const logout = async () => {
    setIsLoading(true);
    try {
      await AsyncStorage.clear();
      setIsAuthenticated(false);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTokenFromAsyncStorage();
  }, [getTokenFromAsyncStorage]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        updateAuthenticatedState,
        isLoading,
        updateLoadingState,
        currentUser,
        setCurrentUser,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
