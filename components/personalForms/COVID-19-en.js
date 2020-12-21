import React, {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput,
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
    console.log({data: formData});
    sendEmail();
    navigation.navigate('MainPage');
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
              <View style={styles.radioGroup}>
                <View style={styles.col3}>
                  <RadioButton.Item
                    value="yes"
                    style={styles.radiobutton}
                    onPress={() => handleCertify('yes')}
                  />
                </View>
                <View style={styles.col4}>
                  <Text style={styles.p1}>
                    {translate('Covid certify')} {'\n'}
                  </Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>
          <TouchableOpacity style={styles.btnSuggestion} onPress={handleSubmit}>
            <Text style={styles.btnTextSuggestion}>
              {translate('Submit btn')}
            </Text>
          </TouchableOpacity>
        </ImageBackground>
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
    height: '46%',
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
  formWrapper: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
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
  col3: {
    marginLeft: -20,
  },
  p1: {
    fontSize: 15,
    // textAlign: 'left',
    marginTop: '6%',
    marginLeft: -10,
    marginRight: 10,
    fontWeight: 'bold',
  },
  suggestionInput: {
    backgroundColor: 'white',
    marginBottom: '3%',
    fontSize: 15,
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: 'rgb(180, 180, 180)',
  },
  btnSuggestion: {
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 30,
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
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CovidFormEn;
