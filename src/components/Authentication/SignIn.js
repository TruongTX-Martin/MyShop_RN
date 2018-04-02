import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class SignIn extends Component {
  state = {}
  render() {
    const { viewCenterSignIn, inputStyle, bigButtonStyle, textBigButtonStyle } = styles;
    return (
      <View style={viewCenterSignIn}>
        <TextInput
          underlineColorAndroid='transparent'
          style={inputStyle}
          placeholder='Enter your email'
        />
        <TextInput
          underlineColorAndroid='transparent'
          style={inputStyle}
          placeholder='Enter your password'
        />
        <TouchableOpacity style={bigButtonStyle}>
          <Text style={textBigButtonStyle}>SIGN IN NOW</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const borderRadiusButton = 20;
const marginHorizontalInput = 30;
const styles = StyleSheet.create({
  viewCenterSignIn: {
    flex: 1,
    marginTop: 50
  },
  inputStyle: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: borderRadiusButton,
    marginHorizontal: marginHorizontalInput,
    fontSize: 20,
    paddingLeft: 20,
    marginBottom: 15
  },
  bigButtonStyle: {
    marginHorizontal: marginHorizontalInput,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: borderRadiusButton,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  textBigButtonStyle: {
    color: '#fff',
    fontSize: 20
  }
});
