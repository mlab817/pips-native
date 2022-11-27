import { Center, Image, Text } from "native-base";

export default function EmptyComponent({ message = 'List is empty.'}) {
  return (
    <Center alignItems='center' mt={100}>
      <Image source={require('../assets/empty.png')} w='100' h='100' resizeMode='cover' alt='empty' />
      
      <Text fontWeight='bold' mt={3}>{message}</Text>
    </Center>
  )
}
