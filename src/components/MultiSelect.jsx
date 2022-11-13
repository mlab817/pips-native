import React, {useEffect, useState} from 'react';
import {Box, Checkbox, HStack, Icon, Input, Pressable, Text} from 'native-base';
import {Colors} from '../constants/colors';
import {FlatList} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function MultiSelect({
  route,
  navigation,
  title = 'title',
  items = [],
  ...props
}) {
  const {options} = route.params;

  const [selectedItems, setSelectedItems] = useState([]);

  const [search, setSearch] = useState('');

  const [filteredOptions, setFilteredOptions] = useState(options);

  useEffect(() => {
    console.log('search: ', search);
    if (search) {
      const newOptions = options.filter(
        option => option.label.toLowerCase().indexOf(search.toLowerCase()) > -1,
      );

      console.log(newOptions.length);

      setFilteredOptions(newOptions);
    } else {
      setFilteredOptions(options);
    }
  }, [search]);

  const toggleSelect = item => {
    setSelectedItems(
      items.map(i => {
        if (item === i) {
          i.selected = !i.selected;
        }
        return i;
      }),
    );
  };

  const clearSelection = () => {
    setSelectedItems(
      items.map(i => {
        i.selected = false;
        return i;
      }),
    );
  };

  const selectAll = () => {
    if (selectedItems.length === options.length) {
      clearSelection();
    } else if (selectedItems.length !== options.length) {
      setSelectedItems(options.map(option => option.value));
    }
  };

  const onPress = item => {
    const curItems = [...selectedItems];
    const index = curItems.indexOf(item.value);
    // console.log(index);
    if (index === -1) {
      setSelectedItems(prevItems => [...prevItems, item.value]);
    } else {
      const newItems = curItems.filter(curItem => curItem !== item.value);
      setSelectedItems(newItems);
    }
  };

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

      {/** Title */}
      {/* <Box
        w="full"
        h={12}
        px={2}
        justifyContent="center"
        borderBottomColor={'#999999'}
        borderBottomWidth={0.3}>
        <Checkbox
          _checked={{
            borderColor: Colors.secondary,
            bg: Colors.secondary,
            // _hover: {
            //   borderColor: Colors.secondary,
            //   bg: Colors.secondary,
            //   _disabled: {
            //     borderColor: Colors.secondary,
            //     bg: Colors.secondary,
            //   },
            // },
            _pressed: {
              borderColor: Colors.secondary,
              bg: Colors.secondary,
            },
          }}
          value={selectedItems.length === options.length}
          onPress={selectAll}>
          <Text>Check All</Text>
        </Checkbox>
      </Box> */}

      <FlatList
        showsVerticalScrollIndicator={false}
        px={2}
        data={filteredOptions}
        renderItem={({item, index}) => (
          <Pressable onPress={() => onPress(item)}>
            <HStack
              alignItems="center"
              justifyContent="space-between"
              key={index}
              w="full"
              p={3}
              bg={Colors.white}
              borderBottomColor="#999999"
              borderBottomWidth={0.3}>
              <Text
                w="90%"
                noOfLines={2}
                isTruncated
                fontSize={10}
                color={
                  selectedItems.indexOf(item.value) > -1
                    ? Colors.secondary
                    : Colors.gray
                }>
                {item.label}
              </Text>

              <Icon
                as={<MaterialIcons name="check-circle" />}
                color={
                  selectedItems.indexOf(item.value) > -1
                    ? Colors.secondary
                    : Colors.gray
                }
                // size={14}
              />
            </HStack>
          </Pressable>
        )}
      />
    </>
  );
}
