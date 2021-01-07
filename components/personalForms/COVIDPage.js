import React, {useEffect, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  PixelRatio,
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

let font_size_title = 28;
let size_icon = 34;
let imageCisne_width = 215;
let imageCisne_height = 205;
let imageCisne_right = '-15%';

if (PixelRatio.get() <= 2) {
  font_size_title = 26;
  size_icon = 32;
  imageCisne_width = 185;
  imageCisne_height = 175;
  imageCisne_right = '-5%';
}
if (PixelRatio.get() <= 1.5) {
  font_size_title = 23;
  size_icon = 28;
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
    lineHeight: 21,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 3,
    fontFamily: 'Roboto-Light',
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
    fontFamily: 'Roboto-Light',
    fontSize: 18,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 3,
  },
});

export default CovidPage;
