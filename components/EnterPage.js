import React,{ useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import auth from '@react-native-firebase/auth'
import { useNavigation } from "@react-navigation/native";

const EnterPage = () => {
const navigation = useNavigation()
const admin = "dan@hudsonriverfoods.com"
const admin2 = "kolamiti92@gmail.com"
const admin3 = "nicovg_95@hotmail.com"

  useEffect( () =>  {
    auth().onAuthStateChanged(user =>  {
        if(user)  {
          if(user.email == admin || user.email == admin2 || user.email == admin3)  {
            navigation.navigate('AdminPage')
          } else if(user.email !== admin)  {
            navigation.navigate('MainPage')
          }
        } else {
          navigation.navigate('Login')
        }
    })
  })

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../pics/0.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
  container: {
    // height: height,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff',
    flex: 1,
  }
});

export default EnterPage;