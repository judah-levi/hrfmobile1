// import { StatusBar } from "expo-status-bar";
import React from "react";
import {Title} from 'react-native-paper'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function LoginPage() {
  const [email, onChangeEmail] = React.useState("email");
  const [password, onChangePassword] = React.useState("password");

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.logo}
          source={require("../pics/HeaderLogo_180x.png")} 
        />
        <Title style={styles.titleText}>
            Welcome to the team!
        </Title>
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangeEmail(text)}
          clearTextOnFocus
          placeholder='First Name'
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangeEmail(text)}
          clearTextOnFocus
          placeholder='Last Name'
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangeEmail(text)}
          clearTextOnFocus
          placeholder='Phone #'
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangePassword(text)}
          clearTextOnFocus
          secureTextEntry={true}
          placeholder= 'Password'
        />
        <TouchableOpacity
          style={styles.newButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
        {/* <StatusBar style="auto" /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00486D",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#00486D",
    width: 350,
    height: 500,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 0,
  },
  logInSingUp: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 250,
    marginBottom: 20,
  },
  logIn: {
    flex: 1,
    fontWeight: "bold",
  },
  signUp: {
    flex: 1,
  },
  title: {
    color: "black",
    textDecorationColor: "yellow",
    textShadowColor: "red",
    textShadowRadius: 1,
    margin: 24,
    fontSize: 30,
  },
  newButton: {
    alignItems: "center",
    borderColor: "#fff",
    borderWidth: 1,
    marginTop: 30,
    padding: 5,
    borderRadius: 5,
    width: 250,
    height: 40
  },
  buttonText:  {
    color: '#fff',
  },
  titleText:  {
    color: '#fff',
    marginBottom: 10
  },
  textView: {
    marginTop: 20,
  },
  input: {
    height: 40,
    width: 250,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 5,
    padding: 10,
  },
  logo: {
    height: 125,
    width: 125,
    marginBottom: 50,
  },
});