import React from 'react';
import { Box, Select, Text } from "native-base";
import { Colors } from "../../constants/colors";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { SectionTitle } from "../../screens/NewProjectScreen";

export default function PdpChapter() {
  return (
    <>
      <SectionTitle title="Philippine Development Program" />
  
      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color="#999999">
          MAIN PDP CHAPTER
        </Text>
    
        <Select
          fontSize={12}
          fontWeight="bold"
          selectedValue="1"
          variant="underlined"
          _focus={{
            borderColor: Colors.secondary,
          }}
          dropdownIcon={
            <MaterialIcons name="keyboard-arrow-down" size={14} />
          }
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
          OTHER PDP CHAPTERS
        </Text>
    
        <Select
          fontSize={12}
          fontWeight="bold"
          selectedValue="1"
          variant="underlined"
          _focus={{
            borderColor: Colors.secondary,
          }}
          dropdownIcon={
            <MaterialIcons name="keyboard-arrow-down" size={14} />
          }
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
  )
}
