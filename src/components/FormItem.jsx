import {Box} from 'native-base';
import React from 'react';
import {Colors} from '../constants/colors';

export default function FormItem({children}) {
  return (
    <Box p={2} bg={Colors.white}>
      {children}
    </Box>
  );
}
