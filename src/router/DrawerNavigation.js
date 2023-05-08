import {View, Text} from 'react-native';
import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerHome from '../screen/auth/DrawerHome';
import DrawerProfile from '../screen/auth/DrawerProfile';
import DrawerMessage from '../screen/auth/DrawerMessage';
import DrawerSetting from '../screen/auth/DrawerSetting';
import CustomDrawer from '../components/CustomDrawer';

import Feather from 'react-native-vector-icons/Feather';

const Drawer = createDrawerNavigator();

//Screens of drawer navigation
const FirstRow = () => {
  return <DrawerHome />;
};
const SecondRow = () => {
  return <DrawerProfile />;
};
const ThirdRow = () => {
  return <DrawerMessage />;
};
const FourthRow = () => {
  return <DrawerSetting />;
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="FirstRow"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea', //Active label eke background color eke
        drawerActiveTintColor: '#fff', //Active label eke icon and letters -- colors
        drawerInactiveTintColor: '#333', //Active nethi label wala icon and letters -- colors
        drawerLabelStyle: {marginLeft: -15, fontSize: 15},
      }}
      drawerContent={props => <CustomDrawer {...props} />} //drawerContent = customize our drawer navigation and samahara props  pass karanawa CustomDrawer component ekata
    >
      <Drawer.Screen
        name="FirstRow"
        component={FirstRow}
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({color}) => (
            <Feather name="home" color={color} size={22} />
          ),
        }}
      />
      <Drawer.Screen
        name="SecondRow"
        component={SecondRow}
        options={{
          drawerLabel: 'Profile',
          drawerIcon: ({color}) => (
            <Feather name="user" color={color} size={22} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ThirdRow}
        options={{
          drawerLabel: 'Messages',
          drawerIcon: ({color}) => (
            <Feather name="message-circle" color={color} size={22} />
          ),
        }}
      />
      <Drawer.Screen
        name="setting"
        component={FourthRow}
        options={{
          drawerLabel: 'setting',
          drawerIcon: ({color}) => (
            <Feather name="settings" color={color} size={22} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
