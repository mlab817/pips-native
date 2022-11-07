import React from 'react';
import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import {FlatList} from 'react-native';
import {Colors} from '../constants/colors';
import moment from 'moment';
import ScreenHeader from '../components/ScreenHeader';

const notifications = [
  {
    id: '3130d4f5-2c4a-44f5-acee-ea798ffde978',
    data: {
      sender: 'System',
      subject: 'Reminder: Change Password',
      message:
        'Your account is using an insecure password. Please change your password ASAP.',
    },
    created_at: '2022-11-02T00:46:26.000000Z',
  },
  {
    id: '7572b694-c338-45c7-8509-8e2d7ae966ec',
    data: {
      sender: 'System',
      subject: 'Reminder: Change Password',
      message:
        'Your account is using an insecure password. Please change your password ASAP.',
    },
    created_at: '2022-10-28T00:36:42.000000Z',
  },
  {
    id: 'f0de5aac-a616-4117-b957-ed023fadca6e',
    data: {
      sender: 'System',
      subject: 'Reminder: Change Password',
      message:
        'Your account is using an insecure password. Please change your password ASAP.',
    },
    created_at: '2022-10-28T00:35:46.000000Z',
  },
  {
    id: 'dfb9e03c-0369-4f1d-8780-cd1751226159',
    data: {
      sender: 'System',
      subject: 'Reminder: Change Password',
      message:
        'Your account is using an insecure password. Please change your password ASAP.',
    },
    created_at: '2022-10-26T13:52:01.000000Z',
  },
];

export default function NotificationScreen() {
  return (
    <Box flex={1}>
      <Box bg={Colors.white} mt={3}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={notifications}
          renderItem={({item}) => (
            <Box
              borderBottomWidth={0.3}
              borderBottomColor={'#999999'}
              py={3}
              px={2}>
              <HStack space={2}>
                <Center borderRadius={50} bg={Colors.secondary} h={10} w={10}>
                  <Text fontSize={8} color={Colors.white}>
                    {item.data?.sender}
                  </Text>
                </Center>
                <VStack w="80%">
                  <Text fontWeight="thin" fontSize={12} color={Colors.black}>
                    {item.data?.subject}
                  </Text>
                  <Text isTruncated fontSize={12} noOfLines={3}>
                    {item.data?.message}
                  </Text>
                  <Text fontSize={10}>
                    {moment(item.created_at).format('MM/DD/YY HH:MM')}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          )}
          keyExtractor={item => item.id}
        />
      </Box>
    </Box>
  );
}
