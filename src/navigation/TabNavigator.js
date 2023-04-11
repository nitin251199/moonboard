import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/MainScreens/HomeScreen';
import HomeIcon from '../assets/svg/home.svg';
import MapIcon from '../assets/svg/activeMap.svg';
import ListIcon from '../assets/svg/activeList.svg';
import ChatIcon from '../assets/svg/activeChat.svg';
import InActiveHomeIcon from '../assets/svg/inActiveHome.svg';
import InActiveMapIcon from '../assets/svg/inActiveMap.svg';
import InActiveListIcon from '../assets/svg/inActiveList.svg';
import InActiveChatIcon from '../assets/svg/inActiveChat.svg';
import MapScreen from '../screens/MapScreens/MapScreen';
import { Color } from '../theme';
import ListScreen from '../screens/ListScreens/ListScreen';
import MessageScreen from '../screens/MessageScreens/MessageScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OffenderScreen from '../screens/ListScreens/OffenderScreen';

const Tab = createBottomTabNavigator();
const ListStack = createNativeStackNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#F14336',
          height: 65,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          paddingHorizontal: 20,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <HomeIcon /> : <InActiveHomeIcon />,
          tabBarItemStyle: {
            marginHorizontal: 15,
          },
          tabBarIconStyle: ({focused}) => {
            return {
              borderBottomWidth: focused ? 5 : 0,
              borderColor: '#fff',
            };
          },
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <MapIcon /> : <InActiveMapIcon />,
          tabBarItemStyle: {
            marginHorizontal: 15,
          },
          tabBarStyle: {
            backgroundColor: '#F14336',
            height: 65,
            borderTopWidth: 1,
            borderTopColor: Color.primary,
            paddingHorizontal: 20,
          },
        }}
      />
      <Tab.Screen
        name="List"
        component={ListStackScreens}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ListIcon /> : <InActiveListIcon />,
          tabBarItemStyle: {
            marginHorizontal: 15,
          },
        }}
      />
      <Tab.Screen
        name="Chat"
        component={MessageScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ChatIcon /> : <InActiveChatIcon />,
          tabBarItemStyle: {
            marginHorizontal: 15,
          },
        }}
      />
    </Tab.Navigator>
  );
}

const ListStackScreens = () => {
  return (
    <ListStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ListStack.Screen name="ListScreen" component={ListScreen} />
      <ListStack.Screen name="OffenderScreen" component={OffenderScreen} options={{
        animation: 'fade_from_bottom',
      }}/>
    </ListStack.Navigator>
  );
}