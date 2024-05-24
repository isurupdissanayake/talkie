import React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { screenHeaders } from "../../constants/screenHeaders";
import { TextInput } from "react-native-gesture-handler";
import { BasicButton } from "../../components";
import { CreateUserApi } from "../../routes/accountRoutes.js";

export class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userEmail: "",
      userPassword: "",
    };
    this.title = 'Sign Up'
  }

  OnPressSignUp() {
    CreateUserApi(this.state.userName, this.state.userEmail, this.state.userPassword);
    this.props.navigation.navigate("safaf");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your name"
              placeholderTextColor="#A9A9A9"
              onChangeText={(text) => this.setState({ userName: text })}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your email"
              placeholderTextColor="#A9A9A9"
              onChangeText={(text) => this.setState({ userEmail: text })}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter password"
              placeholderTextColor="#A9A9A9"
              onChangeText={(text) => this.setState({ userPassword: text })}
            />
          </View>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {this.OnPressSignUp()}}
            >
              <Text style={styles.buttonText}>{this.title}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010",
  },
  inputContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 60,
  },
  textInput: {
    width: "85%",
    color: "#ffff",
    height: 40,
    borderColor: "#A9A9A9",
    borderBottomWidth: 1,
    fontSize: 18,
  },
  textInputContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#00BE4C",
    height: 70,
    width: 300,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
