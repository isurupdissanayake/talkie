import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { screenHeaders } from '../../constants/screenHeaders';

export class ChatViewScreen extends React.Component {
  constructor(props){
    super(props);
  }
    render(){
        return(
            <View style={styles.container}>
                <Text>Chat View</Text>
                <Button 
                    title="click"
                    onPress={() => this.props.navigation.navigate(screenHeaders.chatDetailsScreen)}
                />
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
