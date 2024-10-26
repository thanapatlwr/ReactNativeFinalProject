import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';  
import HomeScreen from './HomeScreen';   
import RegisterScreen from './RegisterScreen';
import ForgetScreen from './ForgetScreen';
import ProfileScreen from './ProfileScreen';
import SetTimeScreen from './SetTimeScreen';

const Stack = createStackNavigator();
//App
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Regis" component={RegisterScreen} />
        <Stack.Screen name="Forget" component={ForgetScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="SetTime" component={SetTimeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;