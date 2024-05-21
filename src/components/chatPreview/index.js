import { StyleSheet } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import { screenHeaders } from "../../constants/screenHeaders";

export default function ChatPreview(props) {
	let name = props.name;
	let navigation = props.navigation
  return (
    <TouchableOpacity
			onPress={()=>navigation.navigate(screenHeaders.chatViewScreen)}
      style={styles.container}>
      <View style={styles.chatPreview}>
        <View style={styles.chatPhoto}>
          <Text style={styles.chatPhotoText}>{name['0']}</Text>
        </View>
        <View style={styles.chatName}>
          <Text style={styles.chatNameText}>{name}</Text>
        </View>
      </View>
      <View style={styles.divider}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
	container: {
		paddingLeft: 15, 
		backgroundColor: "#fff", 
		paddingRight: 15
	},
  chatPreview: {
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 15,
  },
  chatPhoto: {
    height: 70,
    width: 70,
    borderRadius: 70,
    backgroundColor: "#A020F0",
    alignItems: "center",
    justifyContent: "center",
  },
  chatName: {
    paddingLeft: 10,
    justifyContent: "center",
  },
  chatPhotoText: {
    fontSize: 21,
    fontWeight: "bold",
  },
  chatNameText: {
    fontSize: 21,
    fontWeight: "bold",
  },
	divider: {
		borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
	}
});
