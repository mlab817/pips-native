import { ArrowBackIcon, Box, Divider, HStack, Input, ScrollView, Spinner, Text, VStack } from "native-base";
import React from 'react';
import { gql, useQuery } from "@apollo/client";
import { Colors } from "../constants/colors";
import LoadingScreen from "./LoadingScreen";

const GET_PROJECT_BY_UUID = gql`
  query getProject($uuid: String!) {
    project(uuid: $uuid) {
      id
      title
      totalCost
      type {
        name
      }
      office {
        acronym
      }
      description
      expectedOutputs
      startYear
      endYear
      readinessLevel {
        name
      }
      fundingSource {
        name
      }
      passesValidation
      checklist {
        id
      }
    }
  }
`

export default function ProjectScreen({ route, navigation }) {
  const { uuid } = route.params
  
  console.log('uuid: ', uuid)
  
  const { loading, error, data, } = useQuery(GET_PROJECT_BY_UUID, {
    variables: {
      uuid: uuid
    }
  })
  
  console.log(data)
  
  const handleBackPress = () => navigation.goBack()
  
  if (loading) return <LoadingScreen />
  
  return (
    <Box flex={1}>
      <HStack space={3} alignItems='center' px={2} py={3} bg={Colors.secondary}>
        <ArrowBackIcon ml={2} color={Colors.white} onPress={handleBackPress}/>
        <Text w='90%' fontWeight='bold' isTruncated color={Colors.white}>{data.project?.title}</Text>
      </HStack>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={1} bg={Colors.white} my={3} mx={1} borderRadius={10}>
          <Box p={2}>
            <Text fontSize={10}>Title</Text>
            <Text fontSize={12} fontWeight='bold'>{data.project?.title}</Text>
          </Box>
          
          <Divider />
    
          <Box p={2}>
            <Text fontSize={10}>Type</Text>
            <Text fontSize={12} fontWeight='bold'>{data.project?.type?.name}</Text>
          </Box>
    
          <Divider />
    
          <Box p={2}>
            <Text fontSize={10}>Description</Text>
            <Text fontSize={12} fontWeight='bold'>{data.project?.description}</Text>
          </Box>
    
          <Divider />
    
          <Box p={2}>
            <Text fontSize={10}>Expected Outputs/Deliverables</Text>
            <Text fontSize={12} fontWeight='bold'>{data.project?.expectedOutputs}</Text>
          </Box>
  
          <Divider />
  
          <Box p={2}>
            <Text fontSize={10}>Implementation Period</Text>
            <Text fontSize={12} fontWeight='bold'>{`${data.project?.startYear} - ${data.project?.endYear}`}</Text>
          </Box>
  
          <Divider />
  
          <Box p={2}>
            <Text fontSize={10}>Level of Readiness</Text>
            <Text fontSize={12} fontWeight='bold'>{data.project?.readinessLevel?.name}</Text>
          </Box>
  
          <Divider />
  
          <Box p={2}>
            <Text fontSize={10}>Main Funding Source</Text>
            <Text fontSize={12} fontWeight='bold'>{data.project?.fundingSource?.name}</Text>
          </Box>
        </VStack>
      </ScrollView>
    </Box>
  );
}
