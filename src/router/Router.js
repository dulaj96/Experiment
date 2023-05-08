import {View, Text} from 'react-native';
import React from 'react';
import DarkLight from '../screen/auth/DarkLight';
import Home from '../screen/auth/Home';
import MapScreen from '../screen/auth/MapScreen';
import IconScreen from '../screen/auth/IconScreen';
import BottomNavigationSimple from '../screen/auth/BottomNavigationSimple';
import BottomNavigationComplex from '../screen/auth/BottomNavigationComplex';
import BottomNavigationComplex2 from '../screen/auth/BottomNavigationComplex2';
import DropDownScreen from '../screen/auth/DropDownScreen';
import PhotoCrop from '../screen/auth/PhotoCrop';
import EditProfile from '../screen/auth/EditProfile';
import Submit from '../screen/auth/Submit';
import Details from '../screen/auth/Details';
import DataPass from '../screen/auth/DataPass';
import DrawerNavigation from './DrawerNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="DarkLight" component={DarkLight} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="IconScreen" component={IconScreen} />
        <Stack.Screen
          name="BottomNavigationSimple"
          component={BottomNavigationSimple}
        />
        <Stack.Screen
          name="BottomNavigationComplex"
          component={BottomNavigationComplex}
        />
        <Stack.Screen
          name="BottomNavigationComplex2"
          component={BottomNavigationComplex2}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="DropDownScreen"
          component={DropDownScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="PhotoCrop"
          component={PhotoCrop}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="EditProfile"
          component={EditProfile}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="DataPass"
          component={DataPass}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Submit"
          component={Submit}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Details"
          component={Details}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="DrawerNavigation"
          component={DrawerNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
