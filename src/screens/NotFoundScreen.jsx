import React from 'react';
import { Center,  Image } from "native-base";

export default function NotFoundScreen() {
  return (
    <Center flex={1}>
      <Image source={require('../assets/error.png')} alt='error' w={100} h={100} />
    </Center>
  )
}
