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
  Spinner,
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
import ScreenHeader from '../components/ScreenHeader';

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
    screen: 'LevelOfApproval',
  },
  {
    label: 'Programming Documents',
    screen: 'ProgrammingDocuments',
  },
  {
    label: 'Philippine Development Plan Chapter',
    screen: '',
  },
  // {
  //   label: 'Philippine Development Plan Chapter Outputs',
  //   screen: '',
  // },
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

  const [loading, setLoading] = useState(false);

  const onPress = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <ScrollView mt={3}>
        {menu.map(({label, screen}, index) => (
          <ProjectMenu
            key={index}
            label={label}
            onPress={() => navigation.navigate(screen)}
          />
        ))}

        <Center pt={3} pb={10} px={2}>
          <Button
            onPress={onPress}
            h={12}
            rounded="full"
            w="80%"
            bg={Colors.secondary}
            _text={{
              fontSize: 16,
            }}
            _pressed={{
              bg: Colors.secondary,
            }}>
            {loading ? <Spinner color={Colors.white} /> : 'SAVE AS DRAFT'}
          </Button>
        </Center>
      </ScrollView>
    </>
  );
}
