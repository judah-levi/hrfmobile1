import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import NavBar from './NavBar';
import {stateContext} from './context';
import * as RNLocalize from 'react-native-localize';

export default function PersonalPage() {
  const navigation = useNavigation();
  const {translate, handleLocalizationChange} = useContext(stateContext);

  useEffect(() => {
    RNLocalize.addEventListener('change', handleLocalizationChange);
    setTimeout(() => {
      RNLocalize.removeEventListener('change', handleLocalizationChange);
    }, 2000);
  }, []);

  return (
    <View style={styles.pageWrapper}>
      {/* {dwada} */}
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
          </TouchableOpacity>
          <Text style={styles.avatartext}>{translate('Time Off')}</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonavatar}
            onPress={() => navigation.navigate('MeetingsForm')}>
            <AntDesign style={styles.avatar} size={85} name="team" />
          </TouchableOpacity>
          <Text style={styles.avatartext}>{translate('Meetings')}</Text>
        </View>
        <View style={styles.belows}>
          <TouchableOpacity
            style={styles.buttonavatar}
            onPress={() => navigation.navigate('SickDayForm')}>
            <AntDesign style={styles.avatar} size={85} name="deleteuser" />
          </TouchableOpacity>
          <Text style={styles.avatartext}>{translate('Sick Day')}</Text>
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
          </TouchableOpacity>
          <Text style={styles.avatartext}>{translate('Covid-19')}</Text>
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
