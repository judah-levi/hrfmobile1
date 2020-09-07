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
import TimeOff from './components/forms/TimeOff'
import Meetings from './components/forms/Meetings'
import SickDay from './components/forms/SickDay.js';
import EquipmentFailure from './components/forms/EquipmentFailure.js';
import FacilitiesIssues from './components/forms/FacilitiesIssues.js';
import MaterialsNeeded from './components/forms/MaterialsNeeded.js';
import Suggestion from './components/forms/Suggestion.js';
import AdminPage from './components/adminComponents/AdminPage.js'

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
          <Stack.Screen name="AdminPage" component={AdminPage} />
          <Stack.Screen name="Signup" component={SignupPage} />
          <Stack.Screen name="MainPage" component={MainPage} />  
          <Stack.Screen name="PersonalPage" component={PersonalPage} />
          <Stack.Screen name="BusinessPage" component={BusinessPage} />
          <Stack.Screen name="TimeOffForm" component={TimeOff} />
          <Stack.Screen name="MeetingsForm" component={Meetings} />
          <Stack.Screen name="SickDayForm" component={SickDay} />
          <Stack.Screen name="EquipmentFailuresForm" component={EquipmentFailure} />
          <Stack.Screen name="FacilitiesIssuesForm" component={FacilitiesIssues} />
          <Stack.Screen name="MaterialsNeededForm" component={MaterialsNeeded} />
          <Stack.Screen name="SuggestionForm" component={Suggestion} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}