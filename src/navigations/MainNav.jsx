import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomNav from './BottomNav';
import LoginNav from './LoginNav';
import {useAuth} from '../contexts/auth.context';

const Stack = createNativeStackNavigator();

export default function MainNav() {
  const {isAuthenticated} = useAuth();

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <Stack.Screen
          name="Bottom"
          component={BottomNav}
          options={{
            headerShown: false,
            headerBackVisible: false,
          }}
        />
      ) : (
        <Stack.Screen
          name="LoginNav"
          component={LoginNav}
          options={{
            headerShown: false,
          }}
        />
      )}
    </Stack.Navigator>
  );
}
