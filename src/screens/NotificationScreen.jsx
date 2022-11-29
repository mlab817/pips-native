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

  const loadNotifications = async (signal) => {
    try {
      const response = await api.get('/auth/notifications', {
        signal: signal
      });

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
        keyExtractor={item => item.uuid}
        ListEmptyComponent={ListEmptyComponent}
      />
    </Box>
  );
}
