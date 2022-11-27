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

const icon = require('../assets/icon.png');

const rnBiometrics = new ReactNativeBiometrics();

const BiometricsButton = ({genericPassword}) => {
  const toast = useToast();

  const loginWithBiometrics = async () => {
    if (!genericPassword)
      return alert('Login first to enable fingerprint login.');

    try {
      const {success, error} = await rnBiometrics.simplePrompt({
        promptMessage: 'Sign in with Fingerprint',
        cancelButtonText: 'Close',
      });

      if (success) {
        const payload = await Keychain.getGenericPassword();

        login({
          username: payload.username,
          password: payload.password,
        });
      } else {
        throw new Error('User cancelled');
      }
    } catch (err) {
      toast.show({
        description: err.message,
      });
    }
  };

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

export default function LoginScreen({navigation}) {
  const {isAuthenticated, setIsAuthenticated, setCurrentUser} = useAuth();

  const [biometricsAvailable, setBiometricsAvailable] = useState(false);

  const [genericPassword, setGenericPassword] = useState(false);

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

  const [show, setShow] = useState(false);

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const login = async () => {
    try {
      const response = await api.post('/auth/login', credentials);

      const {access_token, user} = response.data;

      await AsyncStorage.setItem('TOKEN', `${access_token}`);

      console.log(response);
      
      setIsAuthenticated(true)
      setCurrentUser(user)
    } catch (err) {
      console.log(err);
      setIsAuthenticated(false)
    }
  };

  const onSubmit = async () => {
    if (!credentials.username || !credentials.password) return;
    
    await login();
  };

  // check if there is a saved generic password
  const checkGenericPasswordAvailability = async () => {
    try {
      const payload = await Keychain.getGenericPassword();

      setGenericPassword(!!payload);
    } catch (err) {
      setGenericPassword(null);
    }
  };

  useEffect(() => {
    checkBiometricsAvailability();
    checkGenericPasswordAvailability();
  }, []);

  const showForgotPassword = () => navigation.navigate('ForgotPassword');

  const toggleShowPassword = () => setShow(!show);

  const onChangeText = name => val =>
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
                type="email"
                placeholder="username"
                variant="underlined"
                pl={2}
                autoCapitalize={false}
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
                autoCapitalize={false}
              />
            </VStack>

            <Text>{isAuthenticated}</Text>

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

            {biometricsAvailable && (
              <BiometricsButton genericPassword={genericPassword} />
            )}

            <Pressable h='44px' onPress={showForgotPassword}>
              <Text color={Colors.lightBlack}>Forgot Password?</Text>
            </Pressable>

            <Box position="absolute" bottom={2}>
              <Center>
                <Text fontSize={10} color={Colors.gray}>
                  PIPS v{DeviceInfo.getReadableVersion()}
                </Text>
              </Center>
            </Box>
          </Box>
        </Box>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
