import React, {useEffect, useState} from 'react';
import {
  Box,
  Button,
  Center,
  FlatList,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from 'native-base';
import {Colors} from '../constants/colors';
import api from '../utils/api';
import Notification from "../components/Notification";

export default function NotificationScreen() {
  const [notifications, setNotifications] = useState([]);

  const loadNotifications = async (signal) => {
    try {
      const response = await api.get('/auth/notifications', {
        signal: signal
      });
      
      console.log(response.data.data)

      setNotifications(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  // TODO: handle mark as read in the backend
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
    const controller = new AbortController();

    loadNotifications(controller.signal);

    return () => controller.abort()
  }, []);

  const renderItem = ({item}) => (
    <Notification item={item} onRemove={() => deleteNotification(item.id)} />
  );

  const ListEmptyComponent = (
    <Center mt={50} flex={1} alignItems='center' justifyContent='center'>
      <VStack space={3}>
        <Image
          rounded={10}
          source={require('../assets/empty.png')}
          size={100}
          alt="empty"
        />
        <Text mt={3} fontWeight="bold">
          You are up to date!
        </Text>
        <Button size='sm' onPress={loadNotifications} rounded='full' bg={Colors.secondary} _pressed={{
          bg: Colors.secondary
        }}>
          Refresh
        </Button>
      </VStack>
    </Center>
  )

  return (
    <Box flex={1}>
      <Box px={2} py={3} bg={Colors.secondary} alignItems='center'>
        <Text fontWeight='bold' color={Colors.white}>Notifications</Text>
      </Box>
      
      <FlatList
        showsVerticalScrollIndicator={false}
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={ListEmptyComponent}
      />
    </Box>
  );
}
