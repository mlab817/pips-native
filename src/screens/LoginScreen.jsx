import React, {useEffect, useState} from 'react';
import {
  Alert,
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
  useToast,
  VStack,
} from 'native-base';
import {Strings} from '../constants/strings';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../constants/colors';
import ForgotPasswordModal from '../components/ForgotPasswordModal';
import api from '../utils/api';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {useAuth} from '../contexts/auth.context';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import * as Keychain from 'react-native-keychain';

const rnBiometrics = new ReactNativeBiometrics();

export default function LoginScreen({navigation}) {
  const [biometricsAvailable, setBiometricsAvailable] = useState(false);

  const [genericPassword, setGenericPassword] = useState(false);

  const checkBiometricsAvailability = async () => {
    // console.log('checkBiometricsAvailability started');
    try {
      const {biometryType} = await rnBiometrics.isSensorAvailable();

      if (biometryType === BiometryTypes.Biometrics) {
        //do something fingerprint specific
        // console.log('biometryType: ', biometryType);
        setBiometricsAvailable(true);
      } else {
        // console.log('biometryType: ', biometryType);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [show, setShow] = useState(false);

  const [loading, setLoading] = useState(false);

  const {login} = useAuth();

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const toast = useToast();

  const onSubmit = async () => {
    setLoading(true);
    try {
      // const response = await api.post('/auth/login', credentials);
      login(credentials);

      // console.log(response.data);

      const {service, storage} = await Keychain.setGenericPassword(
        credentials.username,
        credentials.password,
      );

      setLoading(false);

      navigation.navigate('Bottom');
    } catch (err) {
      setLoading(false);
      toast.show({
        message: err.response.data.message,
      });
    }
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

  const loginWithBiometrics = async () => {
    if (!genericPassword)
      return alert('Please login first to enable Fingerprint.');

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

        navigation.navigate('Bottom');
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

            {biometricsAvailable && (
              <Center my={10}>
                <Pressable onPress={loginWithBiometrics}>
                  <MaterialIcons
                    name="fingerprint"
                    size={40}
                    color={genericPassword ? Colors.secondary : Colors.gray}
                  />
                </Pressable>
              </Center>
            )}

            <ForgotPasswordModal />

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
