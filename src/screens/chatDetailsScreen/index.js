import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export class ChatDetailsScreen extends React.Component {
  constructor(props){
    super(props);
  }
    render(){
        return(
            <View style={styles.container}>
                <Text>Chat View</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
