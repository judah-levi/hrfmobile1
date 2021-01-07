import React, {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  PixelRatio,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment-timezone';
import * as RNLocalize from 'react-native-localize';
import {stateContext} from '../context/context';
import Nav from '../Nav';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const formattedDate = moment.tz('America/New_York').format('l');

function CovidFormEn() {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({date: formattedDate});
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');
  const [value6, setValue6] = useState('');
  const [value7, setValue7] = useState('');
  const [value8, setValue8] = useState('');
  const [certify, setCertify] = useState('');
  const {translate, handleLocalizationChange} = useContext(stateContext);
  const firstNameDisabled =
    formData.firstname === undefined || formData.firstname === '';
  const lastNameDisabled =
    formData.lastname === undefined || formData.lastname === '';
  const certifyDisabled =
    formData.certify === undefined || formData.certify === '';

  useEffect(() => {
    RNLocalize.addEventListener('change', handleLocalizationChange);
    setTimeout(() => {
      RNLocalize.removeEventListener('change', handleLocalizationChange);
    }, 2000);
  }, []);

  const sendEmail = () => {
    axios.post(
      'https://us-central1-hrfmobile-5638b.cloudfunctions.net/submitCovidForm',
      formData,
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail();
    navigation.navigate('MainMenu');
  };

  const handleValue1 = (value1) => {
    setValue1(value1), setFormData({...formData, value1});
  };

  const handleValue2 = (value2) => {
    setValue2(value2), setFormData({...formData, value2});
  };

  const handleValue3 = (value3) => {
    setValue3(value3), setFormData({...formData, value3});
  };

  const handleValue4 = (value4) => {
    setValue4(value4), setFormData({...formData, value4});
  };

  const handleValue5 = (value5) => {
    setValue5(value5), setFormData({...formData, value5});
  };

  const handleValue6 = (value6) => {
    setValue6(value6), setFormData({...formData, value6});
  };

  const handleValue7 = (value7) => {
    setValue7(value7), setFormData({...formData, value7});
  };

  const handleValue8 = (value8) => {
    setValue8(value8), setFormData({...formData, value8});
  };

  const handleCertify = (certify) => {
    setCertify(certify), setFormData({...formData, certify});
  };

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
          <View style={styles.formWrapper}>
            <Text style={styles.healthDec}>
              {translate('Covid Health Dec')}
            </Text>
            <Text style={styles.pleaseAnswer}>
              {translate('Please answer')} {'\n'}
            </Text>
            <View>
              <Text style={styles.p}>
                {translate('Covid question 1')} {'\n'}
              </Text>
              <RadioButton.Group value={formData.value1}>
                <View style={styles.radioGroup}>
                  <View>
                    <RadioButton.Item
                      value="yes"
                      label={translate('Yes')}
                      style={styles.radiobutton}
                      onPress={() => handleValue1('yes')}
                    />
                  </View>
                  <View>
                    <RadioButton.Item
                      value="no"
                      label="No"
                      style={styles.radiobutton}
                      onPress={() => handleValue1('no')}
                    />
                  </View>
                </View>
              </RadioButton.Group>
            </View>
            <View>
              <Text style={styles.p}>
                {translate('Covid question 2')} {'\n'}
              </Text>
              <RadioButton.Group value={formData.value2}>
                <View style={styles.radioGroup}>
                  <View>
                    <RadioButton.Item
                      value="yes"
                      label={translate('Yes')}
                      style={styles.radiobutton}
                      onPress={() => handleValue2('yes')}
                    />
                  </View>
                  <View>
                    <RadioButton.Item
                      value="no"
                      label="No"
                      style={styles.radiobutton}
                      onPress={() => handleValue2('no')}
                    />
                  </View>
                </View>
              </RadioButton.Group>
            </View>
            <View>
              <Text style={styles.p}>
                {translate('Covid question 3')} {'\n'}
              </Text>
              <RadioButton.Group value={formData.value3}>
                <View style={styles.radioGroup}>
                  <View>
                    <RadioButton.Item
                      value="yes"
                      label={translate('Yes')}
                      style={styles.radiobutton}
                      onPress={() => handleValue3('yes')}
                    />
                  </View>
                  <View>
                    <RadioButton.Item
                      value="no"
                      label="No"
                      style={styles.radiobutton}
                      onPress={() => handleValue3('no')}
                    />
                  </View>
                </View>
              </RadioButton.Group>
            </View>
            <View>
              <Text style={styles.p}>
                {translate('Covid question 4')} {'\n'}
              </Text>
              <RadioButton.Group value={formData.value4}>
                <View style={styles.radioGroup}>
                  <View>
                    <RadioButton.Item
                      value="yes"
                      label={translate('Yes')}
                      style={styles.radiobutton}
                      onPress={() => handleValue4('yes')}
                    />
                  </View>
                  <View>
                    <RadioButton.Item
                      value="no"
                      label="No"
                      style={styles.radiobutton}
                      onPress={() => handleValue4('no')}
                    />
                  </View>
                </View>
              </RadioButton.Group>
            </View>
            <View>
              <Text style={styles.p}>
                {translate('Covid question 5')} {'\n'}
              </Text>
              <RadioButton.Group value={formData.value5}>
                <View style={styles.radioGroup}>
                  <View>
                    <RadioButton.Item
                      value="yes"
                      label={translate('Yes')}
                      style={styles.radiobutton}
                      onPress={() => handleValue5('yes')}
                    />
                  </View>
                  <View>
                    <RadioButton.Item
                      value="no"
                      label="No"
                      style={styles.radiobutton}
                      onPress={() => handleValue5('no')}
                    />
                  </View>
                </View>
              </RadioButton.Group>
            </View>
            <View>
              <Text style={styles.p}>
                {translate('Covid question 6')} {'\n'}
              </Text>
              <RadioButton.Group value={formData.value6}>
                <View style={styles.radioGroup}>
                  <View>
                    <RadioButton.Item
                      value="yes"
                      label={translate('Yes')}
                      style={styles.radiobutton}
                      onPress={() => handleValue6('yes')}
                    />
                  </View>
                  <View>
                    <RadioButton.Item
                      value="no"
                      label="No"
                      style={styles.radiobutton}
                      onPress={() => handleValue6('no')}
                    />
                  </View>
                </View>
              </RadioButton.Group>
            </View>
            <View>
              <Text style={styles.p}>
                {translate('Covid question 7')} {'\n'}
              </Text>
              <RadioButton.Group value={formData.value7}>
                <View style={styles.radioGroup}>
                  <View>
                    <RadioButton.Item
                      value="yes"
                      label={translate('Yes')}
                      style={styles.radiobutton}
                      onPress={() => handleValue7('yes')}
                    />
                  </View>
                  <View>
                    <RadioButton.Item
                      value="no"
                      label="No"
                      style={styles.radiobutton}
                      onPress={() => handleValue7('no')}
                    />
                  </View>
                </View>
              </RadioButton.Group>
            </View>
            <View>
              <Text style={styles.p}>
                {translate('Covid question 8')}
                {'\n'}
              </Text>
              <RadioButton.Group value={formData.value8}>
                <View style={styles.radioGroup}>
                  <View>
                    <RadioButton.Item
                      value="yes"
                      label={translate('Yes')}
                      style={styles.radiobutton}
                      onPress={() => handleValue8('yes')}
                    />
                  </View>
                  <View>
                    <RadioButton.Item
                      value="no"
                      label="No"
                      style={styles.radiobutton}
                      onPress={() => handleValue8('no')}
                    />
                  </View>
                </View>
              </RadioButton.Group>
            </View>
            <View style={styles.suggestionWrapper}>
              <TextInput
                selectionColor={'white'}
                autoCapitalize="words"
                name="firstname"
                style={styles.suggestionInput}
                placeholder={translate('First Name')}
                value={formData.firstname}
                onChangeText={(firstname) =>
                  setFormData({...formData, firstname})
                }
              />
              <TextInput
                required={true}
                name="lastname"
                style={styles.suggestionInput}
                placeholder={translate('Last Name')}
                value={formData.lastname}
                autoCapitalize="words"
                selectionColor={'white'}
                onChangeText={(lastname) =>
                  setFormData({...formData, lastname})
                }
              />
            </View>
            <RadioButton.Group value={formData.certify}>
              <View style={styles.radioGroupLast}>
                <View style={styles.col3}>
                  <RadioButton.Item
                    value="yes"
                    onPress={() => handleCertify('yes')}
                  />
                </View>
                <View>
                  <Text style={styles.p1}>{translate('Covid certify')}</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>
          <TouchableOpacity
            style={styles.btnSuggestion}
            disabled={
              firstNameDisabled ||
              lastNameDisabled ||
              certifyDisabled ||
              value1 === '' ||
              value2 === '' ||
              value3 === '' ||
              value4 === '' ||
              value5 === '' ||
              value6 === '' ||
              value7 === '' ||
              value8 === ''
            }
            onPress={handleSubmit}>
            <Text
              style={
                firstNameDisabled ||
                lastNameDisabled ||
                certifyDisabled ||
                value1 === '' ||
                value2 === '' ||
                value3 === '' ||
                value4 === '' ||
                value5 === '' ||
                value6 === '' ||
                value7 === '' ||
                value8 === ''
                  ? styles.btnTextSuggestionDisabled
                  : styles.btnTextSuggestion
              }>
              {translate('Submit btn')}
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
  formWrapper: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 5,
  },
  healthDec: {
    color: '#00486e',
    fontWeight: '900',
    fontSize: 25,
    marginBottom: 15,
    marginLeft: 2,
    marginRight: 2,
  },
  pleaseAnswer: {
    fontSize: 16,
    marginLeft: 5,
    marginRight: 5,
  },
  suggestionWrapper: {
    marginTop: '4%',
    marginLeft: 5,
    marginRight: 5,
  },
  p: {
    fontSize: 14,
    textAlign: 'left',
    marginLeft: 5,
    marginRight: 5,
    fontWeight: 'bold',
    marginBottom: -20,
  },
  radioGroupLast: {
    flexDirection: 'column',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '3%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  p1: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  suggestionInput: {
    paddingLeft: 10,
    backgroundColor: 'white',
    height: 55,
    borderRadius: 10,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 3,
    marginBottom: '6%',
    fontSize: 15,
    borderWidth: 1,
    borderColor: 'rgb(180, 180, 180)',
  },
  btnSuggestion: {
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '6%',
    marginBottom: '6%',
  },
  btnTextSuggestion: {
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
  btnTextSuggestionDisabled: {
    backgroundColor: 'rgb(180, 180, 180)',
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
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CovidFormEn;
