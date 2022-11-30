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
      <Stack.Group>
        <Stack.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            headerShown: false,
            headerTitle: 'Settings',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: Colors.white,
            },
            headerStyle: {
              backgroundColor: Colors.secondary,
            }
          }}
        />
      </Stack.Group>
      
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
          headerMode: 'screen',
          gestureEnabled: true,
          // headerStyle: {
          //   backgroundColor: Colors.secondary,
          // },
          // headerTintColor: Colors.secondary,
          headerTitleAlign: 'center',
          // headerBackTitleStyle: {
          //   fontSize: 12,
          //   color: Colors.white
          // },
          // headerTitleStyle: {
          //   fontSize: 14,
          //   color: Colors.white
          // },
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen
          name="AccountInfo"
          component={AccountInfoScreen}
          options={{
            // headerShown: false,
            headerTitle: 'Account Information',
          }}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePasswordScreen}
          options={{
            // headerShown: false,
            headerTitle: 'Change Password',
          }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{
            // headerShown: false,
            headerTitle: 'About',
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
