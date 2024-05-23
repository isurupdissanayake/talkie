import React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function TextButton(props) {
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
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#00A3FF",
    fontSize: 16,
  },
});
