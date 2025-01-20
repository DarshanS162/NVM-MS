import React from 'react';
import { Text, TextInput, StyleSheet, ActivityIndicator, View } from 'react-native';
import { useFonts } from 'expo-font';

const CustomTextAndInput = ({ type, children, fontStyle = 'regular', placeholder, style, ...props }) => {
  // Load the fonts
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('../custom/fonts/Montserrat-Regular.ttf'),
  });

  // Show loading indicator while fonts are loading
  if (!fontsLoaded) {
    return (
      <View style={[styles.loadingContainer, style]}>
      </View>
    );
  }

  if (type === 'text') {
    // Render Text Component
    return (
      <Text style={[{ fontFamily: fontStyle === 'bold' ? 'Montserrat-Bold' : 'Montserrat-Regular' }, style]}>
        {children}
      </Text>
    );
  } else if (type === 'input') {
    // Render TextInput Component
    return (
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#888"
        style={[{ fontFamily: 'Montserrat-Regular' }, styles.input, style]}
        {...props}
      />
    );
  }

  return null;
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomTextAndInput;
