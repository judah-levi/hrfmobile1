import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  ImageBackground,
  View,
  ScrollView,
} from 'react-native';
import AdminNavBar from './adminNavBar';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import * as RNLocalize from 'react-native-localize';
import {stateContext} from '../context/context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class FormCarousel extends React.Component {
  static contextType = stateContext;
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      image: null,
      timeStamp: new Date(),
    };
  }

  componentDidMount() {
    this.context.setI18nConfig();
    RNLocalize.addEventListener(
      'change',
      this.context.handleLocalizationChange,
    );
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener(
      'change',
      this.context.handleLocalizationChange,
    );
  }

  uploadPost = (post) => {
    const uploadData = {
      title: post.title,
      content: post.content,
      image: post.image,
      timeStamp: post.timeStamp,
    };
    return firestore().collection('news-updates').doc().set(uploadData);
  };

  handleSubmit = async () => {
    const post = {
      image: this.state.image,
      title: this.state.title,
      content: this.state.content,
      timeStamp: this.state.timeStamp,
    };
    this.uploadPost(post);
  };

  render() {
    const {translate} = this.context;
    const {navigation} = this.props;

    return (
      <View style={styles.mainWrapper}>
        <AdminNavBar />
        <ScrollView
          style={styles.rightWrapper}
          showsVerticalScrollIndicator={false}>
          <ImageBackground
            source={require('../../pics/ballena.png')}
            style={styles.rightBackground}>
            <View style={styles.titleWrapper}>
              <MaterialCommunityIcons
                name="pencil"
                style={styles.mainTitleIcon}
              />
              <Text style={styles.mainTitle}>
                {translate('Create Message')}
              </Text>
            </View>

            <View style={styles.carouselWrapper}>
              <TextInput
                selectionColor={'white'}
                autoCapitalize="words"
                maxLength={15}
                style={styles.carouselInput}
                placeholder={translate('Title')}
                onChangeText={(title) => this.setState({title: title})}
              />
              <TextInput
                selectionColor={'white'}
                autoCapitalize="sentences"
                maxLength={140}
                multiline={true}
                numberOfLines={7}
                style={styles.carouselTextTarea}
                placeholder={translate('Content')}
                onChangeText={(content) => this.setState({content: content})}
              />
              <TouchableOpacity
                style={styles.btnCarousel}
                onPress={() => {
                  this.handleSubmit();
                  navigation.navigate('AdminPage');
                }}>
                <Text style={styles.btnTextCarousel}>
                  {translate('Submit btn')}
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </ScrollView>
      </View>
    );
  }
}

export default function (props) {
  const navigation = useNavigation();

  return <FormCarousel {...props} navigation={navigation} />;
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
    height: '76%',
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
  carouselWrapper: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  carouselInput: {
    marginBottom: '3%',
    paddingLeft: 10,
    backgroundColor: 'white',
    height: 55,
    borderRadius: 10,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 3,
  },
  carouselTextTarea: {
    marginBottom: '3%',
    paddingLeft: 10,
    backgroundColor: 'white',
    textAlignVertical: 'top',
    borderRadius: 10,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 3,
  },
  btnCarousel: {
    marginTop: '6%',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
    marginBottom: 30,
  },
  btnTextCarousel: {
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
