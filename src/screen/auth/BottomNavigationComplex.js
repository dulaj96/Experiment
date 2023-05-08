import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconScreen from './IconScreen';
import DarkLight from './DarkLight';
import MapScreen from './MapScreen';

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

const BottomNavigationComplex = () => {

  const [activeTab, setActiveTab] = React.useState();
  const [activeSize, setActiveSize] = React.useState();

  return (
    <Tab.Navigator
      initialRouteName="FirstScreen"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        // tabBarActiveBackgroundColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="FirstScreen"
        component={FirstScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <TouchableOpacity onPress={() => {
              console.log('active is home');
              setActiveTab('Home'),
              setActiveSize('Home')
              }}>
              <MaterialCommunityIcons name="home" color={activeTab === 'Home' ? 'green' : 'blue'} size={activeSize === 'Home' ? 27 : 15} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="SecondScreen"
        component={SecondScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <TouchableOpacity onPress={() => {
              console.log('active is updates');
              setActiveTab('Updates'),
              setActiveSize('Updates')
            }}>
              <MaterialCommunityIcons name="bell" color={activeTab === 'Updates' ? 'green' : 'blue'} size={activeSize === 'Updates' ? 27 : 15} />
            </TouchableOpacity>
          ),
          tabBarBadge: 1,
        }}
      />
      <Tab.Screen
        name="ThirdScreen"
        component={ThirdScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <TouchableOpacity onPress={() => {
              setActiveTab('Profile'),
              setActiveSize('Profile')
            }}>
              <MaterialCommunityIcons name="account" color={activeTab === 'Profile' ? 'green' : 'blue'} size={activeSize === 'Profile' ? 27 : 15} />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigationComplex;