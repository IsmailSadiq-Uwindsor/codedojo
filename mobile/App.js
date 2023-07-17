import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/splashscreen';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import Forgotpassword from './src/screens/Forgotpassword';
import Signup from './src/screens/Signup';
import Forgotlink from './src/screens/Forgotlink';
import SearchScreen from './src/screens/SearchScreen';
import CartScreen from './src/screens/CartScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import OtherScreen  from './src/screens/OtherScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="Forgotpassword" component={Forgotpassword}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Forgotlink" component={Forgotlink}/>
        <Stack.Screen name="SearchScree" component={SearchScreen}/>
        <Stack.Screen name="CartScreen" component={CartScreen}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
        <Stack.Screen name="OtherScreen" component={OtherScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
