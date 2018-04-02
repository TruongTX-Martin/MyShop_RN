import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

import register from '../../api/register';

export default class SignUp extends Component {

  constructor(props) {
      super(props);
      this.state = {
        email: '',
        name: '',
        password: '',
        rePassword: ''
      };
  }
  registerUser() {
    const { email, name, password } = this.state;
    register(email, name, password)
    .then(res => console.log("register:"+res));
  }

  render() {
    const { viewCenterSignIn, inputStyle, bigButtonStyle, textBigButtonStyle } = styles;
    return (
      <View style={viewCenterSignIn}>
        <TextInput
          underlineColorAndroid='transparent'
          style={inputStyle}
          placeholder='Enter your name'
          value={this.state.name}
          onChangeText={name => this.setState({ name })}
        />
        <TextInput
          underlineColorAndroid='transparent'
          style={inputStyle}
          placeholder='Enter your email'
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          underlineColorAndroid='transparent'
          secureTextEntry
          style={inputStyle}
          placeholder='Enter your password'
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        <TextInput
          underlineColorAndroid='transparent'
          secureTextEntry
          style={inputStyle}
          placeholder='Re-enter your password'
          value={this.state.rePassword}
          onChangeText={rePassword => this.setState({ rePassword })}
        />
        <TouchableOpacity style={bigButtonStyle} onPress={this.registerUser.bind(this)}>
          <Text style={textBigButtonStyle}>SIGN UP NOW</Text>
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
