import React, {useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  PixelRatio,
} from 'react-native';
import {stateContext} from '../context/context';
import * as RNLocalize from 'react-native-localize';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function AdminNav() {
  const navigation = useNavigation();
  const {
    translate,
    setI18nConfig,
    handleLocalizationChange,
    setToken,
    token,
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
    AsyncStorage.removeItem('role');
    AsyncStorage.removeItem('userInfo');
  };

  return (
    <View style={styles.mainMenuWrapper}>
      <ImageBackground
        resizeMode="stretch"
        style={styles.mainMenuImgBg}
        source={require('../../pics/prueba1.png')}>
        <Text style={styles.mainMenuHi}>
          {translate('Hi')}, {nameCapitalized}!
        </Text>
        <View style={styles.wrapperIcons}>
          <TouchableOpacity
            style={styles.iconText}
            onPress={() => navigation.navigate('FormCarousel')}>
            <MaterialCommunityIcon name="pencil" style={styles.icons} />
            <Text style={styles.text}>{translate('Create Message')}</Text>
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
          source={require('../../pics/HeaderLogo_180x.webp')}
        />
      </View>
    </View>
  );
}

let font_size_name = 31;
let font_size_name_top = '15%';
let font_size_icons = 28;
let font_size_iconText = 23;
let marginBottom_iconText = '13%';

if (PixelRatio.get() <= 2) {
  font_size_name = 29;
  font_size_name_top = '9%';
  font_size_icons = 23;
  font_size_iconText = 20;
  marginBottom_iconText = '10%';
}
if (PixelRatio.get() <= 1.5) {
  font_size_name = 27;
  font_size_name_top = '7%';
  font_size_icons = 23;
  font_size_iconText = 20;
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
    fontSize: font_size_name,
    marginTop: font_size_name_top,
    marginLeft: '7%',
    fontFamily: 'Roboto-Light',
  },
  wrapperIcons: {
    marginTop: '12%',
    marginLeft: '7%',
  },
  iconText: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: marginBottom_iconText,
  },
  icons: {
    fontSize: font_size_icons,
    marginRight: 15,
    color: 'white',
  },
  text: {
    color: 'white',
    fontSize: font_size_iconText,
    fontFamily: 'Roboto-Light',
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
    fontFamily: 'Roboto-Light',
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

export default AdminNav;
