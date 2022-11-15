import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import LoginScreen from '../screens/LoginScreen';
import {TransitionPresets} from '@react-navigation/stack';
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
            // headerShown: false,
            headerTitle: 'Forgot Password',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: Colors.white,
            },
            headerStyle: {
              backgroundColor: Colors.secondary,
            },

            headerTintColor: Colors.white,
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
