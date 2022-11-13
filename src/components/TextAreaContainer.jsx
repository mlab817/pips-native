import React from 'react';
import {TextArea} from 'native-base';
import {Colors} from '../constants/colors';

export default function TextAreaContainer({placeholder}) {
  return (
    <TextArea
      fontSize={12}
      variant="underlined"
      _focus={{
        borderColor: Colors.secondary,
      }}
      mt={1}
      placeholder={placeholder}
      fontWeight="bold"
      autoCapitalize={false}
      onChangeText={val =>
        setProject(prevVal => ({
          ...prevVal,
          description: val,
        }))
      }
    />
  );
}
