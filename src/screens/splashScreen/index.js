import { NavigationContext, useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { screenHeaders } from "../../constants/screenHeaders";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BasicButton, TextButton } from "../../components";

export class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Welcome to Talkie</Text>
        </View>
        <View style={styles.actionButtons}>
          <View>
            <BasicButton
              title="Log In"
              navigation={this.props.navigation}
              navigationScreen={screenHeaders.loginScreen}
            />
          </View>
          <View style={{marginTop: 10}}>
            <TextButton
              title="Create a new account."
              navigation={this.props.navigation}
              navigationScreen={screenHeaders.signUpScreen}
            />
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
    alignItems: "center",
  },
  titleContainer: {
    marginTop: 150,
  },
  titleText: {
    color: "#ffff",
    fontSize: 24,
    fontWeight: "bold",
  },
  actionButtons: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 150,
  },
});
