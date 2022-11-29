import React, {useState} from 'react';
import {
  Box,
  Text,
  Input,
  Button,
  Spinner,
  Checkbox,
  useToast,
} from 'native-base';
import {Colors} from '../constants/colors';

const ChangePasswordScreen: React.FC = () => {
  const toast = useToast();

  const [loading, setLoading] = useState<boolean>(false);

  const [show, setShow] = useState(undefined);

  const toggleShow = () => setShow(!show);

  const onPress = () => {
    setLoading(true);

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
      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color={Colors.gray}>
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
          onChange={toggleShow}
          _text={{
            fontSize: 10,
            color: '#999999',
          }}
          value="1">
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
};

export default ChangePasswordScreen;
