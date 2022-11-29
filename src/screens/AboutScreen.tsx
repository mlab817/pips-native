import React from 'react';
import {Box, Text, Center, HStack, VStack, Image} from 'native-base';
import {Colors} from '../constants/colors';
import DeviceInfo from 'react-native-device-info';

const AboutScreen: React.FC = () => (
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

export default AboutScreen;
