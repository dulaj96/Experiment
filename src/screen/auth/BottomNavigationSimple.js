import { 
    View, 
    Text,
    StyleSheet,
 } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconScreen from './IconScreen';
import DarkLight from './DarkLight';

const Tab = createBottomTabNavigator();

const FirstScreen =() => {
  return(
    <IconScreen />
  );
}

const SecondScreen =() => {
  return(
    <DarkLight />
  );
}

const BottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{headerShown: false}} name="First" component={FirstScreen} />
      <Tab.Screen options={{headerShown: false}} name="Second" component={SecondScreen} />
    </Tab.Navigator>
  )
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff'
//     }
// });

export default BottomNavigation;