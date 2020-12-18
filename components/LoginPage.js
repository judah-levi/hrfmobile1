import React, {useContext, useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {stateContext} from './context/context';
import * as RNLocalize from 'react-native-localize';
import axios from 'axios';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [verificationCode, setVerificationCode] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [error, setError] = useState(false);
  const {translate, setI18nConfig, handleLocalizationChange} = useContext(
    stateContext,
  );

  const admin = 'dan@hudsonriverfoods.com';
  const admin2 = 'kolamiti92@gmail.com';
  const admin3 = 'nicovg_95@hotmail.com';

  setI18nConfig();

  useEffect(() => {
    RNLocalize.addEventListener('change', handleLocalizationChange);
    return RNLocalize.removeEventListener('change', handleLocalizationChange);
  }, []);

  const handleLogin = (phoneNumber) => {
    axios
      .post(
        `https://hrf-api-auth-kdrukbtfra-ue.a.run.app/smslogin/${phoneNumber}`,
      )
      .then((res) => console.log(res));

    setConfirm(true);
    // if (email == admin || email == admin2 || email == admin3) {
    //   navigation.navigate('AdminPage');
    // } else {
    //   navigation.navigate('MainPage');
    // }
  };

  const enterWebsite = (verificationCode) => {
    axios
      .post(
        `https://hrf-api-auth-kdrukbtfra-ue.a.run.app/verifylogin/5491130552352/${verificationCode}`,
      )
      .then((res) => navigation.navigate('MainPage'));
  };

  const handlePress = () => {
    navigation.navigate('MainMenu');
  };

  // if (!confirm) {
  //   return (
  //     <View style={styles.loginWrapper}>
  //       <View style={styles.loginSubWrapper}>
  //         <ImageBackground
  //           style={{width: '100%', height: '100%'}}
  //           source={require('../pics/fondo_1.jpg')}
  //           imageStyle={{
  //             borderBottomRightRadius: 40,
  //             borderBottomLeftRadius: 40,
  //           }}>
  //           <View style={styles.card}>
  //             <Text style={styles.welcomeText}>{translate('Welcome')}</Text>
  //             <Image
  //               style={styles.logo}
  //               source={require('../pics/HeaderLogo_180x.webp')}
  //             />
  //             <TextInput
  //               value={phoneNumber}
  //               style={styles.input}
  //               onChangeText={(num) => setPhoneNumber(num)}
  //               clearTextOnFocus
  //               placeholder={translate('Phone Number')}
  //               placeholderTextColor="white"
  //             />
  //             <TouchableOpacity
  //               style={styles.loginButton}
  //               onPress={() => handleLogin(phoneNumber)}>
  //               <Text style={styles.buttonText}>{translate('Signin')}</Text>
  //             </TouchableOpacity>
  //             {/* <Text style={styles.helperText}>
  //             {error ? translate('Phone Error') : ''}
  //           </Text> */}
  //           </View>
  //         </ImageBackground>
  //       </View>
  //       <View style={styles.bottomView}>
  //         <Text style={styles.bottomViewText}>{translate('NeedHelp')}</Text>
  //       </View>
  //     </View>
  //   );
  // }
  return (
    <View style={styles.loginWrapper}>
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
              value={verificationCode}
              style={styles.input}
              onChangeText={(code) => setVerificationCode(code)}
              clearTextOnFocus
              secureTextEntry={true}
              placeholder={translate('Verification Code')}
              placeholderTextColor="white"
            />
            <TouchableOpacity style={styles.loginButton} onPress={handlePress}>
              {/* onPress={() => enterWebsite(verificationCode)}> */}
              <Text style={styles.buttonText}>
                {translate('Conf Verification Code')}
              </Text>
            </TouchableOpacity>
            {/* <Text style={styles.helperText}>
              {error ? translate('Code Error') : ''}
            </Text> */}
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
    </View>
  );
}

const styles = StyleSheet.create({
  loginWrapper: {
    backgroundColor: '#00486e',
  },
  loginSubWrapper: {
    height: '89%',
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
    backgroundColor: 'rgba(248, 179, 179, 0.7)',
    borderRadius: 10,
    padding: 5,
    maxWidth: 260,
    marginTop: '10%',
    color: 'rgb(199, 15, 15)',
    fontSize: 17,
    fontWeight: 'bold',
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
