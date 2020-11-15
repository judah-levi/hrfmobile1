import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import Navbar from '../NavBar';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {stateContext} from '../context';
import * as RNLocalize from 'react-native-localize';

function Suggestion() {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({});
  const {translate, handleLocalizationChange} = useContext(stateContext);

  useEffect(() => {
    RNLocalize.addEventListener('change', handleLocalizationChange);
    setTimeout(() => {
      RNLocalize.removeEventListener('change', handleLocalizationChange);
    }, 2000);
  }, []);

  const sendEmail = () => {
    axios.post(
      'https://us-central1-hrfmobile-5638b.cloudfunctions.net/submitSuggestion',
      formData,
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({data: formData});
    sendEmail();
    navigation.navigate('MainPage');
  };

  return (
    <View>
      <Navbar />
      <Text style={styles.hOneSuggestion}>{translate('Suggestions')}</Text>
      <View style={styles.suggestionWrapper}>
        <TextInput
          theme={{colors: {primary: '#00486D'}}}
          selectionColor={'white'}
          autoCapitalize="words"
          underlineColorAndroid={'#00486D'}
          name="firstname"
          style={styles.suggestionInput}
          placeholder={translate('First Name')}
          value={formData.firstname}
          onChangeText={(firstname) => setFormData({...formData, firstname})}
        />
        <TextInput
          theme={{colors: {primary: '#00486D'}}}
          selectionColor={'white'}
          autoCapitalize="words"
          underlineColorAndroid={'#00486D'}
          name="lastname"
          style={styles.suggestionInput}
          placeholder={translate('Last Name')}
          value={formData.lastname}
          onChangeText={(lastname) => setFormData({...formData, lastname})}
        />
        <TextInput
          theme={{colors: {primary: '#00486D'}}}
          selectionColor={'white'}
          autoCapitalize="sentences"
          underlineColorAndroid={'#00486D'}
          name="suggestion"
          style={styles.suggestionInput}
          placeholder={translate('Suggestion desc')}
          multiline={true}
          numberOfLines={5}
          value={formData.suggestion}
          onChangeText={(suggestion) => setFormData({...formData, suggestion})}
        />
        <TouchableOpacity style={styles.btnSuggestion} onPress={handleSubmit}>
          <Text style={styles.btnTextSuggestion}>
            {translate('Submit btn')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  suggestionWrapper: {
    marginTop: '4%',
    marginLeft: 15,
    marginRight: 15,
  },
  hOneSuggestion: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: '6%',
  },
  suggestionInput: {
    backgroundColor: 'white',
    marginBottom: '1%',
  },
  btnSuggestion: {
    marginTop: 10,
    borderRadius: 2,
  },
  btnTextSuggestion: {
    backgroundColor: '#00486D',
    textAlign: 'center',
    padding: 15,
    borderRadius: 4,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Suggestion;
