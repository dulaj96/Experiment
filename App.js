import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import DarkLight from './src/screen/auth/DarkLight';
import Router from './src/router/Router';
import Home from './src/screen/auth/Home';
import MapScreen from './src/screen/auth/MapScreen';
import IconScreen from './src/screen/auth/IconScreen';
import BottomNavigationComplex2 from './src/screen/auth/BottomNavigationComplex2';
import BottomNavigationSimple from './src/screen/auth/BottomNavigationSimple';
import BottomNavigationComplex from './src/screen/auth/BottomNavigationComplex';
import DropDownScreen from './src/screen/auth/DropDownScreen';
import PhotoCrop from './src/screen/auth/PhotoCrop';
import EditProfile from './src/screen/auth/EditProfile';
import DataPass from './src/screen/auth/DataPass';
import DrawerNavigation from './src/router/DrawerNavigation';
import Submit from './src/screen/auth/Submit';
import Details from './src/screen/auth/Details';


const App = () => {
  return (
    <Router />
  )
}


export default App;