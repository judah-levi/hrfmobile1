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

function MainMenu() {
  const navigation = useNavigation();
  const {translate, setI18nConfig, handleLocalizationChange} = useContext(
    stateContext,
  );

  setI18nConfig();

  useEffect(() => {
    RNLocalize.addEventListener('change', handleLocalizationChange);
    return RNLocalize.removeEventListener('change', handleLocalizationChange);
  }, []);

  return (
    <View style={styles.mainMenuWrapper}>
      <ImageBackground
        style={styles.mainMenuImgBg}
        source={require('../pics/prueba1.png')}
        imageStyle={{resizeMode: 'cover'}}>
        <Text style={styles.mainMenuHi}>{translate('Hi')}, Peter!</Text>
        <View style={styles.wrapperIcons}>
          <MaterialCommunityIcon name="color-helper" style={styles.iconLine} />
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
          <TouchableOpacity
            style={styles.iconText}
            onPress={() => navigation.navigate('Login')}>
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
    backgroundColor: '#00486e',
    height: '100%',
  },
  mainMenuImgBg: {
    width: '100%',
    height: '94%',
  },
  mainMenuHi: {
    color: 'white',
    fontSize: 32,
    marginTop: '20%',
    marginLeft: '11%',
  },
  iconLine: {
    fontSize: 25,
    color: 'white',
    marginBottom: 47,
  },
  wrapperIcons: {
    marginTop: 30,
    marginLeft: '11%',
  },
  iconText: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 47,
  },
  icons: {
    fontSize: 28,
    marginRight: 15,
    color: 'white',
  },
  text: {
    color: 'white',
    fontSize: 22,
  },
  helpWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '11%',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -35,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: '11%',
  },
});

export default MainMenu;
