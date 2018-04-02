import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

import icBack from '../../media/appIcon/back_white.png';
import icLogo from '../../media/appIcon/ic_logo.png';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default class Authentication extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isSignIn: true
    };
  }

  onBack() {
    this.props.navigation.pop();
  }

  onChooseSignIn() {
    this.setState({
      isSignIn: true
    });
  }

  onChooseSignUp() {
    this.setState({
      isSignIn: false
    });
  }

  render() {
    const {
      container, viewTop, viewCenter, viewBottom,
      icBackStyle, titleStyle, icLogoStyle,
      viewSignInStyle, viewSignUpStyle, textButtonActiveStyle, textButtonInActiveStyle,
      btnSignInStyle, btnSignUpStyle,
    } = styles;
    const isSignIn = this.state.isSignIn;
    const renderViewCenter = isSignIn ? <SignIn /> : <SignUp />;
    return (
      <View style={container}>
        <View style={viewTop}>
          <TouchableOpacity onPress={this.onBack.bind(this)}>
            <Image source={icBack} style={icBackStyle} />
          </TouchableOpacity>
          <Text style={titleStyle}>Wearing a Dress</Text>
          <Image source={icLogo} style={icLogoStyle} />
        </View>
        <View style={viewCenter}>
          {renderViewCenter}
        </View>
        <View style={viewBottom}>
          <View style={viewSignInStyle}>
            <TouchableOpacity style={btnSignInStyle} onPress={this.onChooseSignIn.bind(this)}>
              <Text style={isSignIn ? textButtonInActiveStyle : textButtonActiveStyle}>
                SIGN IN
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: 4 }} />
          <View style={viewSignUpStyle}>
            <TouchableOpacity style={btnSignUpStyle} onPress={this.onChooseSignUp.bind(this)}>
              <Text style={isSignIn ? textButtonActiveStyle : textButtonInActiveStyle}>
                SIGN UP
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const paddingTextButton = 15;
const borderRadiusButton = 20;
const marginButtonWithScreen = 40;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00C88C',
    justifyContent: 'space-between'
  },
  viewTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  icBackStyle: {
    width: 25,
    height: 25
  },
  titleStyle: {
    fontSize: 20,
    color: '#fff'
  },
  icLogoStyle: {
    width: 25,
    height: 25
  },
  viewCenter: {
    flex: 1
  },
  viewBottom: {
    flexDirection: 'row',
    marginBottom: 20
  },
  viewSignInStyle: {
    flex: 1,
  },
  viewSignUpStyle: {
    flex: 1,
  },
  btnSignInStyle: {
    backgroundColor: '#fff',
    marginLeft: marginButtonWithScreen,
    alignItems: 'center',
    borderTopLeftRadius: borderRadiusButton,
    borderBottomLeftRadius: borderRadiusButton
  },
  btnSignUpStyle: {
    backgroundColor: '#fff',
    marginRight: marginButtonWithScreen,
    alignItems: 'center',
    borderTopRightRadius: borderRadiusButton,
    borderBottomRightRadius: borderRadiusButton
  },
  textButtonActiveStyle: {
    paddingTop: paddingTextButton,
    paddingBottom: paddingTextButton,
    color: '#00C88C'
  },
  textButtonInActiveStyle: {
    paddingTop: paddingTextButton,
    paddingBottom: paddingTextButton,
    color: '#E5E5E5'
  }
});
