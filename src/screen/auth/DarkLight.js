import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const DarkLight = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isDark, setIsDark] = React.useState(isDarkMode);

  return(
    <SafeAreaView style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: isDark ? 'black' : 'white'
    }}>
      <View>
        <Switch 
          value={isDark}
          onValueChange={val => setIsDark(val)}
        />
        <Text style={[styles.highlight, {color: isDark ? 'white' : 'black'}]}>Dulaj Mithun</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700'
  }
});

export default DarkLight;