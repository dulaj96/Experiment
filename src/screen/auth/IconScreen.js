import { 
    View, 
    Text,
    StyleSheet,
 } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const IconScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text>IconScreen</Text> */}
      <MaterialCommunityIcons name="bell" color='#fc1703' size={20} /> 
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
});

export default IconScreen;