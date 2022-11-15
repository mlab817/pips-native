import React, {useEffect, useState} from 'react';
import {
  Box,
  Button,
  Center,
  FlatList,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import {Colors} from '../constants/colors';
import moment from 'moment';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import api from '../utils/api';

const Notification = ({item, onRemove}) => {
  return (
    <Box space={2}>
      <HStack space={3} py={3} px={3}>
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
        <Center>
          <Icon
            rounded="full"
            color={Colors.red}
            as={<MaterialIcons name="delete" size={20} />}
            onPress={onRemove}
          />
        </Center>
      </HStack>
    </Box>
  );
};

export default function NotificationScreen() {
  const [notifications, setNotifications] = useState([]);

  const loadNotifications = async () => {
    try {
      const response = await api.get('/auth/notifications');

      setNotifications(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteNotification = async id => {
    try {
      const updatedNotifications = notifications.filter(
        notif => notif.id !== id,
      );

      setNotifications(updatedNotifications);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadNotifications();
  }, []);

  const renderItem = ({item}) => (
    <Notification item={item} onRemove={() => deleteNotification(item.id)} />
  );

  return (
    <Box flex={1}>
      <Box bg={Colors.white} mt={3}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={notifications}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListEmptyComponent={
            <Center flex={1}>
              <Image
                rounded={10}
                source={require('../assets/empty.png')}
                size={100}
                alt="empty"
              />
              <Text mt={3} fontWeight="bold">
                Nothing here
              </Text>
              <Button mt={3} onPress={loadNotifications}>
                Refresh
              </Button>
            </Center>
          }
        />
      </Box>
    </Box>
  );
}
