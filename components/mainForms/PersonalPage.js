import React, {useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  PixelRatio,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {stateContext} from '../context/context';
import * as RNLocalize from 'react-native-localize';
import Nav from '../Nav';

export default function PersonalPage() {
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
    <View style={styles.mainWrapper}>
      <Nav />
      <View style={styles.rightBackground}>
        <View style={styles.titleWrapper}>
          <Image
            style={styles.imageCisne}
            source={require('../../pics/f-2.png')}
          />
          <View style={styles.textTitleWrapper}>
            <MaterialCommunityIcons
              name="account-outline"
              style={styles.mainTitleIcon}
            />
            <Text style={styles.mainTitle}>{translate('PerForms')}</Text>
          </View>
        </View>
        <View style={styles.allIcons}>
          <View style={styles.iconsWrapper}>
            <TouchableOpacity
              style={styles.buttonAvatar}
              onPress={() => navigation.navigate('TimeOffForm')}>
              <MaterialCommunityIcons
                style={styles.avatar}
                size={PixelRatio.get() <= 1.5 ? 40 : 55}
                name="calendar-account"
              />
              <Text style={styles.avatarText}>{translate('Time Off')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonAvatar}
              onPress={() => navigation.navigate('MeetingsForm')}>
              <MaterialCommunityIcons
                style={styles.avatar}
                size={PixelRatio.get() <= 1.5 ? 40 : 55}
                name="account-supervisor-outline"
              />
              <Text style={styles.avatarText}>{translate('Meetings')}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconsWrapper}>
            <TouchableOpacity
              style={styles.buttonAvatar}
              onPress={() => navigation.navigate('SickDayForm')}>
              <MaterialCommunityIcons
                style={styles.avatar}
                size={PixelRatio.get() <= 1.5 ? 40 : 55}
                name="account-cancel-outline"
              />
              <Text style={styles.avatarText}>{translate('Sick Day')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonAvatar}
              onPress={() => navigation.navigate('CovidPage')}>
              <MaterialCommunityIcons
                style={styles.avatar}
                size={PixelRatio.get() <= 1.5 ? 40 : 55}
                name="doctor"
              />
              <Text style={styles.avatarText}>{translate('Covid-19')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

let font_size_title = 29;
let size_icon = 35;
let marginTop_allIcons = '-5%';
let font_size_textOpt = 14;
let imageCisne_width = 215;
let imageCisne_height = 205;
let imageCisne_right = '-15%';

if (PixelRatio.get() <= 2) {
  marginTop_allIcons = 0;
  imageCisne_width = 185;
  imageCisne_height = 175;
  imageCisne_right = '-5%';
}
if (PixelRatio.get() <= 1.5) {
  font_size_title = 25;
  size_icon = 32;
  font_size_textOpt = 13;
  imageCisne_width = 155;
  imageCisne_height = 145;
  imageCisne_right = '-4%';
}

const styles = StyleSheet.create({
  mainWrapper: {
    flexDirection: 'row',
    height: '100%',
  },
  rightBackground: {
    flex: 4,
  },
  titleWrapper: {
    overflow: 'hidden',
    height: '35%',
    borderBottomRightRadius: 165,
    backgroundColor: '#73a4d8',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 5,
  },
  imageCisne: {
    position: 'absolute',
    width: imageCisne_width,
    height: imageCisne_height,
    position: 'absolute',
    top: '4%',
    right: imageCisne_right,
    zIndex: 0,
    opacity: 0.6,
  },
  textTitleWrapper: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: '5%',
  },
  mainTitleIcon: {
    color: 'white',
    fontSize: size_icon,
    marginLeft: -6,
  },
  mainTitle: {
    color: 'white',
    fontSize: font_size_title,
    // fontFamily: 'Roboto-Light',
  },
  allIcons: {
    flex: 1,
    marginTop: marginTop_allIcons,
    justifyContent: 'space-evenly',
  },
  iconsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  avatar: {
    color: '#00486D',
  },
  avatarText: {
    textAlign: 'center',
    color: '#00486D',
    fontWeight: 'bold',
    fontSize: font_size_textOpt,
  },
  buttonAvatar: {
    alignItems: 'center',
  },
});
