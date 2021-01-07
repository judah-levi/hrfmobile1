import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Keyboard,
  ScrollView,
  PixelRatio,
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
  const [keyboardOn, setKeyboardOn] = useState(false);
  const {translate, handleLocalizationChange} = useContext(stateContext);
  const firstNameDisabled =
    formData.firstname === undefined || formData.firstname === '';
  const lastNameDisabled =
    formData.lastname === undefined || formData.lastname === '';
  const suggestionDisabled =
    formData.suggestion === undefined || formData.suggestion === '';

  useEffect(() => {
    RNLocalize.addEventListener('change', handleLocalizationChange);
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardOn(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardOn(false);
      },
    );

    return () => {
      RNLocalize.removeEventListener('change', handleLocalizationChange);
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const sendEmail = () => {
    axios.post(
      'https://us-central1-hrfmobile-5638b.cloudfunctions.net/submitSuggestion',
      formData,
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail();
    navigation.navigate('MainMenu');
  };

  return (
    <View style={styles.mainWrapper}>
      <Nav />
      <ScrollView
        style={styles.rightBackground}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        {keyboardOn ? null : (
          <View style={styles.topWrapper}>
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
                <Text style={styles.mainTitle}>
                  {translate('Suggestions2')}
                </Text>
              </View>
            </View>
          </View>
        )}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.bottomWrapper}>
          <TextInput
            selectionColor={'white'}
            autoCapitalize="words"
            name="firstname"
            style={styles.equipmentInput}
            placeholder={translate('First Name')}
            value={formData.firstname}
            onChangeText={(firstname) => setFormData({...formData, firstname})}
          />
          <TextInput
            selectionColor={'white'}
            autoCapitalize="words"
            name="lastname"
            style={styles.equipmentInput}
            placeholder={translate('Last Name')}
            value={formData.lastname}
            onChangeText={(lastname) => setFormData({...formData, lastname})}
          />
          <TextInput
            selectionColor={'white'}
            autoCapitalize="sentences"
            name="suggestion"
            style={styles.equipmentTextTarea}
            placeholder={translate('Suggestion desc')}
            multiline={true}
            numberOfLines={7}
            value={formData.suggestion}
            onChangeText={(suggestion) =>
              setFormData({...formData, suggestion})
            }
          />
          <TouchableOpacity
            style={styles.btnEquipment}
            disabled={
              firstNameDisabled || lastNameDisabled || suggestionDisabled
            }
            onPress={handleSubmit}>
            <Text
              style={
                firstNameDisabled || lastNameDisabled || suggestionDisabled
                  ? styles.btnTextEquipmentDisabled
                  : styles.btnTextEquipment
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
  equipmentInput: {
    marginBottom: '3%',
    paddingLeft: 10,
    backgroundColor: 'white',
    height: 55,
    borderRadius: 10,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 3,
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  equipmentTextTarea: {
    marginBottom: '3%',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'white',
    textAlignVertical: 'top',
    borderRadius: 10,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 3,
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  btnEquipment: {
    marginTop: '3%',
    marginBottom: '6%',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
  },
  btnTextEquipment: {
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
  btnTextEquipmentDisabled: {
    backgroundColor: 'rgb(180,180,180)',
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
