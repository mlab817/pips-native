import React from 'react';
import {Button, Center, Image, Text, VStack} from 'native-base';
import {Colors} from '../constants/colors';

export default function ErrorComponent({onRefresh}) {
  return (
    <Center mt={50} flex={1} alignItems="center" justifyContent="center">
      <VStack space={3}>
        <Image
          rounded={10}
          source={require('../assets/error.png')}
          size={100}
          alt="empty"
        />
        <Text mt={3} fontWeight="bold">
          You are up to date!
        </Text>
        <Button
          size="sm"
          onPress={onRefresh}
          rounded="full"
          bg={Colors.secondary}
          _pressed={{
            bg: Colors.secondary,
          }}>
          Refresh
        </Button>
      </VStack>
    </Center>
  );
}
