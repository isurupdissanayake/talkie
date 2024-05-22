import { NavigationContext, useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { screenHeaders } from "../../constants/screenHeaders";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BasicButton } from "../../components";

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
            <BasicButton navigation={this.props.navigation} color={"#3F00FF"}/>
          </View>
          <View>
            <Button
              title="Sign Up"
              onPress={()=>this.props.navigation.navigate(screenHeaders.signUpScreen)}
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
    backgroundColor: "#fff",
    alignItems: 'center',
  },
  titleContainer: {
    marginTop: 150,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  actionButtons: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 150,
  }
});
