import React, {useState} from 'react';
import {
  Badge,
  Box,
  Button,
  Center,
  Divider,
  FlatList,
  HStack, Icon,
  Image,
  Pressable, SearchIcon, Spinner,
  Text, useToast,
  VStack,
} from "native-base";
import {Colors} from '../constants/colors';
import moment from 'moment';
import {ActivityIndicator} from 'react-native';
import {useQuery, gql} from '@apollo/client';
import ErrorComponent from '../components/ErrorComponent';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const GET_PROJECTS = gql`
  query Projects(
    $after: String
  ) {
    projects(
      after: $after
    ) {
      edges {
        cursor
        node {
          id
          uuid
          title
          totalCost
          office {
            acronym
          }
          pipsStatus {
            name
          }
          updatedAt
        }
      }
      pageInfo {
         endCursor
         hasNextPage
         total
      }
    }
  }
`;

export const Search = ({onPress}) => (
  <Pressable onPress={onPress}>
    <Box bg={Colors.secondary} px={2} py={4}>
      <HStack space={3} alignItems='center'>
        <SearchIcon color={Colors.white} />
        
        <Text fontSize='2xs' color={Colors.white}>Search programs & projects...</Text>
      </HStack>
    </Box>
  </Pressable>
);

export default function ProjectsScreen({ navigation }) {
  const {loading, error, data, fetchMore} = useQuery(GET_PROJECTS, {
    first: 10
  });
  
  const edges = data?.projects?.edges?.map(edge => edge.node)
  const pageInfo = data?.projects?.pageInfo
  
  const loadMore = () => {
    fetchMore({
      variables: {
        after: pageInfo?.endCursor,
      }
    }).finally(() => toast.closeAll())
  }
  
  const ListHeaderComponent = () => (
    <>
      <Search onPress={() => navigation.navigate('Search')} />
      <HStack bg={Colors.lightGray} px={3} py={1} justifyContent='center'>
        <Text fontSize='xs' fontWeight='bold'>Loaded {edges.length} of {pageInfo.total} PAPs</Text>
      </HStack>
    </>
  )

  const ListFooterComponent = () => (
    <Center p={3}>
      {
        !pageInfo?.hasNextPage && <Text>END OF LIST</Text>
      }
    </Center>
  )
  
  const ItemSeparatorComponent = () => (
    <Divider
      color={Colors.secondary}
      _light={{
        bg: 'muted.500',
      }}
      _dark={{
        bg: 'muted.50',
      }}
      width={0.3}
    />
  );

  const ListEmptyComponent = () => (
    <Center flex={1}>
      <VStack space={3}>
        <Image
          rounded={10}
          source={require('../assets/empty.png')}
          size={100}
          alt="empty"
        />
        <Text mt={3} fontWeight="bold">
          Nothing here
        </Text>
        <Button
          size="sm"
          // onPress={fetchData}
          rounded="full"
          bg={Colors.secondary}
          _pressed={{
            bg: Colors.secondary,
          }}>
          Refresh
        </Button>
      </VStack>
    </Center>
  );
  
  //  onPress={() => navigation.navigate('Project', {
  //         uuid: item?.node?.uuid
  //       })}
  const renderItem = ({item, index, separators}) => {
    
    const formattedNumber = number => number?.toLocaleString();
    
    const { title, office: { acronym }, totalCost, updatedAt, pipsStatus } = item;
    
    return (
      <Pressable>
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
      </Pressable>
    );
  };
  
  const toast = useToast()
  
  const onEndReached = () => {
    if (!pageInfo.hasNextPage) return
    
    toast.show({
      title: <Spinner color={Colors.secondary} />
    })
    
    loadMore()
  }

  if (loading)
    return (
      <Center flex={1}>
        <ActivityIndicator color={Colors.secondary} />
      </Center>
    );

  if (error) return <ErrorComponent />;

  return (
    <FlatList
        keyExtractor={item => item.uuid}
        stickyHeaderIndices={[0]}
        renderItem={renderItem}
        data={edges}
        showsVerticalScrollIndicator={false}
        initialNumToRender={10}
        ListHeaderComponent={ListHeaderComponent}
        // ListFooterComponent={ListFooterComponent}
        ListEmptyComponent={ListEmptyComponent}
        ItemSeparatorComponent={ItemSeparatorComponent}
        onEndReached={onEndReached}
        // onEndReachedThreshold={0.8}
      />
  );
}
