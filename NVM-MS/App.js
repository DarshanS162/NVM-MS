import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigator/AppNavigator';
import { NavigationContainer } from '@react-navigation/native'; 
import { customStyle } from './src/custom/styles';

export default function App() {
  return (
    <View style={customStyle.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
