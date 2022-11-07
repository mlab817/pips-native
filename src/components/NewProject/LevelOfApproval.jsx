import React from 'react';
import {Box, Select, Text} from 'native-base';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {SectionTitle} from '../../screens/NewProjectScreen';
import {Colors} from '../../constants/colors';
import {options} from '../../constants/options';

const date = new Date();

export default function LevelOfApproval() {
  return (
    <>
      <SectionTitle title="Level of Approval" />

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color="#999999">
          LEVEL OF APPROVAL
        </Text>

        <Select
          fontSize={12}
          fontWeight="bold"
          selectedValue="1"
          variant="underlined"
          _focus={{
            borderColor: Colors.secondary,
          }}
          dropdownIcon={<MaterialIcons name="keyboard-arrow-down" size={14} />}
          _selectedItem={{
            bg: Colors.secondary,
            color: Colors.white,
            // startIcon: <MaterialIcons name='check-circle' size={16} color={Colors.white} />,
          }}
          mt={1}>
          {options.approval_levels.map((item, index) => (
            <Select.Item label={item.label} key={index} value={item.value} />
          ))}
        </Select>
      </Box>

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color="#999999">
          DATE OF APPROVAL
        </Text>

        <RNDateTimePicker type="date" value={date} />
      </Box>
    </>
  );
}
