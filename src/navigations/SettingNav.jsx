import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SettingScreen from '../screens/SettingScreen';
import AccountInfoScreen from '../screens/AccountInfoScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import AboutScreen from '../screens/AboutScreen';
import {Colors} from '../constants/colors';

const Stack = createStackNavigator();

export default function SettingNav() {
  return (
    <Stack.Navigator initialRouteName="Setting">
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          headerShown: true,
          headerTitle: 'Settings',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: Colors.white,
          },
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
          headerLeft: () => <></>,
        }}
      />
      <Stack.Group
        screenOptions={{
          // headerShown: false,
          presentation: 'modal',
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
          headerTintColor: Colors.white,
          headerTitleAlign: 'center',
          // headerBackTitleStyle: {
          //   fontSize: 14,
          // },
          headerTitleStyle: {
            fontSize: 16,
          },
        }}>
        <Stack.Screen
          name="AccountInfo"
          component={AccountInfoScreen}
          options={{
            // headerShown: false,
            headerTitle: 'Account Information',
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePasswordScreen}
          options={{
            // headerShown: false,
            headerTitle: 'Change Password',
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{
            // headerShown: false,
            headerTitle: 'About',
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
