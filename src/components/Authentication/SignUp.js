import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Toast from 'react-native-simple-toast';
import { Form, TextInput } from 'react-native-autofocus';
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
  onRegisterSuccess() {
    Alert.alert(
      'Notice',
      'Register successfully',
      [
        {
          text: 'OK',
          onPress: () => this.props.gotoSignIn()
        },
      ],
      { cancelable: false }
    );
  }

  onRegisterFailed() {
    Alert.alert(
      'Notice',
      'Register failed',
      [
        { text: 'OK', onPress: () => (console.log('OK Pressed')) },
      ],
      { cancelable: false }
    );
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;//eslint-disable-line
    return re.test(String(email).toLowerCase());
  }

  registerUser() {
    const { email, name, password, rePassword } = this.state;
    if (!email) {
      Toast.show('Please type your email');
      return;
    }
    if (!name) {
      Toast.show('Please type your name');
      return;
    }
    if (!password) {
      Toast.show('Please type your password');
      return;
    }
    if (!rePassword) {
      Toast.show('Please type your repassword');
      return;
    }
    if (password !== rePassword) {
      Toast.show('Password and RePassword not match');
      return;
    }
    if (!this.validateEmail(email)) {
      Toast.show('Email not correct format');
      return;
    }
    register(email, name, password)
      .then(res => {
        if (res === 'THANH_CONG') {
          this.onRegisterSuccess();
        } else {
          this.onRegisterFailed();
        }
      });
  }

  render() {
    const { viewCenterSignIn, inputStyle, bigButtonStyle, textBigButtonStyle } = styles;
    return (
      <View style={viewCenterSignIn}>
        <Form>
          <TextInput
            underlineColorAndroid='transparent'
            returnKeyType='next'
            style={inputStyle}
            placeholder='Enter your name'
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            inputRef={(name) => this.setState({ name })}
          />
          <TextInput
            underlineColorAndroid='transparent'
            returnKeyType='next'
            style={inputStyle}
            placeholder='Enter your email'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            inputRef={(email) => this.setState({ email })}
          />
          <TextInput
            underlineColorAndroid='transparent'
            returnKeyType='next'
            secureTextEntry
            style={inputStyle}
            placeholder='Enter your password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            inputRef={(password) => this.setState({ password })}
          />
          <TextInput
            underlineColorAndroid='transparent'
            returnKeyType='done'
            secureTextEntry
            style={inputStyle}
            placeholder='Re-enter your password'
            value={this.state.rePassword}
            onChangeText={rePassword => this.setState({ rePassword })}
            inputRef={(rePassword) => this.setState({ rePassword })}
          />
        </Form>
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
