import React from "react";
import {Box, Heading, HStack, Image, Text, VStack} from "native-base";
import {Colors} from "../constants/colors";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function SettingScreen() {
	return (
		<>
			<Box>
				<Heading bg={Colors.secondary} px={2} pt={10} color={Colors.white}>Settings</Heading>
				
				<HStack
					bg={Colors.secondary}
					pt={3}
					pb={5}
					px={2}
					alignItems='center'
				>
					<Image
						source={{
							uri: 'https://icons-for-free.com/iconfiles/png/512/user+icon-1320190636314922883.png'
						}}
						alt='User'
						w={12}
						h={12}
						resizeMode='cover'
					/>
					<VStack ml={2}>
						<Heading
							bold
							fontSize={15}
							isTruncated
							color={Colors.white}>
							@janedoe
						</Heading>
						<Text
							italic
							fontSize={10}
							color={Colors.white}
						>
							Joined Dec 12 2022
						</Text>
					</VStack>
				</HStack>
			</Box>
			
			<Box mt={2} bg={Colors.white} alignItems='center'>
				<HStack w='full' justifyContent='space-between' alignItems='center' borderColor={'#999999'} borderBottomWidth={0.5} py={3} px={2}>
					<HStack space={2} alignItems='center'>
						<MaterialIcons name='person-outline' size={20} />
						<Text fontSize={12}>
							Account Information
						</Text>
					</HStack>
					<MaterialIcons name='arrow-forward-ios' />
				</HStack>
			</Box>
			
			<Box bg={Colors.white} alignItems='center'>
				<HStack w='full' justifyContent='space-between' alignItems='center' borderColor={'#999999'} borderBottomWidth={0.5} py={3} px={2}>
					<HStack space={2} alignItems='center'>
						<MaterialIcons name='lock-outline' size={20} />
						<Text fontSize={12}>
							Change Password
						</Text>
					</HStack>
					<MaterialIcons name='arrow-forward-ios' />
				</HStack>
			</Box>
			
			<Box mt={2} bg={Colors.white} alignItems='center'>
				<HStack w='full' justifyContent='space-between' alignItems='center' borderColor={'#999999'} borderBottomWidth={0.5} py={3} px={2}>
					<HStack space={2} alignItems='center'>
						<MaterialIcons name='help-outline' size={20} />
						<Text fontSize={12}>
							About
						</Text>
					</HStack>
					<MaterialIcons name='arrow-forward-ios' />
				</HStack>
			</Box>
		</>
		
	)
}
