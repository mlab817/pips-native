import React, {useState} from 'react';
import {Box, HStack, Pressable, Text, TextArea} from 'native-base';
import {SectionTitle} from '../../screens/NewProjectScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../constants/colors';
import {options} from '../../constants/options';

export default function TripRequirements({navigation}) {
  const [project, setProject] = useState({
    infrastructure_sectors: [],
    prerequisites: [],
    implementation_risk: '',
  });

  return (
    <>
      <SectionTitle title="TRIP Requirements" />

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color={Colors.gray}>
          Infrastructure Sector/s
        </Text>

        <Pressable
          onPress={() =>
            navigation.navigate('SelectMultiple', {
              header: 'Infrastructure Sector/s',
              options: options.infrastructure_sectors,
              selectedValue: 1,
            })
          }>
          <Box py={2} borderBottomColor={Colors.gray} borderBottomWidth={0.3}>
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontSize={12} fontWeight="bold">
                Infrastructure Sector/s
              </Text>
              <MaterialIcons name="keyboard-arrow-down" size={14} />
            </HStack>
          </Box>
        </Pressable>
      </Box>

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color={Colors.gray}>
          Status of Implementation Readiness
        </Text>

        <Pressable
          onPress={() =>
            navigation.navigate('SelectMultiple', {
              header: 'Status of Implementation Readiness',
              options: options.prerequisites,
              selectedValue: 1,
            })
          }>
          <Box py={2} borderBottomColor={Colors.gray} borderBottomWidth={0.3}>
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontSize={12} fontWeight="bold">
                Status of Implementation Readiness
              </Text>
              <MaterialIcons name="keyboard-arrow-down" size={14} />
            </HStack>
          </Box>
        </Pressable>
      </Box>

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color={Colors.gray}>
          Implementation Risks and Mitigation Strategies
        </Text>

        <TextArea
          fontSize={12}
          variant="underlined"
          _focus={{
            borderColor: Colors.secondary,
          }}
          mt={1}
          placeholder="Implementation Risks and Mitigation Strategies"
          fontWeight="bold"
          autoCapitalize={false}
          value={project.implementation_risk}
          onChangeText={val =>
            setProject(prevVal => ({
              ...prevVal,
              implementation_risk: val,
            }))
          }
        />
      </Box>
    </>
  );
}
