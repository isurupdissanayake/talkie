import React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { screenHeaders } from "../../constants/screenHeaders";

export default function BasicButton(props) {
  let navigation = props.navigation;
  let buttonColor = props.color;

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate(screenHeaders.loginScreen)}
    >
      <Text style={styles.buttonText}>Log In</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#3F00FF",
    height: 50,
    width: 200,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
