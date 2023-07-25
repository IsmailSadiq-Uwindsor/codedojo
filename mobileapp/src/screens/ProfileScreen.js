import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const ProfileScreen = () => {

  const { signout } = useContext(AuthContext);

  return (
    <>
      <Text style={{fontSize: 48}}>ProfileScreen</Text>
      <Spacer>
        <Button title='Sign Out' onPress={signout}/>
      </Spacer>
    </>
  )
}

const styles = StyleSheet.create({
    
});

export default ProfileScreen