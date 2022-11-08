import React from 'react';
import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from 'native-base';
import {Colors} from '../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Pressable} from 'react-native';
import ScreenHeader from '../components/ScreenHeader';
import {useAuth} from '../contexts/auth.context';

export default function SettingScreen({navigation}) {
  const {currentUser} = useAuth();

  return (
    <>
      <Box>
        <HStack bg={Colors.secondary} pt={3} pb={5} px={2} alignItems="center">
          <Icon
            as={<Ionicons name="md-person-circle" />}
            size={60}
            color={Colors.white}
          />
          <VStack ml={2}>
            <Heading
              color={
                Colors.white
              }>{`${currentUser.first_name} ${currentUser.last_name}`}</Heading>
            <Heading bold fontSize={15} isTruncated color={Colors.white}>
              @{currentUser.username}
            </Heading>
            <Text italic fontSize={10} color={Colors.white}>
              Joined Dec 12 2022
            </Text>
          </VStack>
        </HStack>
      </Box>

      <Pressable onPress={() => navigation.navigate('AccountInfo')}>
        <Box mt={2} bg={Colors.white} alignItems="center">
          <HStack
            w="full"
            justifyContent="space-between"
            alignItems="center"
            borderColor={'#999999'}
            borderBottomWidth={0.5}
            py={3}
            px={2}>
            <HStack space={2} alignItems="center">
              <MaterialIcons name="person-outline" size={20} />
              <Text fontSize={12}>Account Information</Text>
            </HStack>
            <MaterialIcons name="arrow-forward-ios" />
          </HStack>
        </Box>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('ChangePassword')}>
        <Box bg={Colors.white} alignItems="center">
          <HStack
            w="full"
            justifyContent="space-between"
            alignItems="center"
            borderColor={'#999999'}
            borderBottomWidth={0.5}
            py={3}
            px={2}>
            <HStack space={2} alignItems="center">
              <MaterialIcons name="lock-outline" size={20} />
              <Text fontSize={12}>Change Password</Text>
            </HStack>
            <MaterialIcons name="arrow-forward-ios" />
          </HStack>
        </Box>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('About')}>
        <Box mt={2} bg={Colors.white} alignItems="center">
          <HStack
            w="full"
            justifyContent="space-between"
            alignItems="center"
            borderColor={'#999999'}
            borderBottomWidth={0.5}
            py={3}
            px={2}>
            <HStack space={2} alignItems="center">
              <MaterialIcons name="help-outline" size={20} />
              <Text fontSize={12}>About</Text>
            </HStack>
            <MaterialIcons name="arrow-forward-ios" />
          </HStack>
        </Box>
      </Pressable>

      <Box mt={2} alignItems="center" py={3} px={2}>
        <Button
          w="full"
          bg={Colors.secondary}
          _pressed={{
            bg: Colors.secondary,
          }}
          _text={{
            fontWeight: 'bold',
          }}
          onPress={() => navigation.navigate('Login')}>
          LOGOUT
        </Button>
      </Box>
    </>
  );
}
