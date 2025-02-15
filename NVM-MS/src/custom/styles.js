import { Platform, StatusBar, StyleSheet } from 'react-native';


const COLORS = {
  primary: '#8569F4',
  secondary: '#2ecc71',
  background: '#FAFBFD',
  text: '#333333',
  primaryBorder:'#B8BEC6'
};

const FONTS = {
  regular: 'Montserrat-Regular',
  bold: 'Montserrat-Bold',
};

const customStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor:"#ffffff"
  },

});

export { COLORS, FONTS, customStyle };

