import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';
import Utils from '../../utils/Utils';
import signIn from '../../api/signIn';
import Global from '../Global';
import saveToken from '../../api/saveToken';
import * as actions from '../../actions';


class SignIn extends Component {

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

  onSignInSuccess(res) {
    Utils.showToast('Login success');
    Global.onLoginSuccess(res.user);
    saveToken(res.token);
    this.props.navigation.pop();
  }

  signIn() {
    console.log('click login');
    this.props.login();
    // const { email, password } = this.state;
    // if (!email) {
    //   Utils.showToast('Please type your email');
    //   return;
    // }
    // if (!password) {
    //   Utils.showToast('Please type your password');
    //   return;
    // }
    // signIn(email, password)
    //   .then(res => {
    //     console.log('Data return:' + JSON.stringify(res));
    //     this.onSignInSuccess(res);
    //   })
    //   .catch(error => this.onSignInError(error));
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

const mapStateToProps = state => ({
  counter: state.counter
});

export default connect(mapStateToProps, actions)(SignIn);

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
