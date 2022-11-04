import React from 'react';
import {Box, Select, Text} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {SectionTitle} from '../../screens/NewProjectScreen';
import {Colors} from '../../constants/colors';

export default function DASpecificInformation() {
  return (
    <>
      <SectionTitle title="DA-Speicific Information" />

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color="#999999">
          COMMODITIES
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
          <Select.Item label="Nationwide" value="1" />
          <Select.Item label="Interregional" value="2" />
          <Select.Item label="Region-Specific" value="3" />
          <Select.Item label="Abroad" value="4" />
        </Select>
      </Box>

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color="#999999">
          VALUE CHAIN SEGMENTS
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
          <Select.Item label="Nationwide" value="1" />
          <Select.Item label="Interregional" value="2" />
          <Select.Item label="Region-Specific" value="3" />
          <Select.Item label="Abroad" value="4" />
        </Select>
      </Box>

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color="#999999">
          NAFMIP OUTPUTS
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
          <Select.Item label="Nationwide" value="1" />
          <Select.Item label="Interregional" value="2" />
          <Select.Item label="Region-Specific" value="3" />
          <Select.Item label="Abroad" value="4" />
        </Select>
      </Box>

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color="#999999">
          PDP STRATEGIES
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
          <Select.Item label="Nationwide" value="1" />
          <Select.Item label="Interregional" value="2" />
          <Select.Item label="Region-Specific" value="3" />
          <Select.Item label="Abroad" value="4" />
        </Select>
      </Box>
    </>
  );
}
