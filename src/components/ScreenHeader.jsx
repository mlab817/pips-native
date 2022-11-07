import React from 'react';
import {Box, Heading} from 'native-base';
import {Colors} from '../constants/colors';

export default function ScreenHeader({title}) {
  return (
    <Box bg={Colors.secondary} pt={10} pb={3}>
      <Heading mx={2} color={Colors.white} shadow={2}>
        {title}
      </Heading>
    </Box>
  );
}
