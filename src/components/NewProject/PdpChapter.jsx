import React from 'react';
import {Box, HStack, Select, Pressable, Text} from 'native-base';
import {Colors} from '../../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {SectionTitle} from '../../screens/NewProjectScreen';
import {options} from '../../constants/options';

export default function PdpChapter({navigation}) {
  return (
    <>
      <SectionTitle title="Philippine Development Program" />

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color="#999999">
          MAIN PDP CHAPTER
        </Text>

        <Pressable
          onPress={() =>
            navigation.navigate('Select', {
              header: 'Main PDP Chapter',
              options: options.pdp_chapters,
              selectedValue: 1,
            })
          }>
          <Box py={2} borderBottomColor={Colors.gray} borderBottomWidth={0.3}>
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontSize={12} fontWeight="bold">
                Main PDP Chapter
              </Text>
              <MaterialIcons name="keyboard-arrow-down" size={14} />
            </HStack>
          </Box>
        </Pressable>
      </Box>

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color="#999999">
          OTHER PDP CHAPTERS
        </Text>

        <Pressable
          onPress={() =>
            navigation.navigate('SelectMultiple', {
              header: 'Other PDP Chapters',
              options: options.pdp_chapters,
              selectedValue: 1,
            })
          }>
          <Box py={2} borderBottomColor={Colors.gray} borderBottomWidth={0.3}>
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontSize={12} fontWeight="bold">
                Other PDP Chapter
              </Text>
              <MaterialIcons name="keyboard-arrow-down" size={14} />
            </HStack>
          </Box>
        </Pressable>
      </Box>
    </>
  );
}
