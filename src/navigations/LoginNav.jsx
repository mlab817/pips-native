import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TransitionPresets} from '@react-navigation/stack';

import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import LoginScreen from '../screens/LoginScreen';
import {Colors} from '../constants/colors';

const Stack = createStackNavigator();

export default function LoginNav() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Group presentation="modal" screenOptions={{}}>
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{
            headerTitle: 'Forgot Password',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: Colors.white,
            },
            headerStyle: {
              backgroundColor: Colors.secondary,
            },

            headerTintColor: Colors.white,
            ...TransitionPresets.ModalSlideFromBottomIOS,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
