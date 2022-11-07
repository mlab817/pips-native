import React from 'react';
import {Box, FlatList, Heading, HStack, Text, VStack} from 'native-base';
import {Colors} from '../constants/colors';
import ScreenHeader from '../components/ScreenHeader';

const items = [
  {
    label: 'DRAFT',
    value: 32,
  },
  {
    label: 'FINALIZED',
    value: 24,
  },
  {
    label: 'DROPPED',
    value: 4,
  },
  {
    label: 'DROPPED BY IPD',
    value: 0,
  },
  {
    label: 'TOTAL',
    value: 60,
  },
  {
    label: 'REMAINING TIME',
    value: '24 hrs',
  },
];

export default function HomeScreen() {
  return (
    <Box flex={1}>
      <FlatList
        mt={3}
        px={2}
        data={items}
        renderItem={({item, index}) => (
          <Box
            mb={3}
            p={3}
            key={index}
            borderWidth={0}
            rounded={10}
            w="full"
            h={20}
            bordered
            bg={Colors.secondary}
            borderColor={Colors.main}>
            <HStack justifyContent="space-between">
              <Text color={Colors.white} fontWeight="semibold">
                {item.label}
              </Text>
              <Text color={Colors.white} fontSize={40} fontWeight="bold">
                {item.value}
              </Text>
            </HStack>
          </Box>
        )}
      />
    </Box>
  );
}
