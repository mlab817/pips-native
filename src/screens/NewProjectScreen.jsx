import React, {useState} from 'react';
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Input,
  Pressable,
  ScrollView,
  Select,
  Switch,
  Text,
  TextArea,
  VStack,
} from 'native-base';
import {Colors} from '../constants/colors';
import {FlatList} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import MultiSelect from '../components/MultiSelect';

const data = [
  {
    label: 'Title',
    value: 'Project Title',
  },
  {
    label: 'Program or Project',
    value: 'Program',
  },
  {
    label: 'DA-Specific Information',
    onPress: 'DASpecificInformation',
  },
  {
    label: 'Level of Approval',
    onPress: () => {},
  },
  {
    label: 'Programming Documents',
    onPress: () => {},
  },
  {
    label: 'Philippine Development Plan',
    onPress: () => {},
  },
];

const date = new Date();

export const SectionTitle = ({title}) => (
  <Heading
    mx={2}
    my={3}
    fontSize={12}
    fontWeight="bold"
    color={Colors.lightBlack}>
    {title.toUpperCase()}
  </Heading>
);

export const InputLabel = ({label}) => (
  <Text fontSize={10} color="#999999">
    {label.toUpperCase()}
  </Text>
);

const ProjectMenu = ({label, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <HStack
        alignItems="center"
        justifyContent="space-between"
        bg={Colors.white}
        py={3}
        px={2}
        borderBottomColor={Colors.lightBlack}
        borderBottomWidth={0.5}>
        <Text>{label}</Text>

        <MaterialIcons name="chevron-right" size={16} />
      </HStack>
    </Pressable>
  );
};

const menu = [
  {
    label: 'General Information',
    screen: 'GeneralInformation',
  },
  {
    label: 'Implementing Units',
    screen: 'ImplementingUnits',
  },
  {
    label: 'Spatial Coverage',
    screen: 'SpatialCoverage',
  },
  {
    label: 'DA-Specific Information',
    screen: 'DASpecificInformation',
  },
  {
    label: 'Level of Approval',
    screen: '',
  },
  {
    label: 'Programming Documents',
    screen: '',
  },
  {
    label: 'Philippine Development Plan Chapter',
    screen: '',
  },
  {
    label: 'Philippine Development Plan Chapter Outputs',
    screen: '',
  },
  {
    label: 'TRIP Requirements',
    screen: '',
  },
  {
    label: 'Infrastructure Cost per Funding Source',
    screen: '',
  },
  {
    label: 'Expected Outputs/Deliverables',
    screen: '',
  },
  {
    label: 'Socioeconomic Agenda',
    screen: '',
  },
  {
    label: 'Sustainable Development Goals',
    screen: '',
  },
  {
    label: 'Pre-Construction Costs',
    screen: '',
  },
  {
    label: 'Project Preparation Details',
    screen: '',
  },
  {
    label: 'Employment Generation',
    screen: '',
  },
  {
    label: 'Funding Source/Mode of Implementation',
    screen: '',
  },
  {
    label: 'Physical and Financial Status',
    screen: '',
  },
  {
    label: 'Investment Cost per Region',
    screen: '',
  },
  {
    label: 'Investment Cost per Funding Source',
    screen: '',
  },
  {
    label: 'Financial Accomplishments',
    screen: '',
  },
];

export default function NewProjectScreen({navigation}) {
  const [totalCost, setTotalCost] = useState(0);

  const onChangeText = value => {
    if (!value) return setTotalCost(0);

    const parsedValue = value.replace(/\$\s?|(,*)/g, '');

    setTotalCost(parsedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ','));
  };

  const showDatePicker = () => {
    DateTimePicker.open({
      mode: 'date',
      value: new Date(),
    });
  };

  return (
    <>
      <Box bg={Colors.secondary} pt={10} pb={3} mb={3}>
        <Heading mx={2} color={Colors.white} shadow={2}>
          New Project
        </Heading>
      </Box>

      <MultiSelect items={data} />

      <ScrollView>
        {menu.map(({label, screen}, index) => (
          <ProjectMenu
            key={index}
            label={label}
            onPress={() => navigation.navigate(screen)}
          />
        ))}

        <Center py={5} px={2}>
          <Button
            h={12}
            rounded="full"
            w="full"
            bg={Colors.secondary}
            _text={{
              fontSize: 16,
            }}
            _pressed={{
              bg: Colors.secondary,
            }}>
            SAVE AS DRAFT
          </Button>
        </Center>

        <SectionTitle title="DA-SPECIFIC INFORMATION" />

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
            DATE OF APPROVAL
          </Text>

          <RNDateTimePicker type="date" value={date} />
        </Box>

        <SectionTitle title="Programming Documents" />

        <Box p={2} bg={Colors.white}>
          <HStack justifyContent="space-between" alignItems="center">
            <Text fontSize={10} color="#999999">
              PUBLIC INVESTMENT PROGRAM
            </Text>
            <Switch size="sm" onTrackColor={Colors.secondary} />
          </HStack>
        </Box>

        <Box p={2} bg={Colors.white}>
          <HStack justifyContent="space-between" alignItems="center">
            <Text fontSize={10} color="#999999">
              THREE-YEAR ROLLING INFRASTRUCTURE PROGRAM
            </Text>
            <Switch size="sm" onTrackColor={Colors.secondary} />
          </HStack>
        </Box>

        <Box p={2} bg={Colors.white}>
          <HStack justifyContent="space-between" alignItems="center">
            <Text fontSize={10} color="#999999">
              CORE INVESTMENT PROGRAM/PROJECT
            </Text>
            <Switch size="sm" onTrackColor={Colors.secondary} />
          </HStack>
        </Box>

        <Box p={2} bg={Colors.white}>
          <HStack justifyContent="space-between" alignItems="center">
            <Text fontSize={10} color="#999999">
              REGIONAL DEVELOPMENT INVESTMENT PROGRAM
            </Text>
            <Switch size="sm" onTrackColor={Colors.secondary} />
          </HStack>
        </Box>

        <Box p={2} bg={Colors.white}>
          <HStack justifyContent="space-between" alignItems="center">
            <Text fontSize={10} color="#999999">
              R&D PAP
            </Text>
            <Switch size="sm" onTrackColor={Colors.secondary} />
          </HStack>
        </Box>

        <Box p={2} bg={Colors.white}>
          <HStack justifyContent="space-between" alignItems="center">
            <Text fontSize={10} color="#999999">
              RESPONSIVE TO COVID
            </Text>
            <Switch size="sm" onTrackColor={Colors.secondary} />
          </HStack>
        </Box>

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
      </ScrollView>
    </>
  );
}
