import React, {useState} from "react";
import {Box, Button, Center, Heading, Icon, Image, Input, Pressable, Text, VStack} from "native-base";
import {Strings} from "../constants/strings";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from "../constants/colors";
import ForgotPasswordModal from "../components/ForgotPasswordModal";

export default function LoginScreen({ navigation }) {
	const [show, setShow] = useState(false)
	
	return (<Box flex={1} safeArea>
		<Box w='full' h='full' bg='#fff' px={3} justifyContent='center' alignItems='center'>
			<Image source={require('../assets/icon.png')} alt='icon' w='128' h='128' mb={2} />
			{/*<Heading fontSize={16} fontWeight='semibold' color={'#000'}>{Strings.appName}</Heading>*/}
			<Heading fontSize={16} fontWeight='semibold' color={'#000'}>{Strings.login}</Heading>
			<VStack space={3} alignItems='center' py={5}>
				<Input
					w='80%'
					type='email'
					placeholder='email@example.com'
					variant='underlined'
					pl={2}
					autoCapitalize={false}
					InputLeftElement={<Icon as={<MaterialIcons name='email' size={5} />} ml='2' />} />
				<Input
					w='80%'
					type={show ? 'text' : 'password'}
					placeholder='********'
					variant='underlined'
					pl={2}
					InputLeftElement={<Icon as={<MaterialIcons name='lock' size={5} />} ml='2' />}
					InputRightElement={<Icon as={<MaterialIcons name={show ? 'visibility-off' : 'visibility'} size={5} />} onPress={() => setShow(!show)}/>}
				/>
			</VStack>
			<Button w='30%' bg={Colors.main} color={Colors.white} rounded='full' _pressed={{
				bg: Colors.main
			}} onPress={() => navigation.navigate('Bottom')}>
				SIGN IN
			</Button>
			
			<ForgotPasswordModal />
		</Box>
		
		<Text position='absolute' bottom={1} right={1} fontSize={10} color={'#999999'}>
			v1.0.0-official
		</Text>
	</Box>)
}
