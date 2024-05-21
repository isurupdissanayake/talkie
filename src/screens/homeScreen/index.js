import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { screenHeaders } from '../../constants/screenHeaders';

export class HomeScreen extends React.Component {
  constructor(props){
    super(props);
  }
    render(){
        return(
            <View style={styles.container}>
                <Text>home screen</Text>
                <Button
                  title='view'
                  onPress={()=>this.props.navigation.navigate(screenHeaders.loginScreen)}
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
