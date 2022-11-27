/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {extendTheme, NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import MainNav from './src/navigations/MainNav';
import {ApolloProvider} from '@apollo/client';
import {client} from './src/apollo/client';
import {AuthProvider} from './src/contexts/auth.context';
import NetInfo from '@react-native-community/netinfo';

NetInfo.addEventListener(networkState => {
  console.log('Connection type - ', networkState.type);
  console.log('Is connected? - ', networkState.isConnected);
});

const linking = {
  prefixes: ['https://pips.da.gov.ph', 'pips://'],
  config: {
    screens: {
      Projects: 'pips',
      Settings: 'settings',
      NotFound: '*',
    },
  },
};

const colorsTheme = {
  brand: {
    900: '#F7931E',
  },
};

const theme = extendTheme({colors: colorsTheme});

const App = () => {
  const hideSplashScreen = () => RNBootSplash.hide();

  const [isOffline, setOfflineStatus] = useState(false);

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      const offline = !(state.isConnected && state.isInternetReachable);
      setOfflineStatus(offline);
    });

    return () => removeNetInfoSubscription();
  }, []);

  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <NativeBaseProvider theme={theme}>
          <NavigationContainer onReady={hideSplashScreen} linking={linking}>
            <MainNav />
          </NavigationContainer>
        </NativeBaseProvider>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;
