import React, {useState} from 'react';
import {
  Box,
  HStack,
  Input,
  PlayIcon,
  ScrollView,
  Select,
  Switch,
  Text,
  TextArea,
} from 'native-base';
import {InputLabel, SectionTitle} from '../../screens/NewProjectScreen';
import {Colors} from '../../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Pressable} from 'react-native';
import {options} from '../../constants/options';

export default function GeneralInformation({navigation}) {
  const onChangeText = val => console.log(val);

  const [project, setProject] = useState({
    title: 'Project Title',
    type_id: 1,
    regular_program: 0,
    banner_program: 1,
    bases: [],
    description: '',
    total_cost: 0,
  });

  const totalCost = 0;

  const types = [
    {
      value: 1,
      label: 'Program',
    },
    {
      value: 2,
      label: 'Project',
    },
  ];

  return (
    <ScrollView>
      <Box mt={3} p={2} bg={Colors.white}>
        <InputLabel label="TITLE" />

        <Input
          fontSize={12}
          fontWeight="bold"
          value={project.title}
          variant="underlined"
          _focus={{
            borderColor: Colors.secondary,
          }}
          onChangeText={val =>
            setProject(prevVal => ({...prevVal, title: val}))
          }
        />
      </Box>

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color="#999999">
          PROGRAM OR PROJECT
        </Text>

        <Pressable
          onPress={() =>
            navigation.navigate('Select', {
              header: 'PROGRAM OR PROJECT',
              options: types,
              selectedValue: 1,
            })
          }>
          <Box
            py={2}
            borderBottomColor={{
              color: '#999999',
            }}
            borderBottomWidth={0.3}>
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontSize={12} fontWeight="bold">
                Program
              </Text>
              <MaterialIcons name="keyboard-arrow-down" size={14} />
            </HStack>
          </Box>
        </Pressable>
      </Box>

      <Box p={2} bg={Colors.white}>
        <HStack justifyContent="space-between" alignItems="center">
          <Text fontSize={10} color="#999999">
            REGULAR PROGRAM
          </Text>

          <Switch
            value={project.regular_program}
            size="sm"
            onTrackColor={Colors.secondary}
            onToggle={val =>
              setProject(prev => ({
                ...prev,
                regular_program: val,
              }))
            }
          />
        </HStack>
      </Box>

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color="#999999">
          BANNER PROGRAM
        </Text>

        <Pressable
          onPress={() =>
            navigation.navigate('Select', {
              header: 'BANNER PROGRAM',
              options: options.programs,
              selectedValue: 1,
            })
          }>
          <Box
            py={2}
            borderBottomColor={{
              color: '#999999',
            }}
            borderBottomWidth={0.3}>
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontSize={12} fontWeight="bold">
                Banner Program
              </Text>
              <MaterialIcons name="keyboard-arrow-down" size={14} />
            </HStack>
          </Box>
        </Pressable>
      </Box>

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color={Colors.gray}>
          BASIS FOR IMPLEMENTATION
        </Text>

        <Pressable
          onPress={() =>
            navigation.navigate('SelectMultiple', {
              header: 'BASIS FOR IMPLEMENTATION',
              options: options.bases,
              selectedValue: 1,
            })
          }>
          <Box
            py={2}
            borderBottomColor={{
              color: Colors.gray,
            }}
            borderBottomWidth={0.3}>
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontSize={12} fontWeight="bold">
                Program
              </Text>
              <MaterialIcons name="keyboard-arrow-down" size={14} />
            </HStack>
          </Box>
        </Pressable>
      </Box>

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color={Colors.gray}>
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
          value={project.description}
          onChangeText={val =>
            setProject(prevVal => ({
              ...prevVal,
              description: val,
            }))
          }
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
          onChangeText={val =>
            setProject(prevVal => ({
              ...prevVal,
              total_cost: val,
            }))
          }
          value={totalCost}
        />
      </Box>
    </ScrollView>
  );
}
