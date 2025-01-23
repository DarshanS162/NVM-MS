import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput} from 'react-native';
import AppNavigator from './src/navigator/AppNavigator';
import { NavigationContainer } from '@react-navigation/native'; 
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;
export default function App() {
    const [fontsLoaded] = useFonts({
      'Montserrat-Regular': require('./src/custom/fonts/Montserrat-Regular.ttf'),
    });
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
      async function prepare() {
        if (fontsLoaded) {
          // Hide the splash screen once fonts are loaded
          await SplashScreen.hideAsync();
          setAppIsReady(true);
        }
      }
  
      prepare();
    }, [fontsLoaded]);
  
    if (!appIsReady) {
      return null; // This ensures nothing is rendered until fonts are ready
    }
   
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
      
    </>
  );
}

const styles = StyleSheet.create({

});
