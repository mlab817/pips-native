import React, {useEffect, useState} from 'react';
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
  Text,
  useToast,
  VStack,
} from 'native-base';
import {Strings} from '../constants/strings';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../constants/colors';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import * as Keychain from 'react-native-keychain';
import api from '../utils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAuth} from '../contexts/auth.context';
import {Props} from '@react-navigation/stack/lib/typescript/src/views/Header/HeaderContainer';

const icon = require('../assets/icon.png');

const rnBiometrics = new ReactNativeBiometrics();

export type LoginCredentials = {
  username: string;
  password: string;
};

const BiometricsButton = () => {
  const toast = useToast();

  const [genericPassword, setGenericPassword] = useState(null);

  const [biometricsAvailable, setBiometricsAvailable] =
    useState<boolean>(false);

  const checkBiometricsAvailability = async () => {
    // console.log('checkBiometricsAvailability started');
    try {
      const {biometryType} = await rnBiometrics.isSensorAvailable();

      if (biometryType === BiometryTypes.Biometrics) {
        //do something fingerprint specific
        setBiometricsAvailable(true);
      } else {
        // console.log('biometryType: ', biometryType);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const {login} = useAuth();

  const checkGenericPasswordAvailability = async () => {
    try {
      const payload = await Keychain.getGenericPassword();

      setGenericPassword(prevState => ({
        ...prevState,
        username: payload.username,
        password: payload.password,
      }));
    } catch (err) {
      setGenericPassword(null);
    }
  };

  const loginWithBiometrics = async () => {
    if (!genericPassword) {
      return alert('Login first to enable fingerprint login.');
    }

    try {
      const {success} = await rnBiometrics.simplePrompt({
        promptMessage: 'Sign in with Fingerprint',
        cancelButtonText: 'Close',
      });

      if (success) {
        const payload = await Keychain.getGenericPassword();

        login(genericPassword);
      } else {
        throw new Error('User cancelled');
      }
    } catch (err) {
      toast.show({
        description: err.message,
      });
    }
  };

  useEffect(() => {
    checkGenericPasswordAvailability();
    checkBiometricsAvailability();
  }, []);

  return (
    <Center my={10}>
      <Pressable onPress={loginWithBiometrics}>
        <MaterialIcons
          name="fingerprint"
          size={40}
          color={genericPassword ? Colors.secondary : Colors.gray}
        />
      </Pressable>
    </Center>
  );
};

const LoginScreen: React.FC = ({navigation}) => {
  const {updateAuthenticatedState, setCurrentUser} = useAuth();

  const [show, setShow] = useState<Boolean>(false);

  const [credentials, setCredentials] = useState<LoginCredentials>({
    username: '',
    password: '',
  });

  const login = async () => {
    try {
      const response = await api.post('/auth/login', credentials);

      const {access_token, user} = response.data;

      await AsyncStorage.setItem('TOKEN', `${access_token}`);

      console.log(response);

      updateAuthenticatedState(true);

      setCurrentUser(user);
    } catch (err) {
      updateAuthenticatedState(false);
    }
  };

  const onSubmit = async () => {
    if (!credentials.username || !credentials.password) {
      return;
    }

    await login();
  };

  // check if there is a saved generic password

  const showForgotPassword = () => navigation.navigate('ForgotPassword');

  const toggleShowPassword = () => setShow(!show);

  const appVersion = DeviceInfo.getReadableVersion();

  const onChangeText = (name: string) => (val: string) =>
    setCredentials(prev => ({
      ...prev,
      [name]: val,
    }));

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
              source={icon}
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
                type="text"
                placeholder="username"
                variant="underlined"
                pl={2}
                autoCapitalize="none"
                InputLeftElement={
                  <Icon as={<MaterialIcons name="person" size={5} />} ml="2" />
                }
                _text={{
                  color: Colors.white,
                }}
                // value={credentials.username}
                onChangeText={onChangeText('username')}
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
                    onPress={toggleShowPassword}
                  />
                }
                // value={credentials.password}
                onChangeText={onChangeText('password')}
                autoCapitalize="none"
              />
            </VStack>

            <BiometricsButton />

            <Button
              w="70%"
              bg={Colors.secondary}
              color={Colors.white}
              rounded="full"
              _pressed={{
                bg: Colors.secondary,
              }}
              onPress={onSubmit}>
              SIGN IN
            </Button>

            <Pressable h="44px" onPress={showForgotPassword} mt={5}>
              <Text color={Colors.lightBlack}>Forgot Password?</Text>
            </Pressable>

            <Box position="absolute" bottom={2}>
              <Center>
                <Text fontSize={10} color={Colors.gray}>
                  PIPS v{appVersion}
                </Text>
              </Center>
            </Box>
          </Box>
        </Box>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
