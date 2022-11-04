import React from 'react';
import {Box, HStack, Input, Select, Switch, Text, TextArea} from 'native-base';
import {InputLabel, SectionTitle} from '../../screens/NewProjectScreen';
import {Colors} from '../../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function GeneralInformation() {
  const onChangeText = val => console.log(val);

  const totalCost = 0;

  return (
    <>
      <Box mt={3} p={2} bg={Colors.white}>
        <InputLabel label="TITLE" />

        <Input
          fontSize={12}
          fontWeight="bold"
          value="Project Title"
          variant="underlined"
          _focus={{
            borderColor: Colors.secondary,
          }}
        />
      </Box>

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color="#999999">
          PROGRAM OR PROJECT
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
            // endIcon: <MaterialIcons name='check-circle' size={16} color={Colors.white} />,
          }}
          mt={1}>
          <Select.Item label="Program" value="1" />
          <Select.Item label="Project" value="2" />
        </Select>
      </Box>

      <Box p={2} bg={Colors.white}>
        <HStack justifyContent="space-between" alignItems="center">
          <Text fontSize={10} color="#999999">
            REGULAR PROGRAM
          </Text>
          <Switch size="sm" onTrackColor={Colors.secondary} />
        </HStack>
      </Box>

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color="#999999">
          BANNER PROGRAM
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
          <Select.Item label="National Rice Program" value="1" />
          <Select.Item label="National Corn Program" value="2" />
        </Select>
      </Box>

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color="#999999">
          BASIS FOR IMPLEMENTATION
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
          <Select.Item label="National Rice Program" value="1" />
          <Select.Item label="National Corn Program" value="2" />
        </Select>
      </Box>

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color="#999999">
          DESCRIPTION
        </Text>

        <TextArea
          fontSize={12}
          variant="underlined"
          _focus={{
            borderColor: Colors.secondary,
          }}
          mt={1}
          placeholder="Description"
          fontWeight="bold"
          autoCapitalize={false}
        />
      </Box>

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color="#999999">
          TOTAL COST IN ABSOLUTE PHP TERMS
        </Text>

        <Input
          fontSize={12}
          fontWeight="bold"
          variant="underlined"
          _focus={{
            borderColor: Colors.secondary,
          }}
          mt={1}
          pl="2"
          InputLeftElement={<Text fontSize={8}>PHP</Text>}
          keyboardType="numeric"
          onChangeText={onChangeText}
          value={totalCost}
        />
      </Box>

      <SectionTitle title="IMPLEMENTING UNITS" />

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color="#999999">
          IMPLEMENTING UNITS
        </Text>

        <Input
          fontSize={12}
          fontWeight="bold"
          variant="underlined"
          _focus={{
            borderColor: Colors.secondary,
          }}
          mt={1}
          pl="2"
          InputLeftElement={<Text fontSize={8}>PHP</Text>}
          keyboardType="numeric"
          onChangeText={onChangeText}
          value={totalCost}
        />
      </Box>
    </>
  );
}
