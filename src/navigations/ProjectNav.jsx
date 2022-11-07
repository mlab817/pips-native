import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import DASpecificInformation from '../components/NewProject/DASpecificInformation';
import GeneralInformation from '../components/NewProject/GeneralInformation';
import ImplementingUnits from '../components/NewProject/ImplementingUnits';
import SpatialCoverage from '../components/NewProject/SpatialCoverage';
import ProgrammingDocuments from '../components/NewProject/ProgrammingDocuments';
import NewProjectScreen from '../screens/NewProjectScreen';
import LevelOfApproval from '../components/NewProject/LevelOfApproval';
import SelectModal from '../components/SelectModal';
import {Colors} from '../constants/colors';
import MultiSelect from '../components/MultiSelect';

const Stack = createStackNavigator();

export default function ProjectNav() {
  return (
    <Stack.Navigator initialRouteName="NewProject">
      <Stack.Screen
        name="NewProject"
        component={NewProjectScreen}
        options={{
          headerShown: true,
          headerTitle: 'New Project',
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
          presentation: 'modal',
          ...TransitionPresets.SlideFromRightIOS,
        }}>
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
        <Stack.Screen
          name="ProgrammingDocuments"
          component={ProgrammingDocuments}
          options={{
            title: 'Programming Documents',
          }}
        />
        <Stack.Screen
          name="LevelOfApproval"
          component={LevelOfApproval}
          options={{
            title: 'Level of Approval',
          }}
        />
      </Stack.Group>

      <Stack.Group
        options={{
          presentation: 'modal',
        }}>
        <Stack.Screen
          name="Select"
          component={SelectModal}
          options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
        <Stack.Screen
          name="SelectMultiple"
          component={MultiSelect}
          options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
