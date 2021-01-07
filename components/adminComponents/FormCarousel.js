import React, {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  Keyboard,
  View,
  ScrollView,
  PixelRatio,
} from 'react-native';
import AdminNavBar from './adminNavBar';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import * as RNLocalize from 'react-native-localize';
import {stateContext} from '../context/context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function FormCarousel() {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [timeStamp, setTimeStamp] = useState(new Date());
  const [keyboardOn, setKeyboardOn] = useState(false);
  const [messageConfirm, setMessageConfirm] = useState(false);
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

  const uploadPost = (post) => {
    const uploadData = {
      title: post.title,
      content: post.content,
      image: post.image,
      timeStamp: post.timeStamp,
    };
    return firestore().collection('news-updates').doc().set(uploadData);
  };

  const handleSubmit = async () => {
    const post = {
      image: image,
      title: title,
      content: content,
      timeStamp: timeStamp,
    };
    uploadPost(post);
    setMessageConfirm(true);
    setTimeout(() => {
      navigation.navigate('AdminNav');
    }, 1200);
  };

  return (
    <View style={styles.mainWrapper}>
      <AdminNavBar />
      <ScrollView
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
                  name="pencil"
                  style={styles.mainTitleIcon}
                />
                <Text style={styles.mainTitle}>
                  {translate('Create Message')}
                </Text>
              </View>
            </View>
          </View>
        )}
        <ScrollView style={styles.bottomWrapper}>
          {messageConfirm ? (
            <Text style={styles.messageConf}>The message has been sent!</Text>
          ) : null}
          <TextInput
            selectionColor={'white'}
            autoCapitalize="words"
            maxLength={15}
            style={styles.equipmentInput}
            placeholder={translate('Title')}
            onChangeText={(title) => setTitle(title)}
          />
          <TextInput
            selectionColor={'white'}
            autoCapitalize="sentences"
            maxLength={140}
            multiline={true}
            numberOfLines={7}
            style={styles.equipmentTextTarea}
            placeholder={translate('Content')}
            onChangeText={(content) => setContent(content)}
          />
          <TouchableOpacity
            disabled={title === '' || content === ''}
            style={styles.btnEquipment}
            onPress={() => {
              handleSubmit();
            }}>
            <Text
              style={
                title === '' || content === ''
                  ? styles.btnTextEquipmentDisabled
                  : styles.btnTextEquipment
              }>
              {translate('Submit btn')}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>
    </View>
  );
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
  messageConf: {
    marginBottom: '6%',
    color: 'green',
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 17,
    fontWeight: 'bold',
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
  btnTextEquipmentDisabled: {
    backgroundColor: 'rgb(180, 180, 180)',
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
