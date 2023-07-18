import React from 'react';
import { View, TextInput, StyleSheet, Image, Text,Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { useNavigation} from '@react-navigation/native';

const LoginScreen = () => {

  const navigation = useNavigation();
  const handleLogin = () => {
    // Perform login logic here
  
    // Redirect to HomeScreen
    navigation.navigate('HomeScreen');
  };
  const handleForgorpassword = () => {
    // Perform login logic here
  
    // Redirect to Forgotscreen
    navigation.navigate('Forgotpassword');
  };
  const handleSignup = () => {
    // Perform login logic here
  
    // Redirect to Signupscreen
    navigation.navigate('Signup');
  };


  return (
    <View style={styles.container}>
      <Image source={require('./assets/BackGround.jpg')} style={styles.backgroundImage} />
      <View style={styles.formContainer}>
      <Text style={styles.text1}>Welcome to codeDOJO</Text>  
      <Text style={styles.text2}>Enter your login credential here..</Text>
        <View style={styles.direction}>
        <Icon name="user" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Username" />
        </View>
        <View style={styles.direction}>
        <Icon name="lock" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        </View>
        <Pressable style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText} >Login</Text>
        </Pressable>
        <Pressable onPress={handleForgorpassword}>
        <Text style={styles.text3}>Forgot you Password ?</Text>
        </Pressable>
        <Text style={styles.text4}>Don't have account yet ?</Text>
        <Text style={styles.text5}>Create an account here!</Text>
        <Pressable style={styles.signup} onPress={handleSignup}>
          <Text style={styles.loginButtonText}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  formContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
    fontSize: 30,
    alignSelf:'center',
    color: '#4714CA',
  },
  input: {
    width: '85%',
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingLeft: 10,
    borderRadius: 5,
    marginBottom:10,
  },
  loginButton: {
    width:'80%',
    height: 40,
    backgroundColor: '#B79FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft:25,
    marginRight:25,
  },
  loginButtonText: {
    color: '#4714CA',
    fontSize: 16,
    fontWeight: 'bold',
  },
  direction:{
    flexDirection:'row',
  },
  text1:{
    marginBottom:50,
    alignSelf:'center',
    color:'#4714CA',
    fontSize:30,
    
  },

  text2:{
    color:'#4714CA',
    fontSize:15,
    marginBottom:10,
  },
  text3:{
    color:'#4714CA',
    alignSelf:'center',
    marginTop:10,
  },
  text4:{
    color:'#4714CA',
    marginTop:20,
  },
  text5:{
    marginBottom:5,
    color:'#4714CA',
  },
  signup:{
    marginBottom:10,
    width:'50%',
    height: 40,
    backgroundColor: '#B79FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft:25,
    marginRight:25,
  },
});


export default LoginScreen;
