import React, {useState} from 'react';
import {Box, HStack, Pressable, Select, Switch, Text} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../constants/colors';
import {SectionTitle} from '../../screens/NewProjectScreen';
import {options} from '../../constants/options';

export default function ProgrammingDocuments({navigation}) {
  const [project, setProject] = useState({
    pip: false,
    typology_id: null,
    cip: false,
    cip_type_id: null,
    rdip: false,
    trip: false,
    research: false,
    covid: false,
  });

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
          <Switch
            onTrackColor={Colors.secondary}
            isChecked={project.pip}
            onToggle={val =>
              setProject(prev => ({
                ...prev,
                pip: val,
              }))
            }
          />
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

        <Pressable
          onPress={() =>
            navigation.navigate('Select', {
              header: 'Typology of PIP',
              options: options.typologies,
              selectedValue: 1,
            })
          }>
          <Box py={2} borderBottomColor={Colors.gray} borderBottomWidth={0.3}>
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontSize={12} fontWeight="bold">
                Typology of PIP
              </Text>
              <MaterialIcons name="keyboard-arrow-down" size={14} />
            </HStack>
          </Box>
        </Pressable>
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
          <Switch
            onTrackColor={Colors.secondary}
            isChecked={project.trip}
            onToggle={val =>
              setProject(prev => ({
                ...prev,
                trip: val,
              }))
            }
          />
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
          <Switch
            onTrackColor={Colors.secondary}
            isChecked={project.cip}
            onToggle={val =>
              setProject(prev => ({
                ...prev,
                cip: val,
              }))
            }
          />
        </HStack>
      </Box>

      <Box
        p={2}
        bg={Colors.white}
        borderBottomColor="#999999"
        borderBottomWidth={0.3}>
        <Text fontSize={10} color="#999999">
          Typology of CIP
        </Text>

        <Pressable
          onPress={() =>
            navigation.navigate('Select', {
              header: 'Typology of CIP',
              options: options.cip_types,
              selectedValue: 1,
            })
          }>
          <Box py={2} borderBottomColor={Colors.gray} borderBottomWidth={0.3}>
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontSize={12} fontWeight="bold">
                TYPOLOGY OF CIP
              </Text>
              <MaterialIcons name="keyboard-arrow-down" size={14} />
            </HStack>
          </Box>
        </Pressable>
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
          <Switch
            onTrackColor={Colors.secondary}
            isChecked={project.rdip}
            onToggle={val =>
              setProject(prev => ({
                ...prev,
                rdip: val,
              }))
            }
          />
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
          <Switch
            onTrackColor={Colors.secondary}
            isChecked={project.research}
            onToggle={val =>
              setProject(prev => ({
                ...prev,
                research: val,
              }))
            }
          />
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
          <Switch
            onTrackColor={Colors.secondary}
            isChecked={project.covid}
            onToggle={val =>
              setProject(prev => ({
                ...prev,
                covid: val,
              }))
            }
          />
        </HStack>
      </Box>
    </>
  );
}
