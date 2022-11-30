import React, { memo, useEffect, useState } from "react";
import { ArrowBackIcon, Box, Divider, FlatList, HStack, Input, SearchIcon, Spinner, Text } from "native-base";
import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { Colors } from "../constants/colors";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import EmptyComponent from "../components/EmptyComponent";
import { err } from "react-native-svg/lib/typescript/xml";

const SEARCH_PROJECTS = gql`
  query searchProjects($search: String) {
    searchProjects(search: $search) {
      edges {
        node {
          id
          uuid
          title
          office {
            acronym
          }
        }
      }
      pageInfo {
        total
      }
    }
  }
`

const ListHeaderComponent = ({ value, onChangeText, handleBackPress }) => (
  <HStack space={3} justifyContent='space-between' alignItems='center' px={2} py={3} bg={Colors.white}>
    <ArrowBackIcon ml={2} color={Colors.secondary} onPress={handleBackPress}/>
    
    <Input placeholder='Search for programs & projects...' size='sm' _focus={{
      color: Colors.black,
      bg: Colors.lightGray,
      borderWidth: 0,
      fontWeight: 'bold'
    }} bg={Colors.lightGray} borderWidth={0} px={3} w='90%' value={value} onChangeText={onChangeText} />
  </HStack>
)

const ListSeparatorComponent = () => (<Divider
  color={Colors.secondary}
  _light={{
    bg: 'muted.500',
  }}
  _dark={{
    bg: 'muted.50',
  }}
  width={0.3}
/>)

export default function SearchScreen({ navigation }) {
  console.log('SearchScreen mounted')
  
  const [search, setSearch] = useState('')
  
  const [getData, { loading, error, data }] = useLazyQuery(SEARCH_PROJECTS, {
    variables: {
      search: search
    }
  })
  
  useEffect(() => { getData({
    variables: search
  })}, [search])
  
  const nodes = data?.searchProjects?.edges?.map(edge => edge.node)
  
  console.log('data: ', data)
  
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Project', { uuid: item.uuid })}>
      <Box h={16}>
        <HStack space={3} p={3}>
          <Text fontSize={10} w='20%'>{item.office?.acronym}</Text>
        
          <Text fontSize={10} w='75%' noOfLines={2} isTruncated>{item.title}</Text>
        </HStack>
      </Box>
    </TouchableOpacity>
  )
  
  const handleBackPress = () => navigation.goBack()
  
  if (error) return <Text>Something went wrong: Error No. {error.code}</Text>
  
  return (
    <FlatList
      keyExtractor={item => item.id}
      data={nodes}
      renderItem={renderItem}
      ListEmptyComponent={EmptyComponent}
      ListSeparatorComponent={ListSeparatorComponent}
      ListHeaderComponent={<ListHeaderComponent value={search} onChangeText={setSearch} handleBackPress={handleBackPress} />}
    />
  )
}
