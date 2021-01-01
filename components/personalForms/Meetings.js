import React, {useContext, useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  Keyboard,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import * as RNLocalize from 'react-native-localize';
import {stateContext} from '../context/context';
import Nav from '../Nav';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Meetings() {
  const navigation = useNavigation();
  const [keyboardOn, setKeyboardOn] = useState(false);
  const [selectedRoleValue, setSelectedRoleValue] = useState('');
  const [selectedEmailValue, setSelectedEmailValue] = useState('');
  const [formData, setFormData] = useState({});
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

  const handleRolePicker = (role) => {
    setSelectedRoleValue(role), setFormData({...formData, role});
  };

  const handleEmailPicker = (contactEmail) => {
    setSelectedEmailValue(contactEmail),
      setFormData({...formData, contactEmail});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({data: formData});
    sendEmail();
    navigation.navigate('MainPage');
  };

  const sendEmail = () => {
    axios.post(
      'https://us-central1-hrfmobile-5638b.cloudfunctions.net/submitMeetingReq',
      formData,
    );
  };

  return (
    <View style={styles.mainWrapper}>
      <Nav />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        {keyboardOn ? (
          <Text></Text>
        ) : (
          <View style={styles.topWrapper}>
            <View style={styles.titleWrapper}>
              <Image
                style={styles.imageCisne}
                source={require('../../pics/f-2.png')}
              />
              <View style={styles.textTitleWrapper}>
                <MaterialCommunityIcons
                  name="account-outline"
                  style={styles.mainTitleIcon}
                />
                <Text style={styles.mainTitle}>{translate('Meetings2')}</Text>
              </View>
            </View>
          </View>
        )}
        <ScrollView
          style={styles.bottomWrapper}
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}>
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
          <View style={styles.pickerWrapper}>
            <Picker
              style={styles.meetingPicker}
              name="role"
              value={formData.role}
              selectedValue={selectedRoleValue}
              onValueChange={(role) => handleRolePicker(role)}>
              <Picker.Item label={translate('Role selector')} value="" />
              <Picker.Item label={translate('Warehouse')} value="Warehouse" />
              <Picker.Item label={translate('Bakery')} value="Bakery" />
              <Picker.Item label={translate('Dry Pack')} value="Dry pack" />
              <Picker.Item label={translate('Dry Mix')} value="Dry mix" />
              <Picker.Item
                label={translate('Maintenance')}
                value="Maintenance"
              />
              <Picker.Item label={translate('Mechanical')} value="Mechanical" />
            </Picker>
          </View>
          <View style={styles.pickerWrapper}>
            <Picker
              style={styles.meetingPicker}
              name="contactEmail"
              value={formData.contactEmail}
              selectedValue={selectedEmailValue}
              onValueChange={(contactEmail) => handleEmailPicker(contactEmail)}>
              <Picker.Item label={translate('Meeting selector')} value="" />
              <Picker.Item
                label={translate('Dry Mix/Pack Supervisor')}
                value="manuel@hudsonriverfoods.com"
              />
              <Picker.Item
                label={translate('Bakery Supervisor')}
                value="ambar@hudsonriverfoods.com"
              />
              <Picker.Item
                label={translate('Maintenance Manager')}
                value="jerryhof@hudsonriverfoods.com"
              />
              <Picker.Item
                label={translate('Facilities Manager')}
                value="victor@hudsonriverfoods.com"
              />
              <Picker.Item
                label={translate('Purchasing Manager')}
                value="phil@hudsonriverfoods.com"
              />
              <Picker.Item
                label={translate('Quality Assurance Manager')}
                value="steve@hudsonriverfoods.com"
              />
              <Picker.Item
                label={translate('Warehouse/DTC Manager')}
                value="willis@hudsonriverfoods.com"
              />
            </Picker>
          </View>
          <TextInput
            selectionColor={'white'}
            autoCapitalize="sentences"
            name="meetingDescription"
            style={styles.equipmentTextTarea}
            placeholder={translate('Meeting desc')}
            multiline={true}
            numberOfLines={7}
            value={formData.meetingDescription}
            onChangeText={(meetingDescription) =>
              setFormData({...formData, meetingDescription})
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
  pickerWrapper: {
    marginBottom: '3%',
    borderRadius: 10,
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    overflow: 'hidden',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 3,
  },
  meetingPicker: {
    backgroundColor: 'white',
    height: 55,
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

export default Meetings;
