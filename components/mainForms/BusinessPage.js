import React, {useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
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
      <View style={styles.rightWrapper}>
        <ImageBackground
          source={require('../../pics/fondos-2.png')}
          style={styles.rightBackground}>
          <View style={styles.titleWrapper}>
            <MaterialCommunityIcons
              name="cog-outline"
              style={styles.mainTitleIcon}
            />
            <Text style={styles.mainTitle}>{translate('FactForms')}</Text>
          </View>
        </ImageBackground>
        <View style={styles.wrapperIcons}>
          <TouchableOpacity
            style={styles.buttonAvatar}
            onPress={() => navigation.navigate('EquipmentFailuresForm')}>
            <MaterialCommunityIcons
              style={styles.avatar}
              size={75}
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
              size={75}
              name="hammer-wrench"
            />
            <Text style={styles.avatarText}>
              {translate('Facilities Issues')}
            </Text>
          </TouchableOpacity>
          <View style={styles.belows}>
            <TouchableOpacity
              style={styles.buttonAvatar}
              onPress={() => navigation.navigate('MaterialsNeededForm')}>
              <MaterialCommunityIcons
                style={styles.avatar}
                size={75}
                name="cart-plus"
              />
              <Text style={styles.avatarText}>
                {translate('Materials Needed')}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.belows}>
            <TouchableOpacity
              style={styles.buttonAvatar}
              onPress={() => navigation.navigate('SuggestionForm')}>
              <MaterialCommunityIcons
                style={styles.avatar}
                size={75}
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
    fontWeight: 'normal',
    color: '#00486D',
  },
  buttonAvatar: {
    width: 157,
    height: 160,
    opacity: 0.9,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 5,
  },
  belows: {
    marginTop: 20,
  },
});
