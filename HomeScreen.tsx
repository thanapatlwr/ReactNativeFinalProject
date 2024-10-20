import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation}:any) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Home Page</Text>
      <Button title="Logout" onPress={() => navigation.navigate('Login')} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Time" onPress={() => navigation.navigate('Time')} />
    </View>
  );
};

export default HomeScreen;