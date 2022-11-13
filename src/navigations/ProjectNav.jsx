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
import PdpChapter from '../components/NewProject/PdpChapter';
import TripRequirements from '../components/NewProject/TripRequirements';
import ExpectedOutputs from '../components/NewProject/ExpectedOutputs';
import EmploymentGeneration from '../components/NewProject/EmploymentGeneration';
import PhysicalFinancialStatus from '../components/NewProject/PhysicalFinancialStatus';
import FundingInformation from '../components/NewProject/FundingInformation';

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
        <Stack.Screen
          name="PdpChapter"
          component={PdpChapter}
          options={{
            title: 'PDP Chapter/s',
          }}
        />
        <Stack.Screen
          name="TripRequirements"
          component={TripRequirements}
          options={{
            title: 'Trip Requirements',
          }}
        />
        <Stack.Screen
          name="ExpectedOutputs"
          component={ExpectedOutputs}
          options={{
            title: 'Expected Outputs & Deliverables',
          }}
        />
        <Stack.Screen
          name="EmploymentGeneration"
          component={EmploymentGeneration}
          options={{
            title: 'Employment Generation',
          }}
        />
        <Stack.Screen
          name="FundingInformation"
          component={FundingInformation}
          options={{
            title: 'Funding Source & Mode of Implementation',
          }}
        />
        <Stack.Screen
          name="PhysicalFinancialStatus"
          component={PhysicalFinancialStatus}
          options={{
            title: 'Physical & Financial Status',
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
