import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import NavBar from './NavBar';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';

const translationGetters = {
  en: () => require('../translations/en.json'),
  es: () => require('../translations/es.json'),
};

const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

const setI18nConfig = () => {
  const fallback = {languageTag: 'en'};
  const {languageTag} =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;
  translate.cache.clear();
  i18n.translations = {[languageTag]: translationGetters[languageTag]()};
  i18n.locale = languageTag;
};

class BusinessPage extends React.Component {
  constructor(props) {
    super(props);
    setI18nConfig();
  }

  componentDidMount() {
    RNLocalize.addEventListener('change', this.handleLocalizationChange);
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener('change', this.handleLocalizationChange);
  }
  handleLocalizationChange = () => {
    setI18nConfig()
      .then(() => this.forceUpdate())
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const { navigation } = this.props;

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
            </TouchableOpacity>
            <Text style={styles.avatartext}>
              {translate('Equipment Failure')}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.buttonavatar}
              onPress={() => navigation.navigate('FacilitiesIssuesForm')}>
              <Entypo style={styles.avatar} size={85} name="tools" />
            </TouchableOpacity>
            <Text style={styles.avatartext}>
              {translate('Facilities Issues')}
            </Text>
          </View>
          <View style={styles.belows}>
            <TouchableOpacity
              style={styles.buttonavatar}
              onPress={() => navigation.navigate('MaterialsNeededForm')}>
              <MaterialIcon
                style={styles.avatar}
                size={85}
                name="add-shopping-cart"
              />
            </TouchableOpacity>
            <Text style={styles.avatartext}>
              {translate('Materials Needed')}
            </Text>
          </View>
          <View style={styles.belows}>
            <TouchableOpacity
              style={styles.buttonavatar}
              onPress={() => navigation.navigate('SuggestionForm')}>
              <Entypo style={styles.avatar} size={85} name="light-bulb" />
            </TouchableOpacity>
            <Text style={styles.avatartext}>{translate('Suggestions')}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default function(props) {
  const navigation = useNavigation();

  return <BusinessPage {...props} navigation={navigation} />
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
