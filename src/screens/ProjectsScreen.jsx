import React, {useEffect, useState} from 'react';
import {
  Alert,
  Badge,
  Box,
  Button,
  Center,
  Divider,
  FlatList,
  HStack,
  Icon,
  Image,
  Input,
  Pressable,
  Spinner,
  Text,
  useToast,
  VStack,
} from 'native-base';
import {Colors} from '../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import Animated, {LightSpeedInLeft} from 'react-native-reanimated';
import api from '../utils/api';
import {TouchableOpacity} from 'react-native-gesture-handler';

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);

const ListEmptyComponent = ({onPress}) => {
  return (
    <Center flex={1}>
      <Image
        rounded={10}
        source={require('../assets/empty.png')}
        size={100}
        alt="empty"
      />
      <Text mt={3} fontWeight="bold">
        Nothing here
      </Text>
      <Button onPress={onPress} mt={3}>
        Refresh
      </Button>
    </Center>
  );
};

export default function ProjectsScreen() {
  const [loading, setLoading] = useState(false);

  const [hasChanged, setHasChanged] = useState(false);

  const [search, setSearch] = useState('');

  const [projects, setProjects] = useState([]);

  const [filteredProjects, setFilteredProjects] = useState(projects);

  const [page, setPage] = useState(1);

  const loadProjects = async signal => {
    setLoading(true);

    try {
      const response = await api.get('/projects', {
        params: {
          page: page,
        },
        signal: signal,
      });

      setProjects(prevProjects => [...prevProjects, ...response.data.data]);

      setLoading(false);

      console.log('result loaded');
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('currentPage: ', page);

    const controller = new AbortController();

    loadProjects(controller.signal);

    return () => controller.abort();
  }, [page]);

  const nextPage = () => setPage(prevPage => prevPage + 1);

  useEffect(() => {
    if (search) {
      const updatedFilteredProjects = projects.filter(
        project =>
          project.title?.toLowerCase().includes(search.toLowerCase()) ||
          project.office?.acronym?.toLowerCase().includes(search.toLowerCase()),
      );

      setFilteredProjects(updatedFilteredProjects);
    } else {
      setFilteredProjects(projects);
    }
  }, [search, projects]);

  const renderItem = ({item, index, separators}) => (
    <Pressable onPress={() => alert(JSON.stringify(item))}>
      <HStack
        alignItems="flex-start"
        justifyContent="space-between"
        bg={Colors.white}
        p={2}
        h={24}
        overflow="hidden">
        <VStack w="70%">
          <Text
            isTruncated
            color={Colors.black}
            fontWeight="semibold"
            fontSize={12}
            noOfLines={2}>
            {item.title}
          </Text>
          <Text fontSize={11}>{item.office?.acronym}</Text>
        </VStack>
        <VStack
          w="30%"
          h="full"
          justifyContent="space-between"
          alignItems="flex-end">
          <Text isTruncated>PhP {item.total_cost?.toLocaleString()}</Text>

          <Text fontSize={10}>
            {moment(item.updated_at).format('MM/DD/YY HH:MM')}
          </Text>
        </VStack>
      </HStack>
      <Badge
        position="absolute"
        bottom={2}
        left={2}
        alignSelf="flex-start"
        variant="outline"
        _text={{
          fontSize: 10,
        }}>
        {item.pips_status?.name}
      </Badge>
    </Pressable>
  );

  const ListFooterComponent = () => (
    <Pressable onPress={nextPage}>
      <Center>
        <Text>
          {loading ? <Spinner color={Colors.secondary} /> : 'Load More...'}
        </Text>
      </Center>
    </Pressable>
  );

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

  return (
    <Box flex={1}>
      <HStack
        p={2}
        space={2}
        alignItems="center"
        justifyContent="space-between">
        <Input
          w="full"
          rounded={10}
          h={8}
          placeholder="Search..."
          InputLeftElement={
            <Icon as={<MaterialIcons name="search" size={5} />} ml="2" />
          }
          autoCapitalize={false}
          _focus={{
            bg: Colors.white,
            borderColor: Colors.white,
          }}
          color={Colors.black}
          bg={Colors.white}
          onChangeText={val => setSearch(val)}
        />
      </HStack>

      <Box pb={60}>
        <FlatList
          keyExtractor={item => item.key}
          renderItem={renderItem}
          data={filteredProjects}
          // onRefresh={onRefresh}
          refreshing={loading}
          // onEndReached={onEndReached}
          // onEndReachedThreshold={10}
          extraData={hasChanged}
          ListFooterComponent={ListFooterComponent}
          ListEmptyComponent={<ListEmptyComponent onPress={loadProjects} />}
          ItemSeparatorComponent={ItemSeparatorComponent}
        />
      </Box>
    </Box>
  );
}
