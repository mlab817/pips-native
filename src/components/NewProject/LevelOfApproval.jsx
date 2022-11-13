import React, {useState} from 'react';
import {Box, HStack, Icon, PlayIcon, Pressable, Text} from 'native-base';
import RNDateTimePicker, {
  DateTimePickerAndroid,
} from '@react-native-community/datetimepicker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {SectionTitle} from '../../screens/NewProjectScreen';
import {Colors} from '../../constants/colors';
import {options} from '../../constants/options';

const date = new Date();

export default function LevelOfApproval({navigation}) {
  const [date, setDate] = useState(null);

  const [show, setShow] = useState(false);

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
    <>
      <SectionTitle title="Level of Approval" />

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color="#999999">
          LEVEL OF APPROVAL
        </Text>

        <Pressable
          onPress={() =>
            navigation.navigate('Select', {
              header: 'Approval Level',
              options: options.approval_levels,
              selectedValue: 1,
            })
          }>
          <Box py={2} borderBottomColor={Colors.gray} borderBottomWidth={0.3}>
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontSize={12} fontWeight="bold">
                Level of Approval
              </Text>
              <MaterialIcons name="keyboard-arrow-down" size={14} />
            </HStack>
          </Box>
        </Pressable>
      </Box>

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color="#999999">
          DATE OF APPROVAL
        </Text>

        <HStack
          justifyContent="space-between"
          alignItems="center"
          borderBottomColor={Colors.gray}
          borderBottomWidth={0.3}
          py={1}>
          <Icon
            as={<MaterialIcons name="edit" />}
            onPress={showDateTimePicker}
          />
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
      </Box>
    </>
  );
}
