import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <>    
    <Text style={{fontSize: 48}}>HomeScreen</Text>
    <Button title='Go to LearningPath Details' onPress={() => navigation.navigate('LearningpathDetails') }/>
    </>
  )
}

const styles = StyleSheet.create({
    
});

export default HomeScreen