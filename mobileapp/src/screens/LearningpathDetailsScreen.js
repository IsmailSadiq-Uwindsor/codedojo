import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

const LearningpathDetailsScreen = ( { navigation } ) => {
  return (
    <>
      <Text style={{fontSize: 48}}>LearningpathDetailsScreen</Text>
      <Button title='Go to Course Details' onPress={() => navigation.navigate('CourseDetails') }/>
    </>
  )
}

const styles = StyleSheet.create({
    
});

export default LearningpathDetailsScreen