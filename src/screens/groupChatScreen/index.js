import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { screenHeaders } from "../../constants/screenHeaders";
import { ChatPreview } from "../../components";

export class GroupChatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupNames : Map,
      name : String
    };
  }

  setGroupNames() {
    this.setState({groupNames: GetGroupNames()});
  }

  render() {
    return (
      <View style={styles.container}>
        <ChatPreview name={this.state.name} navigation={this.props.navigation}/>
      </View>
    );
  }
}

function GetGroupNames () {
  var groupNames = ["Isuru Praneeth", "Haritha Prasanga"]
  return (
    groupNames
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  }
});
