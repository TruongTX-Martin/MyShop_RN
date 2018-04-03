import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Toast from 'react-native-simple-toast';
import signIn from '../../api/signIn';
import Global from '../Global';

export default class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  onSignInError() {
    Alert.alert(
      'Notice',
      'Email or Password is incorrect',
      [
        { text: 'OK', onPress: () => (console.log('OK Pressed')) },
      ],
      { cancelable: false }
    );
  }

  onSignInSuccess(user) {
    Toast.show('Login success');
    Global.onLoginSuccess(user);
    this.props.navigation.pop();
  }

  signIn() {
    const { email, password } = this.state;
    if (!email) {
      Toast.show('Please type your email');
      return;
    }
    if (!password) {
      Toast.show('Please type your password');
      return;
    }
    signIn(email, password)
      .then(res => {
        this.onSignInSuccess(res.user);
      })
      .catch(error => this.onSignInError(error));
  }

  render() {
    const { viewCenterSignIn, inputStyle, bigButtonStyle, textBigButtonStyle } = styles;
    return (
      <View style={viewCenterSignIn}>
        <TextInput
          underlineColorAndroid='transparent'
          returnKeyType='next'
          style={inputStyle}
          placeholder='Enter your email'
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          secureTextEntry
          underlineColorAndroid='transparent'
          style={inputStyle}
          placeholder='Enter your password'
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        <TouchableOpacity style={bigButtonStyle} onPress={this.signIn.bind(this)}>
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
