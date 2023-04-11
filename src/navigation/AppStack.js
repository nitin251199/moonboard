import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import ChangePass from '../screens/ProfileScreens/ChangePass';
import EditProfile from '../screens/ProfileScreens/EditProfile';
import MyProfile from '../screens/ProfileScreens/MyProfile';
import {Dimension} from '../theme';
import CustomDrawer from './CustomDrawer';
import * as NavigationRef from './NavigationRef';
import TabNavigator from './TabNavigator';
import OffenderScreen from '../screens/ListScreens/OffenderScreen';

const Drawer = createDrawerNavigator();
const ProfileStack = createNativeStackNavigator();

const ProfileStackScreens = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ProfileStack.Screen name="MyProfile" component={MyProfile} />
      <ProfileStack.Screen name="EditProfile" component={EditProfile} />
      <ProfileStack.Screen name="ChangePass" component={ChangePass} />
    </ProfileStack.Navigator>
  );
};

export default function AppStack(ref) {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#2B3551',
          width: Dimension.window.width * 0.8,
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Tabs" component={TabNavigator} />
      <Drawer.Screen name="ProfileStack" component={ProfileStackScreens} />
      {/* <Drawer.Screen name="OffenderScreen" component={OffenderScreen} /> */}
    </Drawer.Navigator>
  );
}
