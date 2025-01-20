
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/common/Home'
import Login from '../screens/common/Login';
import Registration from '../screens/common/Registration';
import TeachersList from '../screens/principal/TeachersList';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Registration" component={Registration} options={{headerShown:false}} />
      <Stack.Screen name="Teachers" component={TeachersList} />

    </Stack.Navigator>
  )
}

export default AppNavigator