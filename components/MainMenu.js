import React, {useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {stateContext} from './context/context';
import * as RNLocalize from 'react-native-localize';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function MainMenu() {
  const navigation = useNavigation();
  const {
    translate,
    setI18nConfig,
    handleLocalizationChange,
    userInfo,
    setUserInfo,
    token,
    setToken,
    setPhoneNumber,
  } = useContext(stateContext);
  const nameCapitalized = token.charAt(0).toUpperCase() + token.slice(1);

  setI18nConfig();

  useEffect(() => {
    RNLocalize.addEventListener('change', handleLocalizationChange);
    return RNLocalize.removeEventListener('change', handleLocalizationChange);
  }, []);

  const handleLogOut = () => {
    setToken('');
    setPhoneNumber('');
    AsyncStorage.removeItem('token');
  };

  return (
    <View style={styles.mainMenuWrapper}>
      <ImageBackground
        resizeMode="stretch"
        style={styles.mainMenuImgBg}
        source={require('../pics/prueba1.png')}>
        <Text style={styles.mainMenuHi}>
          {translate('Hi')}, {nameCapitalized}!
        </Text>
        <View style={styles.wrapperIcons}>
          <TouchableOpacity
            style={styles.iconText}
            onPress={() => navigation.navigate('MainPage')}>
            <MaterialCommunityIcon
              name="calendar-text-outline"
              style={styles.icons}
            />
            <Text style={styles.text}>{translate('Messages')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconText}
            onPress={() => navigation.navigate('PersonalPage')}>
            <MaterialCommunityIcon
              name="account-outline"
              style={styles.icons}
            />
            <Text style={styles.text}>{translate('PerForms')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconText}
            onPress={() => navigation.navigate('BusinessPage')}>
            <MaterialCommunityIcon name="cog-outline" style={styles.icons} />
            <Text style={styles.text}>{translate('FactForms')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconText} onPress={handleLogOut}>
            <MaterialCommunityIcon name="logout" style={styles.icons} />
            <Text style={styles.text}>{translate('Logout')}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.viewBottom}>
        <View style={styles.helpWrapper}>
          <MaterialCommunityIcon
            name="map-marker-question-outline"
            style={styles.questionIcon}
          />
          <Text style={styles.helpText}>{translate('NeedHelp')}</Text>
        </View>
        <Image
          style={styles.image}
          source={require('../pics/HeaderLogo_180x.webp')}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainMenuWrapper: {
    flex: 1,
    backgroundColor: '#00486e',
  },
  mainMenuImgBg: {
    flex: 8,
    width: '100%',
    height: '100%',
  },
  mainMenuHi: {
    color: 'white',
    fontSize: 27,
    marginTop: '7%',
    marginLeft: '7%',
  },
  wrapperIcons: {
    marginTop: '12%',
    marginLeft: '7%',
  },
  iconText: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: '10%',
  },
  icons: {
    fontSize: 24,
    marginRight: 15,
    color: 'white',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  helpWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '7%',
  },
  questionIcon: {
    color: 'white',
    fontSize: 14,
  },
  helpText: {
    color: 'white',
    alignItems: 'center',
    fontSize: 16,
    marginLeft: 5,
  },
  viewBottom: {
    flex: 1.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    marginRight: '7%',
  },
});

export default MainMenu;
