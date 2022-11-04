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

const Tab = createBottomTabNavigator();

const CustomTab = props => {
  console.log(props.focused);

  return (
    <Pressable
      onPress={props.onPress}
      h={60}
      w={60}
      rounded="full"
      bg={Colors.white}
      top={-30}
      borderColor={Colors.secondary}
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
        headerShown: false,
        tabBarActiveTintColor: Colors.secondary,
        // tabBarShowLabel: false,
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
        }}
      />

      <Tab.Screen
        name="Projects"
        component={ProjectsScreen}
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
          // tabBarIcon: ({ focused }) => (<Center>{
          // 	focused
          // 		? <MaterialIcons name='add-circle' size={24} color={Colors.secondary} />
          // 		: <MaterialIcons name='add-circle' size={24} color={Colors.black} />
          // }</Center>)
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
        component={SettingScreen}
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
        }}
      />
    </Tab.Navigator>
  );
}
