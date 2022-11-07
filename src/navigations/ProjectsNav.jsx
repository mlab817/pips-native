import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ProjectsScreen from '../screens/ProjectsScreen';
import ProjectScreen from '../screens/ProjectScreen';

const Stack = createStackNavigator();

export default function ProjectsNav() {
  return (
    <Stack.Navigator
      initialRouteName="Projects"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Projects" component={ProjectsScreen} />
      <Stack.Screen name="Project" component={ProjectScreen} />
    </Stack.Navigator>
  );
}
