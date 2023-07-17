import React from 'react';
import { View, TextInput, StyleSheet, Image, Text,Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Forgotpassword =()=>{
  const navigation = useNavigation();
  const handlelink = () => {
    // Perform login logic here
  
    // Redirect to HomeScreen
   // navigation.navigate('Forgotlink');
  };
  return(
    <View style={styles.container}>
    <Image source={require('./assets/BackGround.jpg')} style={styles.backgroundImage} />
    <View style={styles.formContainer}>
    <Text style={styles.text1}>We will sent a link to reset your password at your mail address.
      </Text>
      <View style={styles.direction}>
      <Icon name="envelope" style={styles.icon} />
      <TextInput style={styles.input} placeholder="Enter your email address here" />
      </View>
      <Pressable style={styles.loginButton} onPress={handlelink}>
        <Text style={styles.loginButtonText} >Forgot password</Text>
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
});

export default Forgotpassword;