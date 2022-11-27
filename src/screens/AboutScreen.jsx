import React, {useState} from 'react';
import {
  Box,
  Text,
  Input,
  Button,
  Spinner,
  Center,
  HStack,
  VStack,
  Image,
} from 'native-base';
import VersionInfo from 'react-native-version-info';
import {Colors} from '../constants/colors';
import DeviceInfo from 'react-native-device-info';

export default function AboutScreen() {
  const [loading, setLoading] = useState(false);

  console.log('appVersion: ', VersionInfo.appVersion);
  console.log('buildVersion: ', VersionInfo.buildVersion);
  console.log('bundleIdentifier: ', VersionInfo.bundleIdentifier);

  const onPress = () => {
    setLoading(true);
    console.log('onPress');
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <Box flex={1}>
      <Center pt={10}>
        <HStack alignItems="center" space={5}>
          <Image
            resizeMode="contain"
            w={75}
            h={75}
            alt="pips"
            source={require('../assets/icon.png')}
            rounded={10}
          />
          <VStack space={1}>
            <Text fontSize={16} fontWeight="bold">
              PIPS v{DeviceInfo.getReadableVersion()}
            </Text>
            <Text color={Colors.lightBlack}>by Lester Bolotaolo</Text>
          </VStack>
        </HStack>
      </Center>
    </Box>
  );
}
