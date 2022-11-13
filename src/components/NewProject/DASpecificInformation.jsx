import React from 'react';
import {Box, HStack, Pressable, Text} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {SectionTitle} from '../../screens/NewProjectScreen';
import {Colors} from '../../constants/colors';
import {options} from '../../constants/options';

export default function DASpecificInformation({navigation}) {
  return (
    <>
      <SectionTitle title="DA-Specific Information" />

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color="#999999">
          COMMODITIES
        </Text>

        <Pressable
          onPress={() =>
            navigation.navigate('SelectMultiple', {
              header: 'Commodities',
              options: options.commodities,
              selectedValue: 1,
            })
          }>
          <Box
            py={2}
            borderBottomColor={{
              color: Colors.gray,
            }}
            borderBottomWidth={0.3}>
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontSize={12} fontWeight="bold">
                Commodities
              </Text>
              <MaterialIcons name="keyboard-arrow-down" size={14} />
            </HStack>
          </Box>
        </Pressable>
      </Box>

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color="#999999">
          VALUE CHAIN SEGMENTS
        </Text>

        <Pressable
          onPress={() =>
            navigation.navigate('SelectMultiple', {
              header: 'Value Chain Segments',
              options: options.vc_segments,
              selectedValue: 1,
            })
          }>
          <Box
            py={2}
            borderBottomColor={{
              color: Colors.gray,
            }}
            borderBottomWidth={0.3}>
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontSize={12} fontWeight="bold">
                Value Chain Segments
              </Text>
              <MaterialIcons name="keyboard-arrow-down" size={14} />
            </HStack>
          </Box>
        </Pressable>
      </Box>

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color="#999999">
          NAFMIP OUTPUTS
        </Text>

        <Pressable
          onPress={() =>
            navigation.navigate('SelectMultiple', {
              header: 'Value Chain Segments',
              options: options.nafmip_outputs,
              selectedValue: 1,
            })
          }>
          <Box
            py={2}
            borderBottomColor={{
              color: Colors.gray,
            }}
            borderBottomWidth={0.3}>
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontSize={12} fontWeight="bold">
                NAFMIP Outputs
              </Text>
              <MaterialIcons name="keyboard-arrow-down" size={14} />
            </HStack>
          </Box>
        </Pressable>
      </Box>

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color="#999999">
          PDP STRATEGIES
        </Text>

        <Pressable
          onPress={() =>
            navigation.navigate('SelectMultiple', {
              header: 'Value Chain Segments',
              options: options.pdp_strategies,
              selectedValue: 1,
            })
          }>
          <Box
            py={2}
            borderBottomColor={{
              color: Colors.gray,
            }}
            borderBottomWidth={0.3}>
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontSize={12} fontWeight="bold">
                PDP Strategies
              </Text>
              <MaterialIcons name="keyboard-arrow-down" size={14} />
            </HStack>
          </Box>
        </Pressable>
      </Box>
    </>
  );
}
