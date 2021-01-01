import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {stateContext} from '../context/context';
import * as RNLocalize from 'react-native-localize';
import Nav from '../Nav';

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
              name="cog-outline"
              style={styles.mainTitleIcon}
            />
            <Text style={styles.mainTitle}>{translate('FactForms')}</Text>
          </View>
        </View>
        <View style={styles.allIcons}>
          <View style={styles.iconsWrapper}>
            <TouchableOpacity
              style={styles.buttonAvatar}
              onPress={() => navigation.navigate('EquipmentFailuresForm')}>
              <MaterialCommunityIcons
                style={styles.avatar}
                size={55}
                name="robot-industrial"
              />
              <Text style={styles.avatarText}>
                {translate('Equipment Failure')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonAvatar}
              onPress={() => navigation.navigate('FacilitiesIssuesForm')}>
              <MaterialCommunityIcons
                style={styles.avatar}
                size={55}
                name="hammer-wrench"
              />
              <Text style={styles.avatarText}>
                {translate('Facilities Issues')}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconsWrapper}>
            <TouchableOpacity
              style={styles.buttonAvatar}
              onPress={() => navigation.navigate('MaterialsNeededForm')}>
              <MaterialCommunityIcons
                style={styles.avatar}
                size={55}
                name="cart-plus"
              />
              <Text style={styles.avatarText}>
                {translate('Materials Needed')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonAvatar}
              onPress={() => navigation.navigate('SuggestionForm')}>
              <MaterialCommunityIcons
                style={styles.avatar}
                size={55}
                name="lightbulb-outline"
              />
              <Text style={styles.avatarText}>{translate('Suggestions')}</Text>
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
  rightBackground: {
    flex: 4,
  },
  imageCisne: {
    position: 'absolute',
    width: 165,
    height: 155,
    position: 'absolute',
    top: '4%',
    right: '2%',
    zIndex: 0,
  },
  textTitleWrapper: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: '5%',
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
  mainTitleIcon: {
    color: 'white',
    fontSize: 35,
    marginLeft: -6,
  },
  mainTitle: {
    color: 'white',
    fontSize: 29,
  },
  allIcons: {
    flex: 4,
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
  },
  buttonAvatar: {
    alignItems: 'center',
  },
});
