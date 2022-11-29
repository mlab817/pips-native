import React from 'react';
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import ProjectsScreen from '../screens/ProjectsScreen';
import ProjectScreen from '../screens/ProjectScreen';
import PdfScreen from "../screens/PdfScreen";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Button, Icon, IconButton } from "native-base";
import { Colors } from "../constants/colors";
import { Share } from 'react-native'

const Stack = createStackNavigator();

export default function ProjectsNav() {
  return (
    <Stack.Navigator
      initialRouteName="Projects">
      <Stack.Group>
        <Stack.Screen name="Projects" component={ProjectsScreen} options={{
          headerShown: false
        }} />
      </Stack.Group>
      <Stack.Group options={{
        presentation: 'modal',
      }}>
        <Stack.Screen name="Project" component={ProjectScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Pdf" component={PdfScreen} options={{
          headerShown: false
        }} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
