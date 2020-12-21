import React, {useContext, useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {stateContext} from './context/context';
import * as RNLocalize from 'react-native-localize';
import axios from 'axios';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function VerificationPage() {
  const [verificationCode, setVerificationCode] = useState('');
  const navigation = useNavigation();
  const [error, setError] = useState(false);
  const {
    translate,
    setI18nConfig,
    handleLocalizationChange,
    userInfo,
    phoneNumber,
  } = useContext(stateContext);

  setI18nConfig();

  useEffect(() => {
    RNLocalize.addEventListener('change', handleLocalizationChange);
    return RNLocalize.removeEventListener('change', handleLocalizationChange);
  }, []);

  const enterWebsite = (verificationCode) => {
    axios
      .post(
        `https://hrf-api-auth-kdrukbtfra-ue.a.run.app/verify-login/${phoneNumber}/${verificationCode}`,
      )
      .then((res) => {
        if (userInfo.role === 'user') {
          navigation.navigate('MainMenu');
        } else {
          navigation.navigate('AdminNav');
        }
        setError(false);
      })
      .catch(
        (err) => console.log(err),
        setError(true),
        setVerificationCode(''),
      );
  };
  return (
    <ScrollView
      style={styles.loginWrapper}
      showsVerticalScrollIndicator={false}>
      <View style={styles.loginSubWrapper}>
        <ImageBackground
          style={{width: '100%', height: '100%'}}
          source={require('../pics/fondo_1.jpg')}
          imageStyle={{
            borderBottomRightRadius: 40,
            borderBottomLeftRadius: 40,
          }}>
          <View style={styles.card}>
            <Text style={styles.welcomeText}>{translate('Welcome')}</Text>
            <Image
              style={styles.logo}
              source={require('../pics/HeaderLogo_180x.webp')}
            />
            <TextInput
              onKeyPress={() => setError(false)}
              value={verificationCode}
              style={error ? styles.inputError : styles.input}
              onChangeText={(code) => setVerificationCode(code)}
              clearTextOnFocus
              secureTextEntry={true}
              placeholder={translate('Verification Code')}
              placeholderTextColor="white"
            />
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => enterWebsite(verificationCode)}>
              <Text style={styles.buttonText}>
                {translate('Conf Verification Code')}
              </Text>
            </TouchableOpacity>
            <View>
              {error ? (
                <View style={styles.errorWrapper}>
                  <MaterialIcons name="warning" style={styles.warningIcon} />
                  <Text style={styles.helperText}>
                    {translate('Code Error')}
                  </Text>
                </View>
              ) : null}
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.bottomView}>
        <MaterialCommunityIcon
          name="map-marker-question-outline"
          style={styles.questionIcon}
        />
        <Text style={styles.bottomViewText}>{translate('NeedHelp')}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loginWrapper: {
    backgroundColor: '#00486e',
  },
  loginSubWrapper: {
    height: '90%',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.7,
    elevation: 18,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    marginTop: 75,
    marginBottom: 205,
    width: 280,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  welcomeText: {
    color: 'white',
    fontSize: 35,
    marginBottom: 75,
  },
  logo: {
    height: 125,
    width: 125,
    marginBottom: 50,
  },
  input: {
    height: 70,
    width: '100%',
    backgroundColor: 'transparent',
    borderRadius: 35,
    borderWidth: 1,
    borderColor: 'white',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  errorWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
  },
  inputError: {
    height: 70,
    width: '100%',
    backgroundColor: 'transparent',
    borderRadius: 35,
    borderWidth: 1,
    borderColor: 'red',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  warningIcon: {
    color: 'red',
    fontSize: 19,
  },
  loginButton: {
    backgroundColor: '#58a7da',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#58a7da',
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 35,
    width: '100%',
    height: 70,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  helperText: {
    textAlign: 'center',
    borderRadius: 10,
    padding: 10,
    maxWidth: 260,
    marginTop: '10%',
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
  },
  bottomView: {
    backgroundColor: '#00486e',
    borderColor: '#00486e',
    borderWidth: 1,
    height: '11%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionIcon: {
    color: 'white',
    fontSize: 15,
  },
  bottomViewText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    marginLeft: 5,
  },
});
