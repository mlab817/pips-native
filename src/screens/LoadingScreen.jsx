import React from 'react';
import {Center} from 'native-base';
import {ActivityIndicator} from 'react-native';
import {Colors} from '../constants/colors';

export default function LoadingScreen() {
  return (
    <Center flex={1}>
      <ActivityIndicator color={Colors.secondary} />
    </Center>
  );
}
