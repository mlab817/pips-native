import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Colors} from '../constants/colors';
import { Center, Pressable, Stack, Text } from "native-base";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {useIsFocused} from '@react-navigation/native';

import SettingNav from './SettingNav';
import ProjectsNav from './ProjectsNav';

import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SearchScreen from "../screens/SearchScreen";
import { TransitionPresets } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();

const CustomTab = props => {
  const isFocused = useIsFocused();

  return (
    <Pressable
      onPress={props.onPress}
      h={60}
      w={60}
      rounded="full"
      bg={isFocused ? Colors.white : Colors.white}
      top={-25}
      borderColor={isFocused ? Colors.secondary : Colors.black}
      borderWidth={3}
      shadow={2}>
      {props.children}
    </Pressable>
  );
};

export default function BottomNav() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors.secondary,
        // tabBarShowLabel: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: Colors.white,
        },
        headerStyle: {
          backgroundColor: Colors.secondary,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Center>
              {focused ? (
                <MaterialIcons name="home" size={24} color={Colors.secondary} />
              ) : (
                <MaterialIcons name="home" size={24} color={Colors.black} />
              )}
            </Center>
          ),
          tabBarHideOnKeyboard: true,
          headerShown: false
        }}
      />

      <Tab.Screen
        name="ProjectsNav"
        component={ProjectsNav}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Center color={focused ? Colors.secondary : Colors.black}>
              {focused ? (
                <MaterialIcons
                  name="list-alt"
                  size={24}
                  color={Colors.secondary}
                />
              ) : (
                <MaterialIcons name="list-alt" size={24} color={Colors.black} />
              )}
            </Center>
          ),
          title: 'Projects',
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Center>
              {focused ? (
                <MaterialIcons
                  name="notifications"
                  size={24}
                  color={Colors.secondary}
                />
              ) : (
                <MaterialIcons
                  name="notifications"
                  size={24}
                  color={Colors.black}
                />
              )}
            </Center>
          ),
          headerShown: false
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingNav}
        options={{
          tabBarIcon: ({focused}) => (
            <Center>
              {focused ? (
                <MaterialIcons
                  name="settings"
                  size={24}
                  color={Colors.secondary}
                />
              ) : (
                <MaterialIcons name="settings" size={24} color={Colors.black} />
              )}
            </Center>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
