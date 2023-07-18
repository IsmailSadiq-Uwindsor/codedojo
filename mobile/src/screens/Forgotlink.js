import React from 'react';
import { View, TextInput, StyleSheet, Image, Text,Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';



const Forgotlink =()=>{
  const navigation = useNavigation();
  const handlelogin = () => {
    // Perform login logic here
  
    // Redirect to HomeScreen
    //navigation.navigate('LoginScreen');
  };
  return(
      <Text>Forgot Screen</Text>
  );
};

export default Forgotlink;