import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Nav from '../Nav';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {stateContext} from '../context/context';
import * as RNLocalize from 'react-native-localize';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
              name="cog-outline"
              style={styles.mainTitleIcon}
            />
            <Text style={styles.mainTitle}>{translate('Suggestions2')}</Text>
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
              selectionColor={'white'}
              autoCapitalize="words"
              name="lastname"
              style={styles.suggestionInput}
              placeholder={translate('Last Name')}
              value={formData.lastname}
              onChangeText={(lastname) => setFormData({...formData, lastname})}
            />
            <TextInput
              selectionColor={'white'}
              autoCapitalize="sentences"
              name="suggestion"
              style={styles.suggestionTextTarea}
              placeholder={translate('Suggestion desc')}
              multiline={true}
              numberOfLines={7}
              value={formData.suggestion}
              onChangeText={(suggestion) =>
                setFormData({...formData, suggestion})
              }
            />
            <TouchableOpacity
              style={styles.btnSuggestion}
              onPress={handleSubmit}>
              <Text style={styles.btnTextSuggestion}>
                {translate('Submit btn')}
              </Text>
            </TouchableOpacity>
          </View>
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
    height: '72%',
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
  suggestionWrapper: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  suggestionInput: {
    marginBottom: '3%',
    paddingLeft: 10,
    backgroundColor: 'white',
    height: 55,
    borderRadius: 10,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 3,
  },
  suggestionTextTarea: {
    marginBottom: '3%',
    paddingLeft: 10,
    backgroundColor: 'white',
    textAlignVertical: 'top',
    borderRadius: 10,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 3,
  },
  btnSuggestion: {
    marginTop: '6%',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
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
});

export default Suggestion;
