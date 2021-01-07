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
  PixelRatio,
} from 'react-native';
import {stateContext} from './context/context';
import * as RNLocalize from 'react-native-localize';
import axios from 'axios';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function VerificationPage() {
  const [verificationCode, setVerificationCode] = useState('');
  const [keyboardOn, setKeyboardOn] = useState(false);
  const [error, setError] = useState(false);
  const {
    translate,
    setI18nConfig,
    handleLocalizationChange,
    userInfo,
    phoneNumber,
    setToken,
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

  const verificationLogin = async (verificationCode) => {
    Keyboard.dismiss();
    try {
      let res = await axios({
        url: `https://hrf-api-auth-kdrukbtfra-ue.a.run.app/verify-login/${phoneNumber}/${verificationCode}`,
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setUserRole(userInfo.role);
      setToken(userInfo.firstName);
      AsyncStorage.setItem('token', userInfo.firstName);
      AsyncStorage.setItem('role', userInfo.role);
    } catch (err) {
      setError(true), setVerificationCode('');
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
              style={styles.logoImage}
              source={require('../pics/HeaderLogo_180x.webp')}
            />
          </View>
        )}
        <View style={keyboardOn ? styles.inputOut : styles.inputIn}>
          <TextInput
            value={verificationCode}
            onChangeText={(code) => setVerificationCode(code)}
            secureTextEntry={true}
            placeholder={translate('Verification Code')}
            clearTextOnFocus
            style={error ? styles.inputError : styles.input}
            placeholderTextColor="white"
          />
          <TouchableOpacity
            onPress={() => verificationLogin(verificationCode)}
            style={verificationCode ? styles.buttonP : styles.button}>
            <Text style={{color: '#fff', fontSize: 19}}>
              {translate('Conf Verification Code')}
            </Text>
          </TouchableOpacity>
          <View>
            {error ? (
              <View style={styles.errorWrapper}>
                <MaterialIcons name="warning" style={styles.errorIcon} />
                <Text style={styles.errorText}>{translate('Code Error')}</Text>
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

let font_size_welcome = 40;
let logo_w_h = 150;
let input_height = 75;
let input_width = 280;

if (PixelRatio.get() <= 2) {
  font_size_welcome = 35;
  logo_w_h = 130;
  input_height = 60;
}

if (PixelRatio.get() <= 1.5) {
  logo_w_h = 110;
  input_width = 240;
  input_height = 45;
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
  logoImage: {
    width: logo_w_h,
    height: logo_w_h,
  },
  welcomeText: {
    fontSize: font_size_welcome,
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
    height: input_height,
    width: input_width,
    backgroundColor: 'transparent',
    borderRadius: 35,
    fontSize: 19,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Roboto-Light',
  },
  inputError: {
    borderWidth: 1,
    borderColor: 'red',
    height: input_height,
    width: input_width,
    backgroundColor: 'transparent',
    borderRadius: 35,
    fontSize: 19,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Roboto-Light',
  },
  button: {
    backgroundColor: 'rgba(88, 167, 218, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(88, 167, 218, 0.7)',
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 35,
    height: input_height,
    width: input_width,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 3,
  },
  buttonP: {
    backgroundColor: '#58a7da',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#58a7da',
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 35,
    height: input_height,
    width: input_width,
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
    fontFamily: 'Roboto-Light',
  },
});
