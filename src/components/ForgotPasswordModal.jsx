import React, {useState} from "react";
import {Button, Icon, Input, Modal, Pressable, Text, VStack} from "native-base";
import {Colors} from "../constants/colors";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


export default function ForgotPasswordModal() {
	const [show, setShow] = useState(false)
	
	return (
		<>
			<Pressable mt={10} onPress={() => setShow(true)}>
				<Text color={'#999999'}>
					Forgot Password?
				</Text>
			</Pressable>
			
			<Modal isOpen={show}>
				<Modal.Content maxWidth={350}>
					<Modal.CloseButton onPress={() => setShow(false)} />
					<Modal.Header>Forgot Password</Modal.Header>
					<Modal.Body>
						<VStack space={3}>
							<Text>Forgot your password? No problem. Type in your email below and we will send
							you a link to reset your password.</Text>
							
							<Input
								placeholder='email@example.com'
								InputLeftElement={<Icon as={<MaterialIcons name='mail' />} size={5} ml={2} />}
								autoCapitalize={false}
							/>
						</VStack>
					</Modal.Body>
					<Modal.Footer>
						<Button
							flex={1}
							rounded='full'
							size='sm'
							bg={Colors.main}
							_text={{
								color: Colors.white
							}} onPress={() => {
							setShow(false)
						}}
							_pressed={{
								color: Colors.main
							}}
						>
							RESET PASSWORD
						</Button>
					</Modal.Footer>
				</Modal.Content>
			</Modal>
		</>
	)
}
