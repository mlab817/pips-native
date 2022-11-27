import React from 'react';
import { Box, Center, Circle, FlatList, HStack, Stack, Text, VStack } from "native-base";
import {Colors} from '../constants/colors';
import { ActivityIndicator, Dimensions } from "react-native";
import {useQuery, gql} from '@apollo/client';
import { Search } from "./ProjectsScreen";
import {
  LineChart, PieChart,
} from "react-native-chart-kit";

const GET_STATUSES = gql`
  query {
    pipsStatuses {
      id
      name
      projectsCount
    }
  }
`;

const StatusItem = ({item}) => (
  <VStack alignItems='center'>
    <Circle
      mb={3}
      p={3}
      borderWidth={0}
      size='60px'
      bordered
      bg={Colors.secondary}
      borderColor={Colors.main}>
      <Text color={Colors.white} fontSize={18} fontWeight="bold">
        {item.projectsCount}
      </Text>
    </Circle>
    <Text color={Colors.secondary} fontWeight="semibold" fontSize='2xs'>
      {item.name}
    </Text>
  </VStack>
);

export default function HomeScreen({ navigation }) {
  const {loading, error, data} = useQuery(GET_STATUSES);

  console.log('home:error: ', error);

  console.log('home:data: ', data);
  
  const showSearch = () => navigation.navigate('Search')
  
  const chartWidth = Dimensions.get("window").width - 20

  if (loading)
    return (
      <Center flex={1}>
        <ActivityIndicator />
      </Center>
    );

  if (error)
    return (
      <Center flex={1}>
        <Text>{JSON.stringify(error)}</Text>
      </Center>
    );

  return (
    <>
      <Search onPress={showSearch} />
      
      <HStack p={3} justifyContent='space-between'>
        {
          data?.pipsStatuses?.map((item) => <StatusItem key={item.id} item={item} />)
        }
      </HStack>
  
      <Box alignItems='center'>
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
                ]
              }
            ]
          }}
          width={chartWidth} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
        
      </Box>
    </>
  );
}
