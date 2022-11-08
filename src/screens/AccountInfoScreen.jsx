import {Box, Text, Input, Button, Spinner} from 'native-base';
import React, {useState} from 'react';
import {SectionTitle} from './NewProjectScreen';
import {Colors} from '../constants/colors';
import {useAuth} from '../contexts/auth.context';

export default function AccountInfoScreen() {
  const [loading, setLoading] = useState(false);

  const {currentUser, updateProfile} = useAuth();

  const [accountInfo, setAccountInfo] = useState({
    ...currentUser,
  });

  const onPress = () => {
    updateProfile(accountInfo);

    setLoading(true);
    console.log('onPress');
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <Box flex={1}>
      <SectionTitle title="Account Information" />

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color="#999999">
          FIRST NAME
        </Text>

        <Input
          type="text"
          fontSize={12}
          fontWeight="bold"
          placeholder="Juan"
          variant="underlined"
          _focus={{
            borderColor: Colors.secondary,
          }}
          onChangeText={val =>
            setAccountInfo(prev => ({
              ...prev,
              first_name: val,
            }))
          }
          value={accountInfo.first_name}
        />
      </Box>

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color="#999999">
          LAST NAME
        </Text>

        <Input
          type="text"
          fontSize={12}
          fontWeight="bold"
          placeholder="dela Cruz"
          variant="underlined"
          _focus={{
            borderColor: Colors.secondary,
          }}
          onChangeText={val =>
            setAccountInfo(prev => ({
              ...prev,
              last_name: val,
            }))
          }
          value={accountInfo.last_name}
        />
      </Box>

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color="#999999">
          POSITION
        </Text>

        <Input
          type="text"
          fontSize={12}
          fontWeight="bold"
          placeholder="Position"
          variant="underlined"
          _focus={{
            borderColor: Colors.secondary,
          }}
          onChangeText={val =>
            setAccountInfo(prev => ({
              ...prev,
              position: val,
            }))
          }
          value={accountInfo.position}
        />
      </Box>

      <Box p={2} bg={Colors.white}>
        <Text fontSize={10} color="#999999">
          CONTACT NUMBER
        </Text>

        <Input
          type="text"
          fontSize={12}
          fontWeight="bold"
          placeholder="(02) 1234 5678"
          variant="underlined"
          _focus={{
            borderColor: Colors.secondary,
          }}
          onChangeText={val =>
            setAccountInfo(prev => ({
              ...prev,
              contact_number: val,
            }))
          }
          value={accountInfo.contact_number}
        />
      </Box>

      <Box p={2} alignItems="center">
        <Button
          onPress={onPress}
          w="60%"
          rounded="full"
          bg={Colors.secondary}
          disabled={loading}
          _pressed={{
            bg: Colors.secondary,
          }}>
          {loading ? <Spinner color={Colors.white} /> : 'UPDATE PROFILE'}
        </Button>
      </Box>
    </Box>
  );
}
