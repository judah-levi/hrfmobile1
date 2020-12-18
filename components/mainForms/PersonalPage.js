import React, {useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
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
      <View style={styles.rightWrapper}>
        <ImageBackground
          source={require('../../pics/fondos-2.png')}
          style={styles.rightBackground}>
          <View style={styles.titleWrapper}>
            <MaterialCommunityIcons
              name="account-outline"
              style={styles.mainTitleIcon}
            />
            <Text style={styles.mainTitle}>{translate('PerForms')}</Text>
          </View>
        </ImageBackground>
        <View style={styles.wrapperIcons}>
          <TouchableOpacity
            style={styles.buttonAvatar}
            onPress={() => navigation.navigate('TimeOffForm')}>
            <MaterialCommunityIcons
              style={styles.avatar}
              size={75}
              name="calendar-account"
            />
            <Text style={styles.avatarText}>{translate('Time Off')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonAvatar}
            onPress={() => navigation.navigate('MeetingsForm')}>
            <MaterialCommunityIcons
              style={styles.avatar}
              size={75}
              name="account-supervisor-outline"
            />
            <Text style={styles.avatarText}>{translate('Meetings')}</Text>
          </TouchableOpacity>
          <View style={styles.belows}>
            <TouchableOpacity
              style={styles.buttonAvatar}
              onPress={() => navigation.navigate('SickDayForm')}>
              <MaterialCommunityIcons
                style={styles.avatar}
                size={75}
                name="account-cancel-outline"
              />
              <Text style={styles.avatarText}>{translate('Sick Day')}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.belows}>
            <TouchableOpacity
              style={styles.belows}
              style={styles.buttonAvatar}
              onPress={() => navigation.navigate('CovidPage')}>
              <MaterialCommunityIcons
                style={styles.avatar}
                size={80}
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

const styles = StyleSheet.create({
  mainWrapper: {
    flexDirection: 'row',
    height: '100%',
  },
  rightWrapper: {
    width: '85%',
    backgroundColor: 'rgb(218, 218, 218)',
  },
  rightBackground: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
  },
  titleWrapper: {
    marginTop: 65,
    marginLeft: 25,
  },
  mainTitleIcon: {
    color: 'white',
    fontSize: 45,
    marginLeft: -6,
  },
  mainTitle: {
    color: 'white',
    fontSize: 32,
  },
  wrapperIcons: {
    marginTop: -340,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  avatar: {
    color: '#00486D',
  },
  avatarText: {
    textAlign: 'center',
    color: '#00486D',
  },
  buttonAvatar: {
    width: 150,
    height: 160,
    backgroundColor: 'white',
    opacity: 0.9,
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 5,
  },
  belows: {
    marginTop: 35,
  },
});
