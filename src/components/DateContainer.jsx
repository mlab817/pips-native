import React, {useState} from 'react';
import {HStack, Box, Icon, Text} from 'native-base';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../constants/colors';

export default function DateContainer() {
  const [date, setDate] = useState(null);

  const showDateTimePicker = () => {
    DateTimePickerAndroid.open({
      mode: 'date',
      display: 'spinner',
      value: new Date(),
      onChange: e => {
        if (e.type === 'set') {
          const newDate = new Date(e.nativeEvent.timestamp);
          setDate(newDate);
        }
      },
    });
  };

  return (
    <HStack
      justifyContent="space-between"
      alignItems="center"
      borderBottomColor={Colors.gray}
      borderBottomWidth={0.3}
      py={1}>
      <Icon as={<MaterialIcons name="edit" />} onPress={showDateTimePicker} />
      <Box w="90%">
        <Text fontWeight="bold">
          {date && new Date(date).toLocaleDateString()}
        </Text>
      </Box>

      {date && (
        <Icon
          as={<MaterialIcons name="close" />}
          onPress={() => setDate(null)}
          color={Colors.red}
        />
      )}
    </HStack>
  );
}
