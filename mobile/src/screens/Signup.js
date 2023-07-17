import React from 'react';
import { View, TextInput, StyleSheet, Image, Text,Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Signup =()=>{
  const navigation = useNavigation();
  const handlesignup = () => {
    navigation.navigate('LoginScreen');
  };

  return(
    <View style={styles.container}>
    <Image source={require('./assets/BackGround.jpg')} style={styles.backgroundImage} />
    <View style={styles.formContainer}>
    <Text style={styles.text1}>Sign Up Here</Text>  
    
      <View style={styles.direction}>
      <Icon name="user" style={styles.icon} />
      <TextInput style={styles.input} placeholder="First Name" />
      </View>
      <View style={styles.direction}>
        <Icon name="user" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Last Name" secureTextEntry />
        </View>
  );
};

export default Signup;