import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const Details = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [comment, setComment] = useState('');

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.action}>
        <FontAwesome name="user-o" color="#666666" size={20} />
        <TextInput
          placeholder="Account Name"
          placeholderTextColor="#666666"
          autoCorrect={false}
          style={[styles.textInput, {}]}
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={styles.action}>
        <Feather name="phone" color="#666666" size={20} />
        <TextInput
          placeholder="Phone"
          placeholderTextColor="#666666"
          keyboardType="number-pad"
          autoCorrect={false}
          style={[styles.textInput, {}]}
          value={number}
          onChangeText={setNumber}
        />
      </View>
      <View style={styles.action}>
        <Feather name="message-circle" color="#666666" size={20} />
        <TextInput
          placeholder="Comment"
          placeholderTextColor="#666666"
          autoCorrect={false}
          style={[styles.textInput, {}]}
          value={comment}
          onChangeText={setComment}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate({
              name: 'Extra',
              params: {
                post: {
                    name: name, 
                    number: number,
                    comment: comment
                    }
              },
              merge: true,
            })
          }>
          <Text style={{textAlign: 'center', fontSize: 16, color: '#fff'}}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    paddingLeft: 10,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#3262a8',
    padding: 15,
    width: 150,
    margin: 5,
  },
});

export default Details;
