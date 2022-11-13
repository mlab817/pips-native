import {
  Box,
  FlatList,
  HStack,
  Icon,
  Input,
  Pressable,
  SearchIcon,
  Text,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Colors} from '../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function SelectModal({route, navigation}) {
  const {header, options, selectedValue} = route.params;

  const [selected, setSelected] = useState('');

  const [search, setSearch] = useState('');

  const [filteredOptions, setFilteredOptions] = useState(options);

  useEffect(() => {
    if (search) {
      const filtered = options.filter(
        option =>
          option.label?.toLowerCase().indexOf(search.toLowerCase()) > -1,
      );

      setFilteredOptions(filtered);
    } else {
      setFilteredOptions(options);
    }
  }, [search]);

  return (
    <>
      <Box p={3}>
        <Input
          size="sm"
          placeholder="Type to search..."
          InputLeftElement={
            <Icon as={<MaterialIcons name="search" />} size={5} ml={2} />
          }
          _focus={{
            // bg: Colors.white,
            borderColor: Colors.secondary,
          }}
          pl={2}
          rounded={10}
          onChangeText={val => setSearch(val)}
          variant="underlined"
        />
      </Box>

      <Box bg={Colors.white}>
        <FlatList
          p={2}
          data={filteredOptions}
          renderItem={({item, index}) => (
            <Pressable key={index} onPress={() => setSelected(item.value)}>
              <Box
                p={3}
                borderBottomColor={Colors.lightBlack}
                borderBottomWidth={0.5}>
                <HStack justifyContent="space-between" alignItems="center">
                  <Text
                    w="90%"
                    noOfLines={2}
                    color={
                      selected === item.value ? Colors.secondary : Colors.gray
                    }
                    fontSize={10}>
                    {item.label}
                  </Text>
                  <Icon
                    as={<MaterialIcons name="check-circle" />}
                    color={
                      selected === item.value ? Colors.secondary : Colors.gray
                    }
                  />
                </HStack>
              </Box>
            </Pressable>
          )}
        />
      </Box>
    </>
  );
}
