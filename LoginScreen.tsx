import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
<<<<<<< HEAD
const LoginScreen = ({ navigation }:any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
=======

const LoginScreen = ({ navigation }:any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

>>>>>>> d2f1642850f7ded464d87873a172ead858137e8a
  const LoginToHome = () => {
    if (email === 'phet' && password === '123') {
      navigation.navigate('Home');
    } else {
      alert('Invalid credentials');
    }
  };
  const LoginToRegis = () => {
      navigation.navigate('Regis');
     
  };
  const LoginToForget = () => {
    navigation.navigate('Forget');
   
};
<<<<<<< HEAD
=======

>>>>>>> d2f1642850f7ded464d87873a172ead858137e8a
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/sleepIcon.png')}
        style={styles.icon}
      />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={LoginToHome}>
            <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        
        
        <View style={styles.linkContainer}>
          <TouchableOpacity onPress={LoginToForget}>
            <Text style={styles.linkText}>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={LoginToRegis}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
<<<<<<< HEAD
=======

>>>>>>> d2f1642850f7ded464d87873a172ead858137e8a
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
  },
  icon: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  form: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  linkText: {
    color: '#000',
    textDecorationLine: 'underline',
  },
  registerText: {
    color: '#00f',
    textDecorationLine: 'underline',
  },
  button:{
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText:{
    color: 'white',
  }
});
<<<<<<< HEAD
=======

>>>>>>> d2f1642850f7ded464d87873a172ead858137e8a
export default LoginScreen;