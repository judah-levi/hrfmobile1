import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useState, useEffect} from 'react';
import AdminNav from './components/adminComponents/AdminNav';
import MainPage from './components/messages/MainPage';
import LoginPage from './components/LoginPage';
import PersonalPage from './components/mainForms/PersonalPage';
import BusinessPage from './components/mainForms/BusinessPage';
import TimeOff from './components/personalForms/TimeOff';
import Meetings from './components/personalForms/Meetings';
import SickDay from './components/personalForms/SickDay';
import CovidPage from './components/personalForms/COVIDPage';
import CovidFormEn from './components/personalForms/COVID-19-en';
import EquipmentFailure from './components/factoryForms/EquipmentFailure';
import FacilitiesIssues from './components/factoryForms/FacilitiesIssues';
import MaterialsNeeded from './components/factoryForms/MaterialsNeeded';
import Suggestion from './components/factoryForms/Suggestion';
import FormCarousel from './components/adminComponents/FormCarousel';
import VerificationPage from './components/VerificationPage';
import MainMenu from './components/MainMenu';
import {stateContext} from './components/context/context';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

function App() {
  const [userInfo, setUserInfo] = useState();
  const [userRole, setUserRole] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [token, setToken] = useState();

  const translationGetters = {
    en: () => require('./translations/en.json'),
    es: () => require('./translations/es.json'),
  };

  const translate = memoize(
    (key, config) => i18n.t(key, config),
    (key, config) => (config ? key + JSON.stringify(config) : key),
  );

  const setI18nConfig = () => {
    const fallback = {languageTag: 'en'};
    const {languageTag} =
      RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
      fallback;
    translate.cache.clear();
    i18n.translations = {[languageTag]: translationGetters[languageTag]()};
    i18n.locale = languageTag;
  };

  const handleLocalizationChange = () => {
    setI18nConfig()
      .then(() => this.forceUpdate())
      .catch((error) => {
        console.error(error);
      });
  };

  const getToken = async () => {
    let token = await AsyncStorage.getItem('token');
    if (token !== null) {
      setToken(token);
    }
  };

  const getRole = async () => {
    let role = await AsyncStorage.getItem('role');
    if (role !== null) {
      setUserRole(role);
    }
  };

  useEffect(() => {
    getToken();
    getRole();
  }, []);

  return (
    <NavigationContainer>
      <stateContext.Provider
        value={{
          translate,
          setI18nConfig,
          handleLocalizationChange,
          userInfo,
          setUserInfo,
          phoneNumber,
          setPhoneNumber,
          token,
          setToken,
          setUserRole,
        }}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {!token ? (
            <>
              <Stack.Screen name="Login" component={LoginPage} />
              <Stack.Screen name="Verification" component={VerificationPage} />
            </>
          ) : (
            <>
              <Stack.Screen
                name="MainMenu"
                component={userRole === 'user' ? MainMenu : AdminNav}
              />
              <Stack.Screen name="AdminNav" component={AdminNav} />
              <Stack.Screen name="MainPage" component={MainPage} />
              <Stack.Screen name="PersonalPage" component={PersonalPage} />
              <Stack.Screen name="BusinessPage" component={BusinessPage} />
              <Stack.Screen name="TimeOffForm" component={TimeOff} />
              <Stack.Screen name="MeetingsForm" component={Meetings} />
              <Stack.Screen name="SickDayForm" component={SickDay} />
              <Stack.Screen name="CovidPage" component={CovidPage} />
              <Stack.Screen name="CovidForm" component={CovidFormEn} />
              <Stack.Screen
                name="EquipmentFailuresForm"
                component={EquipmentFailure}
              />
              <Stack.Screen
                name="FacilitiesIssuesForm"
                component={FacilitiesIssues}
              />
              <Stack.Screen
                name="MaterialsNeededForm"
                component={MaterialsNeeded}
              />
              <Stack.Screen name="SuggestionForm" component={Suggestion} />
              <Stack.Screen name="FormCarousel" component={FormCarousel} />
            </>
          )}
        </Stack.Navigator>
      </stateContext.Provider>
    </NavigationContainer>
  );
}

export default App;
