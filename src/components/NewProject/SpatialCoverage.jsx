import React from 'react';
import {Box, HStack, Select, Pressable, Text} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {SectionTitle} from '../../screens/NewProjectScreen';
import {Colors} from '../../constants/colors';
import {options} from '../../constants/options';

export default function SpatialCoverage({navigation}) {
  return (
    <>
      <SectionTitle title="Spatial Coverage" />

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color="#999999">
          SPATIAL COVERAGE
        </Text>

        <Pressable
          onPress={() =>
            navigation.navigate('Select', {
              header: 'Implementing Units',
              options: options.spatial_coverages,
              selectedValue: 1,
            })
          }>
          <Box py={2} borderBottomColor={Colors.gray} borderBottomWidth={0.3}>
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontSize={12} fontWeight="bold">
                Spatial Coverage
              </Text>
              <MaterialIcons name="keyboard-arrow-down" size={14} />
            </HStack>
          </Box>
        </Pressable>
      </Box>

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color="#999999">
          LOCATIONS
        </Text>

        <Pressable
          onPress={() =>
            navigation.navigate('SelectMultiple', {
              header: 'Implementing Units',
              options: options.locations,
              selectedValue: 1,
            })
          }>
          <Box py={2} borderBottomColor={Colors.gray} borderBottomWidth={0.3}>
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontSize={12} fontWeight="bold">
                Regions/Provinces
              </Text>
              <MaterialIcons name="keyboard-arrow-down" size={14} />
            </HStack>
          </Box>
        </Pressable>
      </Box>
    </>
  );
}
