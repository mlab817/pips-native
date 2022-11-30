import React, { useCallback, useState } from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  FlatList,
  HStack,
  Image,
  Pressable,
  SearchIcon,
  Spinner,
  Text,
  useToast,
  VStack,
} from "native-base";
import {Colors} from '../constants/colors';
import { ActivityIndicator, TouchableOpacity } from "react-native";
import { useQuery, gql, NetworkStatus, useLazyQuery } from "@apollo/client";
import ErrorComponent from '../components/ErrorComponent';
import ProjectItem from "../components/ProjectItem";

const GET_PROJECTS = gql`
  query Projects(
    $first: Int
    $after: String
  ) {
    projects(
      first: $first,
      after: $after
    ) {
      pageInfo {
          endCursor
          hasNextPage
          total
      }
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

const ItemSeparatorComponent = (
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

export default function ProjectsScreen({ navigation }) {
  const {loading, error, data, refetch, networkStatus, fetchMore} = useQuery(GET_PROJECTS, {
    variables: {
      first: 25
    },
    fetchPolicy: 'cache-and-network',
    notifyOnNetworkStatusChange: true
  });
  
  const [endReachedCalledDuringMomentum, setEndReachedCalledDuringMomentum] = useState(true)
  
  const edges = data?.projects?.edges?.map(edge => edge.node) || []
  
  const pageInfo = data?.projects?.pageInfo || {}

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
  
  const toast = useToast()
  
  const onEndReached = () => {
    console.log('end reached triggered');
    console.log('onEndReached - endReachedCalledDuringMomentum: ', endReachedCalledDuringMomentum)
    
    try {
      if (endReachedCalledDuringMomentum) return
      
      if (!pageInfo.hasNextPage) return
  
      toast.show({
        title: <Spinner color={Colors.secondary} />
      })
  
      console.log('end reach called momentum')
  
      fetchMore({
        variables: {
          after: pageInfo?.endCursor,
          first: 25
        }
      }).finally(() => {
        console.log('fetchMore completed')
        setEndReachedCalledDuringMomentum(true)
        toast.closeAll();
      })
      // } else {
      //   console.log('endReachedCalledDuringMomentum is true')
      // }
  
      setEndReachedCalledDuringMomentum(true)
    } catch(err) {
      console.error(err)
    }
  }
  
  const onMomentumScrollBegin = () => setEndReachedCalledDuringMomentum(false)
  
  const refreshing = networkStatus === NetworkStatus.refetch
  
  const showProject = (item) => navigation.navigate('Project', {uuid: item.uuid})
  
  if (loading && edges.length === 0)
    return (
      <Center flex={1}>
        <ActivityIndicator color={Colors.secondary} />
      </Center>
    );

  if (error) return <ErrorComponent />;

  return (
    <FlatList
        keyExtractor={item => item.uuid}
        // stickyHeaderIndices={[0]}
        renderItem={({ item }) => <ProjectItem item={item} onPress={() => showProject(item)} />}
        data={edges}
        showsVerticalScrollIndicator={false}
        initialNumToRender={8}
        // ListHeaderComponent={ListHeaderComponent}
        // ListEmptyComponent={ListEmptyComponent}
        onRefresh={refetch}
        refreshing={refreshing}
        // ItemSeparatorComponent={ItemSeparatorComponent}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        onMomentumScrollBegin={onMomentumScrollBegin}
      />
  );
}
