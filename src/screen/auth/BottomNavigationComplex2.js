import { View, Text } from 'react-native';
import React from 'react';
import IconScreen from './IconScreen';
import DarkLight from './DarkLight';
import MapScreen from './MapScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const FirstScreen = () => {
  return(
    <IconScreen />
  );
}

const SecondScreen = () => {
  return(
    <DarkLight />
  );
}

const ThirdScreen = () => {
  return(
    <MapScreen />
  );
}

const BottomNavigationComplex2 = () => {
  return (
    <Tab.Navigator
      initialRouteName="SecondScreen"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="FirstScreen"
        component={FirstScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SecondScreen"
        component={SecondScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="ThirdScreen"
        component={ThirdScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomNavigationComplex2;