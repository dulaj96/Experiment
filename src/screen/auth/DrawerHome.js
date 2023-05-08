import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const DrawerHome = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {}}>
        <Text style={{textAlign: 'center', fontSize: 16, color: '#fff'}}>
          Drawer
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: '#3262a8',
    padding: 15,
    width: 150,
    margin: 5,
  },
});

export default DrawerHome;
