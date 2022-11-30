import { TouchableOpacity } from "react-native";
import { Badge, HStack, Icon, Text, VStack } from "native-base";
import { Colors } from "../constants/colors";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import moment from "moment/moment";
import React, { memo } from "react";

const ProjectItem = ({item, onPress}) => {
  const formattedNumber = number => number.toLocaleString();
  
  const { title, office: { acronym }, totalCost, updatedAt, pipsStatus } = item;
  
  return (
    <TouchableOpacity onPress={onPress}>
      <HStack
        alignItems="flex-start"
        justifyContent="space-between"
        bg={Colors.white}
        p={3}
        h={24}
        overflow="hidden">
        <VStack w="60%">
          <Text
            isTruncated
            color={Colors.black}
            fontWeight="semibold"
            fontSize='xs'
            noOfLines={2}>
            {title}
          </Text>
          <Text fontSize='2xs'>{acronym}</Text>
        </VStack>
        <VStack
          w="40%"
          h="full"
          justifyContent="space-between"
          alignItems="flex-end">
          <Text isTruncated>PhP {formattedNumber(totalCost)}</Text>
          
          <HStack alignItems='center' space={0.5}>
            <Icon as={<MaterialIcons name='access-time' size={8} />} />
            <Text fontSize='xs'>
              {moment(updatedAt).format("MM/DD/YY HH:MM")}
            </Text>
          </HStack>
        </VStack>
      </HStack>
      
      <Badge
        position="absolute"
        bottom={2}
        left={2}
        alignSelf="flex-start"
        variant="outline"
        _text={{
          fontSize: '2xs',
        }}>
        {pipsStatus?.name}
      </Badge>
    </TouchableOpacity>
  );
}

export default memo(ProjectItem)
