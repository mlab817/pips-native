import React, {useEffect, useState} from 'react';
import {Box, Input, Text} from 'native-base';
import {SectionTitle} from '../../screens/NewProjectScreen';
import {Colors} from '../../constants/colors';

export default function EmploymentGeneration() {
  const [project, setProject] = useState({
    employed_male: 0,
    employed_female: 0,
  });

  const [employmentGenerated, setEmploymentGenerated] = useState(0);

  useEffect(() => {
    const sum =
      (project.employed_female ? parseInt(project.employed_female) : 0) +
      (project.employed_male ? parseInt(project.employed_male) : 0);
    console.log('sum: ', sum);
    setEmploymentGenerated(sum);
  }, [project.employed_female, project.employed_male]);

  return (
    <>
      <SectionTitle title="Employment Generation" />

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color={Colors.gray}>
          Total Employment Male (individuals)
        </Text>

        <Input
          fontSize={12}
          fontWeight="bold"
          variant="underlined"
          _focus={{
            borderColor: Colors.secondary,
          }}
          mt={1}
          keyboardType="numeric"
          onChangeText={val =>
            setProject(prevVal => ({
              ...prevVal,
              employed_male: val,
            }))
          }
        />
      </Box>

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color={Colors.gray}>
          Total Employment Female (individuals)
        </Text>

        <Input
          fontSize={12}
          fontWeight="bold"
          variant="underlined"
          _focus={{
            borderColor: Colors.secondary,
          }}
          mt={1}
          keyboardType="numeric"
          onChangeText={val =>
            setProject(prevVal => ({
              ...prevVal,
              employed_female: val,
            }))
          }
        />
      </Box>

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color={Colors.gray}>
          Total Employment Generated (autocomputed)
        </Text>

        <Box borderBottomColor={Colors.secondary} borderBottomWidth={1} py={3}>
          <Text fontSize={12} fontWeight="bold" mt={1}>
            {employmentGenerated}
          </Text>
        </Box>
      </Box>
    </>
  );
}
