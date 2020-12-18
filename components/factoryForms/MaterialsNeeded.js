import React, {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {stateContext} from '../context/context';
import * as RNLocalize from 'react-native-localize';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Nav from '../Nav';

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
              {translate('Materials Needed2')}
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.materialWrapper}>
          <TextInput
            selectionColor={'white'}
            autoCapitalize="words"
            name="stockCode"
            style={styles.materialInput}
            placeholder={translate('Stock Code')}
            value={formData.stockCode}
            onChangeText={(stockCode) => setFormData({...formData, stockCode})}
          />
          <TextInput
            selectionColor={'white'}
            autoCapitalize="words"
            name="quantityShort"
            style={styles.materialInput}
            placeholder={translate('Quantity Short')}
            value={formData.quantityShort}
            onChangeText={(quantityShort) =>
              setFormData({...formData, quantityShort})
            }
          />
          <TextInput
            selectionColor={'white'}
            autoCapitalize="words"
            name="description"
            style={styles.materialTextTarea}
            multiline={true}
            numberOfLines={7}
            placeholder={translate('Material Description')}
            value={formData.description}
            onChangeText={(description) =>
              setFormData({...formData, description})
            }
          />
          <TouchableOpacity style={styles.btnStock} onPress={handleSubmit}>
            <Text style={styles.btnTextStock}>{translate('Submit btn')}</Text>
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
    width: '85%',
    backgroundColor: 'rgb(218, 218, 218)',
  },
  rightBackground: {
    width: '100%',
    height: '70%',
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
  materialWrapper: {
    marginTop: -380,
    marginLeft: 20,
    marginRight: 20,
  },
  materialInput: {
    marginBottom: '3%',
    paddingLeft: 10,
    backgroundColor: 'white',
    height: 55,
    borderRadius: 10,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 3,
  },
  materialTextTarea: {
    marginBottom: '3%',
    paddingLeft: 10,
    backgroundColor: 'white',
    textAlignVertical: 'top',
    borderRadius: 10,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 3,
  },
  btnStock: {
    marginTop: '6%',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
  },
  btnTextStock: {
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

export default MaterialsNeeded;
