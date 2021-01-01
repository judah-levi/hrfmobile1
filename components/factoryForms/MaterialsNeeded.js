import React, {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Keyboard,
  ScrollView,
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
  const [keyboardOn, setKeyboardOn] = useState(false);
  const {translate, handleLocalizationChange} = useContext(stateContext);

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
      'https://us-central1-hrfmobile-5638b.cloudfunctions.net/submitMaterialRequest',
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
                  {translate('Materials Needed2')}
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
            name="stockCode"
            style={styles.equipmentInput}
            placeholder={translate('Stock Code')}
            value={formData.stockCode}
            onChangeText={(stockCode) => setFormData({...formData, stockCode})}
          />
          <TextInput
            selectionColor={'white'}
            autoCapitalize="words"
            name="quantityShort"
            style={styles.equipmentInput}
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
            style={styles.equipmentTextTarea}
            multiline={true}
            numberOfLines={7}
            placeholder={translate('Material Description')}
            value={formData.description}
            onChangeText={(description) =>
              setFormData({...formData, description})
            }
          />
          <TouchableOpacity style={styles.btnEquipment} onPress={handleSubmit}>
            <Text style={styles.btnTextEquipment}>
              {translate('Submit btn')}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>
    </View>
  );
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
    width: 165,
    height: 155,
    position: 'absolute',
    top: '4%',
    right: '2%',
    zIndex: 0,
  },
  textTitleWrapper: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: '5%',
  },
  mainTitleIcon: {
    color: 'white',
    fontSize: 30,
    marginLeft: -6,
  },
  mainTitle: {
    color: 'white',
    fontSize: 25,
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
});

export default MaterialsNeeded;
