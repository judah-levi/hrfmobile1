import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {useState, useEffect} from 'react';
import EnterPage from './components/EnterPage';
import MainPage from "./components/MainPage";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import PersonalPage from './components/PersonalPage'
import BusinessPage from './components/BusinessPage'
import TimeOff from './components/forms/TimeOff'
import Meetings from './components/forms/Meetings'
import SickDay from './components/forms/SickDay';
import CovidPage from './components/COVIDPage';
import CovidFormEn from './components/forms/COVID-19-en';
import CovidFormEs from './components/forms/COVID-19-es';
import EquipmentFailure from './components/forms/EquipmentFailure';
import FacilitiesIssues from './components/forms/FacilitiesIssues';
import MaterialsNeeded from './components/forms/MaterialsNeeded';
import Suggestion from './components/forms/Suggestion';
import AdminPage from './components/adminComponents/AdminPage'
import FormCarousel from './components/adminComponents/FormCarousel';

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
          <Stack.Screen name="MainPage" component={MainPage} />  
          <Stack.Screen name="Signup" component={SignupPage} />
          <Stack.Screen name="PersonalPage" component={PersonalPage} />
          <Stack.Screen name="BusinessPage" component={BusinessPage} />
          <Stack.Screen name="TimeOffForm" component={TimeOff} />
          <Stack.Screen name="MeetingsForm" component={Meetings} />
          <Stack.Screen name="SickDayForm" component={SickDay} />
          <Stack.Screen name="CovidPage" component={CovidPage} />
          <Stack.Screen name="CovidFormEn" component={CovidFormEn} />
          <Stack.Screen name="CovidFormEs" component={CovidFormEs} />
          <Stack.Screen name="EquipmentFailuresForm" component={EquipmentFailure} />
          <Stack.Screen name="FacilitiesIssuesForm" component={FacilitiesIssues} />
          <Stack.Screen name="MaterialsNeededForm" component={MaterialsNeeded} />
          <Stack.Screen name="SuggestionForm" component={Suggestion} />
          <Stack.Screen name="FormCarousel" component={FormCarousel} />
          <Stack.Screen name="AdminPage" component={AdminPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}