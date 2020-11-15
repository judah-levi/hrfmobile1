import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import Navbar from '../NavBar';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {stateContext} from '../context';
import * as RNLocalize from 'react-native-localize';

function EquipmentFailure() {
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
      'https://us-central1-hrfmobile-5638b.cloudfunctions.net/submitEquipFailure',
      formData,
    );
  };

  return (
    <View>
      <Navbar />
      <Text style={styles.hOneEquipment}>{translate('Equipment Failure')}</Text>
      <View style={styles.equipmentWrapper}>
        <TextInput
          theme={{colors: {primary: '#00486D'}}}
          selectionColor={'white'}
          autoCapitalize="words"
          underlineColorAndroid={'#00486D'}
          name="lineNumber"
          style={styles.equipmentInput}
          placeholder={translate('Line num')}
          value={formData.lineNumber}
          onChangeText={(lineNumber) => setFormData({...formData, lineNumber})}
        />
        <TextInput
          theme={{colors: {primary: '#00486D'}}}
          selectionColor={'white'}
          autoCapitalize="sentences"
          underlineColorAndroid={'#00486D'}
          name="description"
          style={styles.equipmentInput}
          placeholder={translate('Failure desc')}
          multiline={true}
          numberOfLines={7}
          value={formData.description}
          onChangeText={(description) =>
            setFormData({...formData, description})
          }
        />
        <TouchableOpacity style={styles.btnEquipment} onPress={handleSubmit}>
          <Text style={styles.btnTextEquipment}>{translate('Submit btn')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  equipmentWrapper: {
    marginTop: '4%',
    marginLeft: 15,
    marginRight: 15,
  },
  hOneEquipment: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: '6%',
  },
  equipmentInput: {
    backgroundColor: 'white',
    marginBottom: '1%',
  },
  btnEquipment: {
    marginTop: 10,
    borderRadius: 5,
  },
  btnTextEquipment: {
    backgroundColor: '#00486D',
    textAlign: 'center',
    padding: 15,
    borderRadius: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default EquipmentFailure;
