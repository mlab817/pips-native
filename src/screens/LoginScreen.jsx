import React, {useState} from 'react';
import {
  Box,
  Button,
  Center,
  Heading,
  Icon,
  Image,
  Input,
  KeyboardAvoidingView,
  Pressable,
  Spinner,
  Text,
  VStack,
} from 'native-base';
import {Strings} from '../constants/strings';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../constants/colors';
import ForgotPasswordModal from '../components/ForgotPasswordModal';
import api from '../utils/api';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';

export default function LoginScreen({navigation}) {
  const [show, setShow] = useState(false);

  const [loading, setLoading] = useState(false);

  const [credentials, setCredentials] = useState({
    username: 'sys_admin',
    password: 'password',
  });

  const onSubmit = async () => {
    setLoading(true);
    try {
      const response = await api.post('/auth/login', credentials);

      console.log(response.data);
      setLoading(false);
      navigation.navigate('Bottom');
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <KeyboardAvoidingView flex={1} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Box flex={1} bg={Colors.white}>
          <Box
            w="full"
            h="full"
            px={3}
            justifyContent="center"
            alignItems="center">
            <Image
              source={require('../assets/icon.png')}
              alt="icon"
              w="128"
              h="128"
              mb={10}
              rounded="full"
            />
            <VStack space={5} alignItems="center" py={5}>
              <Heading fontSize={16} fontWeight="semibold" color={'#000'}>
                {Strings.login}
              </Heading>

              <Input
                w="70%"
                type="email"
                placeholder="email@example.com"
                variant="underlined"
                pl={2}
                autoCapitalize={false}
                InputLeftElement={
                  <Icon as={<MaterialIcons name="email" size={5} />} ml="2" />
                }
                _text={{
                  color: Colors.white,
                }}
                value={credentials.username}
                onChangeText={val =>
                  setCredentials(prevCreds => ({
                    ...prevCreds,
                    username: val,
                  }))
                }
              />
              <Input
                w="70%"
                type={show ? 'text' : 'password'}
                placeholder="********"
                variant="underlined"
                pl={2}
                InputLeftElement={
                  <Icon as={<MaterialIcons name="lock" size={5} />} ml="2" />
                }
                InputRightElement={
                  <Icon
                    as={
                      <MaterialIcons
                        name={show ? 'visibility-off' : 'visibility'}
                        size={5}
                      />
                    }
                    onPress={() => setShow(!show)}
                  />
                }
                value={credentials.password}
                onChangeText={val =>
                  setCredentials(prevCreds => ({
                    ...prevCreds,
                    password: val,
                  }))
                }
                autoCapitalize={false}
              />
            </VStack>
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
              {loading ? <Spinner color={Colors.white} /> : 'SIGN IN'}
            </Button>

            <ForgotPasswordModal />
          </Box>

          <Text
            position="absolute"
            bottom={1}
            right={1}
            fontSize={10}
            color={'#999999'}>
            v1.0.0-official
          </Text>
        </Box>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
