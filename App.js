import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {useState, useEffect} from 'react';
import EnterPage from './components/EnterPage.js';
import MainPage from "./components/MainPage.js";
import SignupPage from "./components/SignupPage.js";
import LoginPage from "./components/LoginPage.js";
import PersonalPage from './components/PersonalPage.js'
import BusinessPage from './components/BusinessPage.js'


const Stack = createStackNavigator();

export default function App() {
  const [isEnter, setIsEnter] = useState(true);
  
  useEffect( () =>  {
    setTimeout( () =>  {
      setIsEnter(false)
    }, 2000)
  }, []);


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false,}}>
          <Stack.Screen name="Login" component={isEnter ? EnterPage : LoginPage} />
          <Stack.Screen name="Signup" component={SignupPage} />
          <Stack.Screen name="MainPage" component={MainPage} />  
          <Stack.Screen name="PersonalPage" component={PersonalPage} />
          <Stack.Screen name="BusinessPage" component={BusinessPage} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}