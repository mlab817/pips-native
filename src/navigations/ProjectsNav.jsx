import React from 'react';
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

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
      <Stack.Group>
        <Stack.Screen name="Projects" component={ProjectsScreen} />
      </Stack.Group>
      <Stack.Group options={{
        presentation: 'modal',
      }}>
        <Stack.Screen name="Project" component={ProjectScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
