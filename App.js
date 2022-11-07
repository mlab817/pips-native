/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Header,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import {NativeBaseProvider, View} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';

import LoginScreen from './src/screens/LoginScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RNBootSplash from 'react-native-bootsplash';
import BottomNav from './src/navigations/BottomNav';
import {} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

const App = () => {
  const onPress = () => {
    console.log('keyboard dismiss initiated');
    Keyboard.dismiss();
  };

  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <NativeBaseProvider>
        <StatusBar hidden />

        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Bottom"
            component={BottomNav}
            options={{
              headerShown: false,
              headerBackVisible: false,
            }}
          />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
