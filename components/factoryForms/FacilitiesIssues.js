import React, {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {stateContext} from '../context/context';
import * as RNLocalize from 'react-native-localize';
import Nav from '../Nav';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function FacilitiesIssues() {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({});
  const {translate, handleLocalizationChange} = useContext(stateContext);

  useEffect(() => {
    RNLocalize.addEventListener('change', handleLocalizationChange);
    setTimeout(() => {
      RNLocalize.removeEventListener('change', handleLocalizationChange);
    }, 2000);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({data: formData});
    sendEmail();
    navigation.navigate('MainPage');
  };

  const sendEmail = () => {
    axios.post(
      'https://us-central1-hrfmobile-5638b.cloudfunctions.net/submitFacilitiesIssue',
      formData,
    );
  };

  return (
    <View style={styles.mainWrapper}>
      <Nav />
      <View style={styles.rightWrapper}>
        <ImageBackground
          source={require('../../pics/fondos-2.png')}
          style={styles.rightBackground}>
          <View style={styles.titleWrapper}>
            <MaterialCommunityIcons
              name="cog-outline"
              style={styles.mainTitleIcon}
            />
            <Text style={styles.mainTitle}>
              {translate('Facilities Issues2')}
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.facilitiesWrapper}>
          <TextInput
            selectionColor={'white'}
            autoCapitalize="sentences"
            name="description"
            style={styles.facilitiesInput}
            multiline={true}
            numberOfLines={7}
            placeholder={translate('Facility issue desc')}
            value={formData.description}
            onChangeText={(description) =>
              setFormData({...formData, description})
            }
          />
          <TouchableOpacity style={styles.btnFacilities} onPress={handleSubmit}>
            <Text style={styles.btnTextFacilities}>
              {translate('Submit btn')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flexDirection: 'row',
    height: '100%',
  },
  rightWrapper: {
    // flex: 1,
    width: '85%',
    backgroundColor: 'rgb(218, 218, 218)',
    // borderColor: 'yellow',
    // borderWidth: 3,
  },
  rightBackground: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
    // borderColor: 'red',
    // borderWidth: 3,
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
  facilitiesWrapper: {
    marginTop: -380,
    marginLeft: 20,
    marginRight: 20,
  },
  facilitiesInput: {
    marginBottom: '3%',
    paddingLeft: 10,
    backgroundColor: 'white',
    textAlignVertical: 'top',
    borderRadius: 10,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 3,
  },
  btnFacilities: {
    marginTop: '6%',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
  },
  btnTextFacilities: {
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

export default FacilitiesIssues;
