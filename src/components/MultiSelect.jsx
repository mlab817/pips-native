import React, {useState} from 'react';
import {Box, Checkbox, Text, VStack} from 'native-base';
import {Colors} from '../constants/colors';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function MultiSelect({
  route,
  navigation,
  title = 'title',
  items = [],
  ...props
}) {
  const {options} = route.params;

  const [selectedItems, setSelectedItems] = useState([]);

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
    <Box mt={3} bg={Colors.white}>
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

      <VStack px={2} defaultValue={selectedItems} onChange={setSelectedItems}>
        {options.map((option, index) => (
          // <Pressable w="100%" key={index} onPress={() => pressItem(option)}>
          //   <Box py={3} borderBottomColor="#999999" borderBottomWidth={0.3}>
          //     <HStack
          //       space={2}
          //       alignItems="center"
          //       justifyContent="space-between"
          //       px={2}>
          //       <Text
          //         w="80%"
          //         color={
          //           selectedItems.indexOf(option.value) > -1
          //             ? Colors.secondary
          //             : Colors.black
          //         }
          //         noOfLines={2}
          //         isTruncated>
          //         {option.label}
          //       </Text>
          //       <CheckCircleIcon
          //         color={
          //           selectedItems.indexOf(option.value) > -1
          //             ? Colors.secondary
          //             : Colors.lightBlack
          //         }
          //       />
          //     </HStack>
          //   </Box>
          // </Pressable>

          <Box
            key={index}
            w="full"
            p={3}
            borderBottomColor="#999999"
            borderBottomWidth={0.3}>
            <Checkbox
              value={option.value}
              isChecked={selectedItems.indexOf(option.value) > -1}
              borderBottomColor={'#999999'}
              _checked={{
                borderColor: Colors.secondary,
                bg: Colors.secondary,
                _pressed: {
                  borderColor: Colors.secondary,
                  bg: Colors.secondary,
                },
              }}
              onPress={() => onPress(option)}>
              <Text w="90%" noOfLines={2} isTruncated>
                {option.label}
              </Text>
            </Checkbox>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
