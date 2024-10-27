import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';  
import HomeScreen from './HomeScreen';   
import RegisterScreen from './RegisterScreen';
import ForgetScreen from './ForgetScreen';
import ProfileScreen from './ProfileScreen';
import SetTimeScreen from './SetTimeScreen';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
//App
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Icon name="person-circle-outline" size={30} color="#000" style={{ marginRight: 10 }} />
            </TouchableOpacity>
          ),
        })} />
        <Stack.Screen name="Regis" component={RegisterScreen} />
        <Stack.Screen name="Forget" component={ForgetScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="SetTime" component={SetTimeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;