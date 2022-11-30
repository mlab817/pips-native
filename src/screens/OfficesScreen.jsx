import {FlatList, HStack, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import api from '../utils/api';
import {GET_OFFICES} from '../apollo/queries';
import {useQuery} from '@apollo/client';

export default function OfficesScreen() {
  const [offices, setOffices] = useState([]);

  const {loading, error, data} = useQuery(GET_OFFICES);

  console.log(data);

  const fetchData = async () => {
    try {
      // fetch all
      const response = await api.get('/offices', {
        params: {
          per_page: 100,
        },
      });

      setOffices(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({item}) => {
    return (
      <HStack>
        <Text isTruncated>{item.acronym}</Text>
        <Text>{JSON.stringify(item)}</Text>
      </HStack>
    );
  };

  return (
    <>
      <FlatList
        keyExtractor={item => item.key}
        data={offices}
        renderItem={renderItem}
      />
    </>
  );
}
