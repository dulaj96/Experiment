import {View, Text} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const Submit = () => {

  const route = useRoute();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>Name: {route.params.name}</Text>
      <Text style={{fontSize: 20}}>Address: {route.params.address}</Text>
      <Text style={{fontSize: 20}}>Number: {route.params.number}</Text>
      <Text style={{fontSize: 20}}>Email: {route.params.email}</Text>
    </View>
  );
};

export default Submit;
