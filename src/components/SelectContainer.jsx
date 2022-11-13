import React from 'react';
import {Box, HStack, Pressable, Text} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../constants/colors';
import {useNavigation} from '@react-navigation/native';

export default function SelectContainer({options = [], placeholder}) {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate('Select', {
          header: 'Typology of CIP',
          options: options,
          selectedValue: 1,
        })
      }>
      <Box py={2} borderBottomColor={Colors.gray} borderBottomWidth={0.3}>
        <HStack alignItems="center" justifyContent="space-between">
          <Text fontSize={12} fontWeight="bold">
            {placeholder}
          </Text>
          <MaterialIcons name="keyboard-arrow-down" size={14} />
        </HStack>
      </Box>
    </Pressable>
  );
}
