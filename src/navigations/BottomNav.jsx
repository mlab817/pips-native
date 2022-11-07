import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SettingScreen from '../screens/SettingScreen';
import {Colors} from '../constants/colors';
import {Center, Pressable, Text} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ReportScreen from '../screens/ReportScreen';
import NewProjectScreen from '../screens/NewProjectScreen';
import ProjectNav from './ProjectNav';
import SettingNav from './SettingNav';
import ProjectsNav from './ProjectsNav';
import {useIsFocused} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const CustomTab = props => {
  console.log('CustomTab props', props);
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
  const onPress = () => console.log('onPress');

  return (
    <Tab.Navigator
      initialRouteName="NewProjectScreen"
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
        }}
      />

      <Tab.Screen
        name="ProjectsNav"
        component={ProjectsNav}
        options={{
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
        name="NewProjectNav"
        component={ProjectNav}
        options={{
          tabBarButton: props => <CustomTab {...props} />,
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="add-circle"
              size={30}
              color={focused ? Colors.secondary : Colors.black}
            />
          ),
          tabBarLabel: () => null,
          title: 'New Project',
          headerShown: false,
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
