import React, {useEffect, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Nav from '../Nav';
import {useNavigation} from '@react-navigation/native';
import * as RNLocalize from 'react-native-localize';
import {stateContext} from '../context/context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function CovidPage() {
  const navigation = useNavigation();
  const {translate, handleLocalizationChange} = useContext(stateContext);

  useEffect(() => {
    RNLocalize.addEventListener('change', handleLocalizationChange);
    setTimeout(() => {
      RNLocalize.removeEventListener('change', handleLocalizationChange);
    }, 2000);
  }, []);

  // const j = () => {
  //   navigation.navigate('MeetingsForm');
  //   console.log('press');
  // };

  return (
    <View style={styles.mainWrapper}>
      <Nav />
      <ScrollView
        style={styles.rightWrapper}
        showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require('../../pics/ballena.png')}
          style={styles.rightBackground}>
          <View style={styles.titleWrapper}>
            <MaterialCommunityIcons
              name="account-outline"
              style={styles.mainTitleIcon}
            />
            <Text style={styles.mainTitle}>{translate('Covid-192')}</Text>
          </View>
          <View style={styles.wrapperText}>
            <Text style={styles.declaration}>
              {translate('Covid Statement')}
            </Text>
          </View>
        </ImageBackground>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => navigation.navigate('CovidForm')}>
          <Text
            style={styles.btnText}
            onPress={() => navigation.navigate('CovidForm')}>
            {translate('Form')}{' '}
          </Text>
        </TouchableOpacity>
      </ScrollView>
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
    height: '73%',
    resizeMode: 'cover',
  },
  titleWrapper: {
    marginTop: 65,
    marginLeft: 25,
  },
  mainTitleIcon: {
    color: 'white',
    fontSize: 38,
    marginLeft: -6,
  },
  mainTitle: {
    color: 'white',
    fontSize: 27,
  },
  wrapperText: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  declaration: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    fontSize: 15,
    lineHeight: 19,
    fontWeight: 'bold',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 3,
  },
  buttonWrapper: {
    marginTop: '15%',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '55%',
    marginBottom: 30,
  },
  btnText: {
    backgroundColor: '#0db4e8',
    textAlign: 'center',
    padding: 15,
    borderRadius: 30,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 3,
  },
});

export default CovidPage;
