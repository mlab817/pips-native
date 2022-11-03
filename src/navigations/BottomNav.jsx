import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import NotificationScreen from "../screens/NotificationScreen";
import SettingScreen from "../screens/SettingScreen";
import {Colors} from "../constants/colors";
import {Center, Text} from "native-base";
import {AntDesign, Entypo, MaterialIcons} from "@expo/vector-icons";

const Tab = createBottomTabNavigator()

export default function BottomNav() {
	return (
		<Tab.Navigator initialRouteName='Home' screenOptions={{
			headerShown: false,
			tabBarActiveTintColor: Colors.secondary
		}}>
			<Tab.Screen
				name='Home'
				component={HomeScreen}
				options={{
					tabBarIcon: ({ focused }) => (<Center>{
						focused
							? <MaterialIcons name='home' size={24} color={Colors.secondary} />
							: <MaterialIcons name='home' size={24} color={Colors.black} />
					}</Center>)
				}}
			/>
			
			<Tab.Screen
				name='Projects'
				component={ProjectsScreen}
				options={{
					tabBarIcon: ({ focused }) => (<Center color={focused ? Colors.secondary : Colors.black}>{
						focused
							? <MaterialIcons name='list-alt' size={24} color={Colors.secondary} />
							: <MaterialIcons name='list-alt' size={24} color={Colors.black} />
					}</Center>),
				}}
			/>
			
			<Tab.Screen
				name='Notifications'
				component={NotificationScreen}
				options={{
					tabBarIcon: ({ focused }) => (<Center>{
						focused
							? <MaterialIcons name='notifications' size={24} color={Colors.secondary} />
							: <MaterialIcons name='notifications' size={24} color={Colors.black} />
					}</Center>)
				}}
			/>
			
			<Tab.Screen
				name='Settings'
				component={SettingScreen}
				options={{
					tabBarIcon: ({ focused }) => (<Center>{
						focused
							? <MaterialIcons name='settings' size={24} color={Colors.secondary} />
							: <MaterialIcons name='settings' size={24} color={Colors.black} />
					}</Center>)
				}}
			/>
		</Tab.Navigator>
	)
}