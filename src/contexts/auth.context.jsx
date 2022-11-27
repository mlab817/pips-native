import React, {createContext, useContext, useState, useEffect} from 'react';
import {Toast} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../utils/api";

const AuthContext = createContext({
  isAuthenticated: false,
  isLoading: false,
});

export const AuthProvider = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const [currentUser, setCurrentUser] = useState(null)

  const [isLoading, setIsLoading] = useState(false);
  
  const validateToken = async (token) => {
    console.log('token: ', token)
    try {
      console.log('validating token')
      const response = await api.get('/auth/me')
      
      console.log('me response: ', response)
      
      setCurrentUser(response.data.user)
      
      return true
    } catch (err) {
      // remove token from local storage
      await AsyncStorage.clear()
      
      // setIsAuthenticated to false
      return false
    }
  }

  const getTokenFromAsyncStorage = async () => {
    setIsLoading(true);
    try {
      const token = await AsyncStorage.getItem('TOKEN');
      
      const success = await validateToken(token)
      
      console.log('success: ', success)

      if (success) {
        setIsAuthenticated(!!token);
        setIsLoading(false);
      } else {
        throw new Error('Token validation failed.');
      }
    } catch (err) {
      Toast.show('Unauthenticated');
      await AsyncStorage.clear()
      setIsAuthenticated(false);
      setIsLoading(false);
    }
  };
  
  const logout = async () => {
    setIsLoading(true)
    try {
      await AsyncStorage.clear()
      setIsAuthenticated(false)
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getTokenFromAsyncStorage();
  }, []);

  const value = {isAuthenticated, setIsAuthenticated, isLoading, currentUser, setCurrentUser, logout};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
