import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import NavBar from './NavBar';
import {stateContext} from './context';
import * as RNLocalize from 'react-native-localize';

export default function BusinessPage() {
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
            onPress={() => navigation.navigate('EquipmentFailuresForm')}>
            <MaterialCommunityIcon
              style={styles.avatar}
              size={85}
              name="robot-industrial"
            />
            <Text style={styles.avatartext}>
              {translate('Equipment Failure')}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonavatar}
            onPress={() => navigation.navigate('FacilitiesIssuesForm')}>
            <MaterialCommunityIcon
              style={styles.avatar}
              size={85}
              name="hammer-wrench"
            />
            <Text style={styles.avatartext}>
              {translate('Facilities Issues')}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.belows}>
          <TouchableOpacity
            style={styles.buttonavatar}
            onPress={() => navigation.navigate('MaterialsNeededForm')}>
            <MaterialCommunityIcon
              style={styles.avatar}
              size={85}
              name="cart-plus"
            />
            <Text style={styles.avatartext}>
              {translate('Materials Needed')}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.belows}>
          <TouchableOpacity
            style={styles.buttonavatar}
            onPress={() => navigation.navigate('SuggestionForm')}>
            <MaterialCommunityIcon
              style={styles.avatar}
              size={85}
              name="lightbulb-outline"
            />
            <Text style={styles.avatartext}>{translate('Suggestions')}</Text>
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
