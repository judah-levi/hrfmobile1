import React, {useEffect, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
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

  return (
    <View style={styles.mainWrapper}>
      <Nav />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.topWrapper}>
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
              <Text style={styles.mainTitle}>{translate('Covid-192')}</Text>
            </View>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.bottomWrapper}>
          <Text style={styles.declaration}>{translate('Covid Statement')}</Text>
          <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={() => navigation.navigate('CovidForm')}>
            <Text
              style={styles.btnText}
              onPress={() => navigation.navigate('CovidForm')}>
              {translate('Form')}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flexDirection: 'row',
    height: '100%',
  },
  rightBackground: {
    flex: 1,
    height: '100%',
  },
  topWrapper: {
    height: '30%',
  },
  titleWrapper: {
    overflow: 'hidden',
    flex: 2,
    borderBottomRightRadius: 165,
    backgroundColor: '#73a4d8',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 5,
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
  mainTitleIcon: {
    color: 'white',
    fontSize: 30,
    marginLeft: -6,
  },
  mainTitle: {
    color: 'white',
    fontSize: 25,
  },
  bottomWrapper: {
    marginTop: '10%',
    height: 100,
  },
  declaration: {
    backgroundColor: 'white',
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 20,
    borderRadius: 10,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 'bold',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 3,
  },
  buttonWrapper: {
    marginTop: '6%',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
    marginBottom: '6%',
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
