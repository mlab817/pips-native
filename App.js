/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
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
import SpInAppUpdates, {
  UPDATE_TYPE,
  NeedsUpdateResponseAndroid,
  SemverVersion,
  NeedsUpdateResponse,
  IncomingStatusUpdateEvent,
} from 'sp-react-native-in-app-updates';
import {getVersion} from 'react-native-device-info';
import {AuthProvider} from './src/contexts/auth.context';

console.log('curVersion: ', getVersion());

const Stack = createNativeStackNavigator();

const App = () => {
  const [state, setState] = useState({
    needsUpdate: false,
    otherData: null,
  });

  const onPress = () => {
    console.log('keyboard dismiss initiated');
    Keyboard.dismiss();
  };

  const checkForUpdates = () => {
    try {
      const inAppUpdates = new SpInAppUpdates(false);

      inAppUpdates
        .checkNeedsUpdate({
          curVersion: getVersion(),
          toSemverConverter: ver => {
            // i.e if 400401 is the Android version, and we want to convert it to 4.4.1
            const androidVersionNo = parseInt(ver, 10);
            const majorVer = Math.trunc(androidVersionNo / 10000);
            const minorVerStarter = androidVersionNo - majorVer * 10000;
            const minorVer = Math.trunc(minorVerStarter / 100);
            const patchVersion = Math.trunc(minorVerStarter - minorVer * 100);
            return `${majorVer}.${minorVer}.${patchVersion}`;
          },
        })
        .then(result => {
          setState(
            {
              needsUpdate: result.shouldUpdate,
              otherData: result,
            },
            () => {
              alert('we dont need to update');
            },
          );
        })
        .catch(err => console.log('check needs update error ', err));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    checkForUpdates();
  }, []);

  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <NativeBaseProvider>
        <StatusBar hidden />
        <AuthProvider>
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
        </AuthProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
