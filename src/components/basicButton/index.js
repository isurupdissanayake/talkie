import React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { screenHeaders } from "../../constants/screenHeaders";

export default function BasicButton(props) {
  let navigation = props.navigation;
  let navigationScreen = props.navigationScreen;
  let title = props.title;

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate(navigationScreen)}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
