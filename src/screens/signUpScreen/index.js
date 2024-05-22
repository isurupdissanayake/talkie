import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { screenHeaders } from '../../constants/screenHeaders';
import { TextInput } from 'react-native-gesture-handler';

export class SignUpScreen extends React.Component {
  constructor(props){
    super(props);
  }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput 
                    style={styles.textInput}
                    placeholder='Enter your email'
                    />
                </View>
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
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  textInput: {
    height: 80,
    width: '90%',
    borderColor: '#D3D3D3',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18,
  },
});
