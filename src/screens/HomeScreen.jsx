import React from "react";
import {Box, Heading, HStack, Text, VStack} from "native-base";
import {Colors} from "../constants/colors";

const items = [{
	label: 'DRAFT',
	value: 32
},{
	label: 'FINALIZED',
	value: 24,
},{
	label: 'DROPPED',
	value: 4
},{
	label: 'DROPPED BY IPD',
	value: 0
},{
	label: 'TOTAL',
	value: 60
},{
	label: 'REMAINING',
	value: '24'
}]

export default function HomeScreen() {
	return (
		<Box flex={1} safeArea>
			<Heading mx={2}>Home</Heading>
			
			<VStack space={3} mt={5} px={2}>
				{
					items.map((item,index) => (
						<Box
							p={3}
							key={index}
							borderWidth={0}
							rounded={5}
							w='full'
							h={20}
							bordered
							bg={Colors.secondary}
							borderColor={Colors.main}>
							<HStack
								justifyContent='space-between'>
								<Text
									color={Colors.white}
									fontWeight='semibold'>
									{item.label}
								</Text>
								<Text
									color={Colors.white}
									fontSize={40}
									fontWeight='bold'>{item.value}</Text>
							</HStack>
						</Box>
					))
				}
			</VStack>
		</Box>
	)
}
