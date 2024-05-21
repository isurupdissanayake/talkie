import { NavigationContext, useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { screenHeaders } from "../../constants/screenHeaders";

export class SplashScreen extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>splash screen</Text>
        <Button title="Log In"
          onPress={()=>this.props.navigation.navigate(screenHeaders.loginScreen)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
