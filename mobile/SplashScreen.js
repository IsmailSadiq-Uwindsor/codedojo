import React, { useEffect } from 'react';
import { View, ImageBackground, Text, StyleSheet,Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window');

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginScreen');
    }, 3000); // Adjust the delay time as needed
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/BackGround.jpg')}
        style={styles.imageBackground}
      >
        <Text style={styles.nameText1}>codeDOJO</Text>
        <Text style={styles.nameText2}>Online Learing Path</Text>
      </ImageBackground>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:width,
    height:height,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText1: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#4A17CC',
  },
  nameText2: {
    fontSize: 24,
    color: '#4A17CC',
  }
});


export default SplashScreen;
