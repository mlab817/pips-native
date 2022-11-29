/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {extendTheme, NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import MainNav from './src/navigations/MainNav';
import {ApolloProvider} from '@apollo/client';
import {client} from './src/apollo/client';
import {AuthProvider} from './src/contexts/auth.context';

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

const customTheme = extendTheme({colors: colorsTheme});

type CustomThemeType = typeof customTheme;

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}

const App: React.FC = () => {
  const hideSplashScreen = () => RNBootSplash.hide();

  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <NativeBaseProvider theme={customTheme}>
          <NavigationContainer onReady={hideSplashScreen} linking={linking}>
            <MainNav />
          </NavigationContainer>
        </NativeBaseProvider>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;
