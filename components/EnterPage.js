import React,{ useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import auth from '@react-native-firebase/auth'
import { useNavigation } from "@react-navigation/native";

const EnterPage = () => {
const navigation = useNavigation()

  useEffect( () =>  {
    auth().onAuthStateChanged(user =>  {
      navigation.navigate(user ? 'MainPage' : 'Login')
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