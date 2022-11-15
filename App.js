/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';

import LoginScreen from './src/screens/LoginScreen';
import RNBootSplash from 'react-native-bootsplash';
import BottomNav from './src/navigations/BottomNav';
import SpInAppUpdates, {
  UPDATE_TYPE,
  NeedsUpdateResponseAndroid,
  SemverVersion,
  NeedsUpdateResponse,
  IncomingStatusUpdateEvent,
} from 'sp-react-native-in-app-updates';
import {getVersion} from 'react-native-device-info';
import {AuthProvider, useAuth} from './src/contexts/auth.context';
import LoginNav from './src/navigations/LoginNav';
import MainNav from './src/navigations/MainNav';

const App = () => {
  const hideSplashScreen = () => RNBootSplash.hide();

  return (
    <AuthProvider>
      <NativeBaseProvider>
        <NavigationContainer onReady={hideSplashScreen}>
          <MainNav />
        </NavigationContainer>
      </NativeBaseProvider>
    </AuthProvider>
  );
};

export default App;
