import React, {useState} from 'react';
import {
  Box,
  Button,
  Center,
  Icon,
  Input,
  Modal,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import {Colors} from '../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function ForgotPasswordScreen() {
  const [loading, setLoading] = useState(false);

  return (
    <Center flex={1}>
      <VStack space={3} p={3} w="80%">
        <Text color={Colors.lightBlack}>
          Forgot your password? No problem. Type in your email below and we will
          send you a link to reset your password.
        </Text>

        <Input
          variant="underlined"
          placeholder="email@example.com"
          InputLeftElement={
            <Icon as={<MaterialIcons name="mail" />} size={5} />
          }
          pl="2"
          autoCapitalize={false}
        />
      </VStack>

      <Center>
        <Button
          w="70%"
          bg={Colors.secondary}
          color={Colors.white}
          rounded="full"
          _pressed={{
            bg: Colors.secondary,
          }}
          onPress={onSubmit}
          loading={loading}>
          {loading ? <Spinner color={Colors.white} /> : 'RESET PASSWORD'}
        </Button>
      </Center>
    </Center>
  );
}
