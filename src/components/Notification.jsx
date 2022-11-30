import { Box, Center, HStack, Icon, Text, VStack } from "native-base";
import { Colors } from "../constants/colors";
import moment from "moment/moment";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import React, { memo } from "react";

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

export default memo(Notification)
