import React from 'react';
import {Box, HStack, Pressable, Text} from 'native-base';
import {SectionTitle} from '../../screens/NewProjectScreen';
import {Colors} from '../../constants/colors';
import MultiSelect from '../MultiSelect';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {options} from '../../constants/options';

export default function ImplementingUnits({navigation}) {
  return (
    <>
      <SectionTitle title="Implementing Units" />

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color="#999999">
          IMPLEMENTING UNITS
        </Text>

        <Pressable
          onPress={() =>
            navigation.navigate('SelectMultiple', {
              header: 'Implementing Units',
              options: options.operating_units,
              selectedValue: 1,
            })
          }>
          <Box py={2} borderBottomColor={Colors.gray} borderBottomWidth={0.3}>
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontSize={12} fontWeight="bold">
                Implementing Units
              </Text>
              <MaterialIcons name="keyboard-arrow-down" size={14} />
            </HStack>
          </Box>
        </Pressable>
      </Box>
    </>
  );
}
