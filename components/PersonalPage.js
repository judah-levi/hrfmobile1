import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import NavBar from './NavBar';
import {stateContext} from './context';
import * as RNLocalize from 'react-native-localize';

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
    <View style={styles.pageWrapper}>
      <NavBar />
      <View style={styles.wrapper}>
        <View>
          <TouchableOpacity
            style={styles.buttonavatar}
            onPress={() => navigation.navigate('TimeOffForm')}>
            <MaterialCommunityIcons
              style={styles.avatar}
              size={85}
              name="calendar-account"
            />
            <Text style={styles.avatartext}>{translate('Time Off')}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonavatar}
            onPress={() => navigation.navigate('MeetingsForm')}>
            <MaterialCommunityIcons
              style={styles.avatar}
              size={85}
              name="account-supervisor-outline"
            />
            <Text style={styles.avatartext}>{translate('Meetings')}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.belows}>
          <TouchableOpacity
            style={styles.buttonavatar}
            onPress={() => navigation.navigate('SickDayForm')}>
            <MaterialCommunityIcons
              style={styles.avatar}
              size={85}
              name="account-cancel-outline"
            />
            <Text style={styles.avatartext}>{translate('Sick Day')}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.belows}>
          <TouchableOpacity
            style={styles.buttonavatar}
            onPress={() => navigation.navigate('CovidPage')}>
            <MaterialCommunityIcons
              style={styles.avatar}
              size={85}
              name="doctor"
            />
            <Text style={styles.avatartext}>{translate('Covid-19')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageWrapper: {
    height: '100%',
  },
  wrapper: {
    marginTop: 100,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 25,
    marginLeft: 25,
    paddingTop: 25,
    color: '#E6BE8A',
  },
  avatartext: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#00486D',
  },
  belows: {
    marginTop: 65,
  },
});
