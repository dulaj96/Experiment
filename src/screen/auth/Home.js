import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
import { useNavigation } from '@react-navigation/native';
  
  const Home = () => {

    const navigation = useNavigation();

    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('DarkLight')}
          >
            <Text style={{textAlign:'center', fontSize:16, color:'#fff'}}>Dark</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('MapScreen')}
          >
            <Text style={{textAlign:'center', fontSize:16, color:'#fff'}}>Maps</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('IconScreen')}
          >
            <Text style={{textAlign:'center', fontSize:16, color:'#fff'}}>Icons</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('BottomNavigationSimple')}
          >
            <Text style={{textAlign:'center', fontSize:16, color:'#fff'}}>Bottom-Simple</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('BottomNavigationComplex')}
          >
            <Text style={{textAlign:'center', fontSize:16, color:'#fff'}}>Bottom-Complex-1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('BottomNavigationComplex2')}
          >
            <Text style={{textAlign:'center', fontSize:16, color:'#fff'}}>Bottom-Complex-2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('DropDownScreen')}
          >
            <Text style={{textAlign:'center', fontSize:16, color:'#fff'}}>Drop Down-List</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('PhotoCrop')}
          >
            <Text style={{textAlign:'center', fontSize:16, color:'#fff'}}>Photo Crop</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Extra')}
          >
            <Text style={{textAlign:'center', fontSize:16, color:'#fff'}}>Data Pass </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('DrawerNavigation')}
          >
            <Text style={{textAlign:'center', fontSize:16, color:'#fff'}}>Drawer-Navigation </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    button: {
      borderRadius: 10,
      backgroundColor: '#3262a8',
      padding: 15,
      width: 150,
      margin: 5
    }
  });
  
  export default Home;