import {
  Box,
  Text,
  Input,
  Button,
  Spinner,
  Checkbox,
  useToast,
} from 'native-base';
import React, {useState} from 'react';
import {SectionTitle} from './NewProjectScreen';
import {Colors} from '../constants/colors';

export default function ChangePasswordScreen() {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  const onPress = () => {
    setLoading(true);
    console.log('onPress');
    setTimeout(() => {
      setLoading(false);
      toast.show({
        title: 'Successfully changed password',
        placement: 'top',
      });
    }, 1500);
  };

  return (
    <Box flex={1}>
      {/* <SectionTitle title="Change Password" /> */}

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color="#999999">
          NEW PASSWORD
        </Text>

        <Input
          type={show ? 'text' : 'password'}
          fontSize={12}
          fontWeight="bold"
          placeholder="********"
          variant="underlined"
          _focus={{
            borderColor: Colors.secondary,
          }}
        />
      </Box>

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color="#999999">
          RE-TYPE PASSWORD
        </Text>

        <Input
          type={show ? 'text' : 'password'}
          fontSize={12}
          fontWeight="bold"
          placeholder="********"
          variant="underlined"
          _focus={{
            borderColor: Colors.secondary,
          }}
        />
      </Box>

      <Box p={2} bg={Colors.white}>
        <Checkbox
          value={show}
          onChange={toggleShow}
          _text={{
            fontSize: 10,
            color: '#999999',
          }}>
          SHOW PASSWORD
        </Checkbox>
      </Box>

      <Box p={2} alignItems="center">
        <Button
          onPress={onPress}
          w="60%"
          rounded="full"
          bg={Colors.secondary}
          disabled={loading}
          _pressed={{
            bg: Colors.secondary,
          }}>
          {loading ? <Spinner color={Colors.white} /> : 'SAVE PASSWORD'}
        </Button>
      </Box>
    </Box>
  );
}
