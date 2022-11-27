import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomNav from './BottomNav';
import LoginNav from './LoginNav';
import {useAuth} from '../contexts/auth.context';
import LoadingScreen from '../screens/LoadingScreen';
import { TransitionPresets } from "@react-navigation/stack";
import SearchScreen from "../screens/SearchScreen";
import NotFoundScreen from "../screens/NotFoundScreen";

const Stack = createNativeStackNavigator();

const MainNav = () => {
  const {isAuthenticated, isLoading} = useAuth();

  if (isLoading) return <LoadingScreen />;

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <>
          <Stack.Screen
            name="Bottom"
            component={BottomNav}
            options={{
              headerShown: false,
              headerBackVisible: false,
            }}
          />
          <Stack.Screen name='Search' options={{
            presentation: 'modal',
            headerShown: false,
            ...TransitionPresets.BottomSheetAndroid
          }} component={SearchScreen} />
        </>
      ) : (
        <Stack.Screen
          name="LoginNav"
          component={LoginNav}
          options={{
            headerShown: false,
          }}
        />
      )}
      <Stack.Screen name='NotFound' component={NotFoundScreen} options={{
        headerShown: false
      }} />
    </Stack.Navigator>
  );
}

export default MainNav
