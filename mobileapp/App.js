import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import HomeScreen from './src/screens/HomeScreen';
import LearningpathDetailsScreen from './src/screens/LearningpathDetailsScreen';


const switchNavigator = createSwitchNavigator ({
  authFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createMaterialBottomTabNavigator({
    learningpathFlow: createStackNavigator({
      LearningpathList: HomeScreen,
      LearningpathDetails: LearningpathDetailsScreen
    }),
    Profile: ProfileScreen
  })
});

export default createAppContainer(switchNavigator);
