import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DASpecificInformation from '../components/NewProject/DASpecificInformation';
import GeneralInformation from '../components/NewProject/GeneralInformation';
import ImplementingUnits from '../components/NewProject/ImplementingUnits';
import SpatialCoverage from '../components/NewProject/SpatialCoverage';
import NewProjectScreen from '../screens/NewProjectScreen';

const Stack = createNativeStackNavigator();

export default function ProjectNav() {
  return (
    <Stack.Navigator
      initialRouteName="NewProject"
      screenOptions={
        {
          // headerShown: false,
        }
      }>
      <Stack.Screen
        name="NewProject"
        component={NewProjectScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="GeneralInformation"
        component={GeneralInformation}
        options={{
          title: 'General Information',
        }}
      />
      <Stack.Screen
        name="ImplementingUnits"
        component={ImplementingUnits}
        options={{
          title: 'Implementing Units',
        }}
      />
      <Stack.Screen
        name="SpatialCoverage"
        component={SpatialCoverage}
        options={{
          title: 'Spatial Coverage',
        }}
      />
      <Stack.Screen
        name="DASpecificInformation"
        component={DASpecificInformation}
        options={{
          title: 'DA-Specific Information',
        }}
      />
    </Stack.Navigator>
  );
}
