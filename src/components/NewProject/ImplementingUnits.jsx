import React from 'react';
import {Box, Text} from 'native-base';
import {SectionTitle} from '../../screens/NewProjectScreen';
import {Colors} from '../../constants/colors';
import MultiSelect from '../MultiSelect';

export default function ImplementingUnits() {
  return (
    <>
      <SectionTitle title="Implementing Units" />

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color="#999999">
          MAIN PDP CHAPTER
        </Text>

        <MultiSelect title="Implementing Units" mt={1} items={[]} />
      </Box>
    </>
  );
}
