import React from 'react';
import {Text} from 'native-base';
import {Colors} from '../constants/colors';

export default function FormLabel({label}) {
  return (
    <Text fontSize={10} color={Colors.gray}>
      {label}
    </Text>
  );
}
