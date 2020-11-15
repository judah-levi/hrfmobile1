import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import Navbar from '../NavBar';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {stateContext} from '../context';
import * as RNLocalize from 'react-native-localize';

function MaterialsNeeded() {
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
      'https://us-central1-hrfmobile-5638b.cloudfunctions.net/submitMaterialRequest',
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
      <Text style={styles.hOneMaterial}>{translate('Materials Needed')}</Text>
      <View style={styles.materialWrapper}>
        <TextInput
          theme={{colors: {primary: '#00486D'}}}
          selectionColor={'white'}
          autoCapitalize="words"
          underlineColorAndroid={'#00486D'}
          name="stockCode"
          style={styles.materialInput}
          placeholder={translate('Stock Code')}
          value={formData.stockCode}
          onChangeText={(stockCode) => setFormData({...formData, stockCode})}
        />
        <TextInput
          theme={{colors: {primary: '#00486D'}}}
          selectionColor={'white'}
          autoCapitalize="words"
          underlineColorAndroid={'#00486D'}
          name="description"
          style={styles.materialInput}
          multiline={true}
          placeholder={translate('Material Description')}
          value={formData.description}
          onChangeText={(description) =>
            setFormData({...formData, description})
          }
        />
        <TextInput
          theme={{colors: {primary: '#00486D'}}}
          selectionColor={'white'}
          autoCapitalize="words"
          underlineColorAndroid={'#00486D'}
          name="quantityShort"
          style={styles.materialInput}
          multiline={true}
          placeholder={translate('Quantity Short')}
          value={formData.quantityShort}
          onChangeText={(quantityShort) =>
            setFormData({...formData, quantityShort})
          }
        />
        <TouchableOpacity style={styles.btnStock} onPress={handleSubmit}>
          <Text style={styles.btnTextStock}>{translate('Submit btn')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  materialWrapper: {
    marginTop: '4%',
    marginLeft: 15,
    marginRight: 15,
  },
  hOneMaterial: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: '6%',
  },
  materialInput: {
    backgroundColor: 'white',
    marginBottom: '1%',
  },
  btnStock: {
    marginTop: 10,
    borderRadius: 5,
  },
  btnTextStock: {
    backgroundColor: '#00486D',
    textAlign: 'center',
    padding: 15,
    borderRadius: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default MaterialsNeeded;
