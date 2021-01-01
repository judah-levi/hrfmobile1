import React, {useContext, useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
  Keyboard,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {stateContext} from './context/context';
import * as RNLocalize from 'react-native-localize';
import axios from 'axios';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function LoginPage() {
  const navigation = useNavigation();
  const [keyboardOn, setKeyboardOn] = useState(false);
  const [error, setError] = useState(false);
  const {
    translate,
    setI18nConfig,
    handleLocalizationChange,
    userInfo,
    setUserInfo,
    phoneNumber,
    setPhoneNumber,
    setUserRole,
  } = useContext(stateContext);

  setI18nConfig();

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

  const phoneNumberLogin = async (phoneNumber) => {
    try {
      let res = await axios({
        url: `https://hrf-api-auth-kdrukbtfra-ue.a.run.app/sms-login/${phoneNumber}`,
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.status == 200) {
        setUserInfo(res.data);
        setPhoneNumber(phoneNumber);
        navigation.navigate('Verification');
      }
      return res.data;
    } catch (err) {
      console.error(err);
      setPhoneNumber('');
      setError(true);
    }
  };

  return (
    <View style={styles.loginWrapper}>
      <ImageBackground
        style={styles.imgLogo}
        borderBottomRightRadius={40}
        borderBottomLeftRadius={40}
        source={require('../pics/fondo_1.jpg')}>
        <View style={styles.loginHeader}></View>
        {keyboardOn ? null : (
          <View style={styles.welcomeIn}>
            <Text style={styles.welcomeText}>{translate('Welcome')}</Text>
          </View>
        )}
        {keyboardOn ? null : (
          <View style={styles.logoIn}>
            <Image
              style={{width: 130, height: 130}}
              source={require('../pics/HeaderLogo_180x.webp')}
            />
          </View>
        )}
        <View style={keyboardOn ? styles.inputOut : styles.inputIn}>
          <TextInput
            onKeyPress={() => setError(false)}
            placeholder={translate('Phone Number')}
            value={phoneNumber}
            onChangeText={(num) => setPhoneNumber(num)}
            clearTextOnFocus
            style={error ? styles.inputError : styles.input}
            placeholderTextColor="white"
          />
          <TouchableOpacity
            onPress={() => phoneNumberLogin(phoneNumber)}
            style={styles.button}>
            <Text style={{color: '#fff', fontSize: 19}}>
              {translate('Signin')}
            </Text>
          </TouchableOpacity>
          <View>
            {error ? (
              <View style={styles.errorWrapper}>
                <MaterialIcons name="warning" style={styles.errorIcon} />
                <Text style={styles.errorText}>{translate('Phone Error')}</Text>
              </View>
            ) : null}
          </View>
        </View>
      </ImageBackground>
      <View style={styles.needHelpWrapper}>
        <MaterialCommunityIcon
          name="map-marker-question-outline"
          style={styles.needHelpIcon}
        />
        <Text style={styles.needHelpText}>{translate('NeedHelp')}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginWrapper: {
    flex: 1,
    backgroundColor: '#00486e',
  },
  loginHeader: {
    flex: 0.5,
  },
  imgLogo: {
    flex: 7,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  welcomeText: {
    fontSize: 35,
    color: 'white',
    textAlign: 'center',
  },
  logoIn: {
    flex: 2.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputOut: {
    flex: 3,
    alignItems: 'center',
  },
  inputIn: {
    paddingTop: 7,
    flex: 2.5,
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    height: '27%',
    width: 280,
    backgroundColor: 'transparent',
    borderRadius: 35,
    fontSize: 19,
    color: 'white',
    textAlign: 'center',
  },
  inputError: {
    borderWidth: 1,
    borderColor: 'red',
    height: '27%',
    width: 280,
    backgroundColor: 'transparent',
    borderRadius: 35,
    fontSize: 19,
    color: 'white',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#58a7da',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#58a7da',
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 35,
    width: 280,
    height: '27%',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 3,
  },
  errorWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '4%',
  },
  errorIcon: {
    color: 'red',
    fontSize: 19,
    marginRight: 6,
  },
  errorText: {
    color: 'white',
    fontSize: 15,
  },
  needHelpWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  needHelpIcon: {
    color: 'white',
    marginRight: 5,
    fontSize: 15,
  },
  needHelpText: {
    color: 'white',
    fontSize: 17,
  },
});
