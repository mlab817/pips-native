import React, {useEffect, useState} from 'react';
import {
  Box,
  Divider,
  FlatList,
  Heading,
  HStack,
  Text,
  VStack,
} from 'native-base';
import {Colors} from '../constants/colors';
import api from '../utils/api';

export default function HomeScreen() {
  const [pipsStatuses, setPipsStatuses] = useState([]);

  const loadDashboardData = async () => {
    try {
      const response = await api.get('/dashboard');

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
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadDashboardData();
  }, []);

  return (
    <Box flex={1}>
      <FlatList
        keyExtractor={(item, index) => index}
        mt={3}
        px={2}
        data={pipsStatuses}
        renderItem={({item}) => (
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
        )}
      />
    </Box>
  );
}
