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
    height: 50,
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
    marginBottom:20,
    alignSelf:'center',
    color:'#4714CA',
    fontSize:20,
    
  },

});

export default Forgotpassword;