import React, {useEffect, useState} from 'react';
import {Box, Center, FlatList, HStack, Text} from 'native-base';
import {Colors} from '../constants/colors';
import api from '../utils/api';
import {ActivityIndicator} from 'react-native';

export default function HomeScreen() {
  const [pipsStatuses, setPipsStatuses] = useState([]);

  const [loading, setLoading] = useState(false);

  const loadDashboardData = async () => {
    setLoading(true);

    setPipsStatuses([]);
    try {
      const response = await api.get('/dashboard');

      console.log('dashboard response: ', response);

      const {endorsed, pips_statuses, total, validated} = response.data;

      setPipsStatuses([
        ...pips_statuses,
        {
          color: 'amber',
          name: 'VALIDATED',
          projects_count: validated,
        },
        {
          color: 'green',
          name: 'ENDORSED',
          projects_count: endorsed,
        },
        {
          color: 'gray',
          name: 'TOTAL',
          projects_count: total,
        },
      ]);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboardData();
  }, []);

  const renderItem = ({item}) => (
    <Box
      mb={3}
      p={3}
      borderWidth={0}
      rounded={10}
      w="full"
      h={20}
      bordered
      bg={`${item.color}.700`}
      borderColor={Colors.main}>
      <HStack justifyContent="space-between">
        <Text color={Colors.white} fontWeight="semibold">
          {item.name}
        </Text>
        <Text color={Colors.white} fontSize={40} fontWeight="bold">
          {item.projects_count}
        </Text>
      </HStack>
    </Box>
  );

  if (loading)
    return (
      <Center flex={1}>
        <ActivityIndicator />
      </Center>
    );

  return (
    <Box flex={1}>
      <FlatList
        keyExtractor={item => JSON.stringify(item)}
        mt={3}
        px={2}
        data={pipsStatuses}
        renderItem={renderItem}
      />
    </Box>
  );
}
