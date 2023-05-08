import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer, useNavigation, useRoute} from '@react-navigation/native';

const DataPass = () => {

  const navigation = useNavigation();
  const route = useRoute();
  useEffect(() => {
    if(route.params?.post){

    }
  }, [route.params?.post])

  const [upName, setUpName] = useState('');

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Details')}>
        <Text style={{textAlign: 'center', fontSize: 16, color: '#fff'}}>
          Create Details
        </Text>
      </TouchableOpacity>
      <Text style={{marginTop: 10, fontSize: 16, fontWeight: 'bold'}} >
        Name: {route.params?.post.name} {'\n'}{'\n'}
        Phone: {route.params?.post.number} {'\n'}{'\n'}
        Comment: {route.params?.post.comment}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#3262a8',
    padding: 15,
    width: 150,
    margin: 5,
  },
});

export default DataPass;
