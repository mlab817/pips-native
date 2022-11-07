import React from 'react';
import {Box, HStack, Select, Switch, Text} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../constants/colors';
import {SectionTitle} from '../../screens/NewProjectScreen';

export default function ProgrammingDocuments() {
  return (
    <>
      <SectionTitle title="Public Investment Program" />

      <Box
        p={2}
        bg={Colors.white}
        borderBottomColor="#999999"
        borderBottomWidth={0.3}>
        <HStack justifyContent="space-between" alignItems="center">
          <Text fontSize={10} color="#999999">
            PUBLIC INVESTMENT PROGRAM
          </Text>
          <Switch size="sm" onTrackColor={Colors.secondary} />
        </HStack>
      </Box>

      <Box
        p={2}
        bg={Colors.white}
        borderBottomColor="#999999"
        borderBottomWidth={0.3}>
        <Text fontSize={10} color="#999999">
          TYPOLOGY OF PIP
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

      <SectionTitle title="THREE-YEAR ROLLING INFRASTRUCTURE PROGRAM" />

      <Box
        p={2}
        bg={Colors.white}
        borderBottomColor="#999999"
        borderBottomWidth={0.3}>
        <HStack justifyContent="space-between" alignItems="center">
          <Text fontSize={10} color="#999999">
            THREE-YEAR ROLLING INFRASTRUCTURE PROGRAM
          </Text>
          <Switch size="sm" onTrackColor={Colors.secondary} />
        </HStack>
      </Box>

      <SectionTitle title="CORE INVESTMENT PROGRAM/PROJECT" />

      <Box
        p={2}
        bg={Colors.white}
        borderBottomColor="#999999"
        borderBottomWidth={0.3}>
        <HStack justifyContent="space-between" alignItems="center">
          <Text fontSize={10} color="#999999">
            CORE INVESTMENT PROGRAM/PROJECT
          </Text>
          <Switch size="sm" onTrackColor={Colors.secondary} />
        </HStack>
      </Box>

      <Box
        p={2}
        bg={Colors.white}
        borderBottomColor="#999999"
        borderBottomWidth={0.3}>
        <Text fontSize={10} color="#999999">
          TYPOLOGY OF CIP
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

      <SectionTitle title="REGIONAL DEVELOPMENT INVESTMENT PROGRAM" />

      <Box
        p={2}
        bg={Colors.white}
        borderBottomColor="#999999"
        borderBottomWidth={0.3}>
        <HStack justifyContent="space-between" alignItems="center">
          <Text fontSize={10} color="#999999">
            REGIONAL DEVELOPMENT INVESTMENT PROGRAM
          </Text>
          <Switch size="sm" onTrackColor={Colors.secondary} />
        </HStack>
      </Box>

      <SectionTitle title="OTHERS" />

      <Box
        p={2}
        bg={Colors.white}
        borderBottomColor="#999999"
        borderBottomWidth={0.3}>
        <HStack justifyContent="space-between" alignItems="center">
          <Text fontSize={10} color="#999999">
            R&D PAP
          </Text>
          <Switch size="sm" onTrackColor={Colors.secondary} />
        </HStack>
      </Box>

      <Box
        p={2}
        bg={Colors.white}
        borderBottomColor="#999999"
        borderBottomWidth={0.3}>
        <HStack justifyContent="space-between" alignItems="center">
          <Text fontSize={10} color="#999999">
            RESPONSIVE TO COVID
          </Text>
          <Switch size="sm" onTrackColor={Colors.secondary} />
        </HStack>
      </Box>
    </>
  );
}
