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
    <View style={styles.container}>
      <Image source={require('./assets/BackGround.jpg')} style={styles.backgroundImage} />
      <View style={styles.formContainer}>
      <Text style={styles.text1}>Link has been sent successfully. Kindly check your mailbox.</Text>
        
        <Pressable style={styles.loginButton} onPress={handlelogin} >
          <Text style={styles.loginButtonText} >Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Forgotlink;