import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Keyboard,
  PixelRatio,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import CalendarPicker from 'react-native-calendar-picker';
import Moment from 'moment';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {stateContext} from '../context/context';
import * as RNLocalize from 'react-native-localize';
import Nav from '../Nav';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class SickDay extends React.Component {
  static contextType = stateContext;
  state = {
    formData: '',
    keyboardOn: false,
  };

  componentDidMount() {
    this.context.setI18nConfig();
    RNLocalize.addEventListener(
      'change',
      this.context.handleLocalizationChange,
    );
    Keyboard.addListener('keyboardDidShow', () => {
      this.setState({keyboardOn: true});
    });
    Keyboard.addListener('keyboardDidHide', () => {
      this.setState({keyboardOn: false});
    });
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener(
      'change',
      this.context.handleLocalizationChange,
    );
  }

  onDateChange = (date, type) => {
    let state = this.state.formData;
    if (type === 'END_DATE') {
      state.maxDate = date;
    } else {
      state.minDate = date;
      state.maxDate = null;
    }
  };

  handleChange = (name, value) => {
    this.setState((previousState) => {
      let previousFormData = previousState.formData;
      return {
        ...previousState,
        formData: {
          ...previousFormData,
          [name]: value,
        },
      };
    });
  };

  sendEmail = () => {
    axios.post(
      'https://us-central1-hrfmobile-5638b.cloudfunctions.net/submitSickDay',
      this.state.formData,
    );
  };

  render() {
    const {translate} = this.context;
    Moment.locale('en');
    const {formData} = this.state;
    const {keyboardOn} = this.state;
    const minDate = new Date();
    const maxDate = new Date(2090, 0, 1);
    const {navigation} = this.props;
    const firstNameDisabled =
      formData.firstname === undefined || formData.firstname === '';
    const lastNameDisabled =
      formData.lastname === undefined || formData.lastname === '';
    const roleDisabled = formData.role === undefined || formData.role === '';

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
                  <Text style={styles.mainTitle}>
                    {translate('Declare Sick Day')}
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
              name="firstname"
              style={styles.timeOffInput}
              placeholder={translate('First Name')}
              value={formData.firstname}
              onChangeText={(firstname) =>
                this.handleChange('firstname', firstname)
              }
            />
            <TextInput
              selectionColor={'white'}
              autoCapitalize="words"
              name="lastname"
              style={styles.timeOffInput}
              placeholder={translate('Last Name')}
              value={formData.lastname}
              onChangeText={(lastname) =>
                this.handleChange('lastname', lastname)
              }
            />
            <View style={styles.pickerWrapper}>
              <Picker
                selectionColor={'white'}
                autoCapitalize="words"
                name="role"
                style={styles.timeOffPicker}
                value={formData.role}
                selectedValue={formData.role}
                onValueChange={(role) => this.handleChange('role', role)}>
                <Picker.Item label={translate('Role selector')} value="" />
                <Picker.Item label={translate('Warehouse')} value="Warehouse" />
                <Picker.Item label={translate('Bakery')} value="Bakery" />
                <Picker.Item label={translate('Dry Pack')} value="Dry pack" />
                <Picker.Item label={translate('Dry Mix')} value="Dry mix" />
                <Picker.Item
                  label={translate('Maintenance')}
                  value="Maintenance"
                />
                <Picker.Item
                  label={translate('Mechanical')}
                  value="Mechanical"
                />
              </Picker>
            </View>
            <View style={styles.container}>
              <CalendarPicker
                weekdays={[
                  translate('Monday'),
                  translate('Tuesday'),
                  translate('Wenesday'),
                  translate('Thursday'),
                  translate('Friday'),
                  translate('Saturday'),
                  translate('Sunday'),
                ]}
                months={[
                  translate('January'),
                  translate('February'),
                  translate('March'),
                  translate('April'),
                  translate('May'),
                  translate('June'),
                  translate('July'),
                  translate('August'),
                  translate('September'),
                  translate('October'),
                  translate('November'),
                  translate('December'),
                ]}
                previousTitle={translate('Previous')}
                nextTitle={translate('Next')}
                selectMonthTitle={translate('SelectMonth')}
                selectYearTitle={translate('SelectYear')}
                startFromMonday={true}
                allowRangeSelection={true}
                width={PixelRatio.get() <= 1.5 ? 240 : 285}
                scaleFactor={355}
                minDate={minDate}
                maxDate={maxDate}
                selectedDayColor="#00486D"
                selectedDayTextColor="#FFFFFF"
                onDateChange={this.onDateChange}
              />
            </View>
            <TouchableOpacity
              style={styles.btnTimeOff}
              disabled={firstNameDisabled || lastNameDisabled || roleDisabled}
              onPress={(event) => {
                event.preventDefault();
                this.sendEmail();
                navigation.navigate('MainMenu');
              }}>
              <Text
                style={
                  firstNameDisabled || lastNameDisabled || roleDisabled
                    ? styles.btnTextTimeOffDisabled
                    : styles.btnTextTimeOff
                }>
                {translate('Submit btn')}
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </ScrollView>
      </View>
    );
  }
}

export default function (props) {
  const navigation = useNavigation();

  return <SickDay {...props} navigation={navigation} />;
}

let font_size_title = 28;
let size_icon = 34;
let imageCisne_width = 215;
let imageCisne_height = 205;
let imageCisne_right = '-15%';

if (PixelRatio.get() <= 2) {
  font_size_title = 26;
  size_icon = 32;
  imageCisne_width = 185;
  imageCisne_height = 175;
  imageCisne_right = '-5%';
}
if (PixelRatio.get() <= 1.5) {
  font_size_title = 23;
  size_icon = 28;
  imageCisne_width = 155;
  imageCisne_height = 145;
  imageCisne_right = '-4%';
}

const styles = StyleSheet.create({
  mainWrapper: {
    flexDirection: 'row',
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
    width: imageCisne_width,
    height: imageCisne_height,
    position: 'absolute',
    top: '4%',
    right: imageCisne_right,
    zIndex: 0,
    opacity: 0.6,
  },
  textTitleWrapper: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: '5%',
  },
  mainTitleIcon: {
    color: 'white',
    fontSize: size_icon,
    marginLeft: -6,
  },
  mainTitle: {
    color: 'white',
    fontSize: font_size_title,
  },
  bottomWrapper: {
    marginTop: '10%',
    height: 100,
  },
  timeOffInput: {
    marginBottom: '3%',
    paddingLeft: 10,
    backgroundColor: 'white',
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
  container: {
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: '3%',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 3,
  },
  timeOffPicker: {
    backgroundColor: 'white',
    height: 55,
  },
  btnTimeOff: {
    marginTop: '3%',
    marginBottom: '6%',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
  },
  btnTextTimeOff: {
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
  btnTextTimeOffDisabled: {
    backgroundColor: 'rgb(180,180,180)',
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
