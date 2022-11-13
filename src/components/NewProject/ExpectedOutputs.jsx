import React, {useState} from 'react';
import {Box, Text, TextArea} from 'native-base';
import {SectionTitle} from '../../screens/NewProjectScreen';
import {Colors} from '../../constants/colors';

export default function ExpectedOutputs() {
  const [project, setProject] = useState({
    expected_outputs: '',
  });

  return (
    <>
      <SectionTitle title="Expected Outputs & Deliverables" />

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color={Colors.gray}>
          Expected Outputs & Deliverables
        </Text>

        <TextArea
          fontSize={12}
          variant="underlined"
          _focus={{
            borderColor: Colors.secondary,
          }}
          mt={1}
          placeholder="Expected Outputs & Deliverables"
          fontWeight="bold"
          autoCapitalize={false}
          value={project.expected_outputs}
          onChangeText={val =>
            setProject(prevVal => ({
              ...prevVal,
              expected_outputs: val,
            }))
          }
        />
      </Box>
    </>
  );
}
