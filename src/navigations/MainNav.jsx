import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import BottomNav from './BottomNav';
import LoginNav from './LoginNav';
import {useAuth} from '../contexts/auth.context';
import LoadingScreen from '../screens/LoadingScreen';
import SearchScreen from '../screens/SearchScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// type RootStackParamList = {
//   Home: undefined;
//   Bottom: undefined;
//   Projects: undefined;
//   Project: {uuid: string};
//   Pdf: {uuid: string};
//   Profile: undefined;
//   About: undefined;
//   Search: undefined;
//   LoginNav: undefined;
//   NotFound: undefined;
// };
//
// const Stack = createStackNavigator<RootStackParamList>();

const Stack = createNativeStackNavigator()

const MainNav = () => {
  const {isAuthenticated, isLoading} = useAuth();

  if (isLoading) {
    return <LoadingScreen />;
  }

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
          <Stack.Screen
            name="Search"
            options={{
              presentation: 'modal',
              headerShown: false,
              ...TransitionPresets.BottomSheetAndroid,
            }}
            component={SearchScreen}
          />
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
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNav;
