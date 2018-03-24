import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';

import imgProfile from '../../media/temp/profile.png';


export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogIn: true
    };
  }

  toAuthentication() {
    console.log('to authentication');
    this.props.navigation.navigate('Authentication');
  }

  toChangeInfo() {
    console.log('to change info');
    this.props.navigation.navigate('ChangeInfo');
  }

  ToOrderHistory() {
    console.log('to order history');
    this.props.navigation.navigate('OrderHistory');
  }

  signOut() {

  }
  
  render() {
    const {
      container, containerProfile, profileStyle,
      btnSignIn, textSignIn, textUserName, viewUserName,
      viewCenter, viewBottom
    } = styles;

    const logoutJSX = (
      <View>
        <TouchableOpacity style={btnSignIn} onPress={this.toAuthentication.bind(this)}>
          <Text style={textSignIn}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    );
    const loginJSX = (
      <View style={{ flex: 1 }}>
        <View style={viewUserName}>
          <Text style={textUserName}>Tran Xuan Truong</Text>
        </View>
        <View style={viewCenter}>
          <TouchableOpacity style={btnSignIn} onPress={this.ToOrderHistory.bind(this)}>
            <Text style={textSignIn}>Order History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={btnSignIn} onPress={this.toChangeInfo.bind(this)}>
            <Text style={textSignIn}>Change Info</Text>
          </TouchableOpacity>
          <TouchableOpacity style={btnSignIn} onPress={this.signOut.bind(this)}>
            <Text style={textSignIn}>Sign out</Text>
          </TouchableOpacity>
        </View>
        <View style={viewBottom} />
      </View>
    );
    const mainJSX = this.state.isLogIn ? loginJSX : logoutJSX;
    return (
      <View style={container}>
        <View style={containerProfile}>
          <Image style={profileStyle} source={imgProfile} />
        </View>
        {mainJSX}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34B089'
  },
  containerProfile: {
    alignItems: 'center',
    marginTop: 20
  },
  profileStyle: {
    width: 150,
    height: 150,
    borderColor: 'gray',
    borderRadius: 75
  },
  btnSignIn: {
    height: 50,
    backgroundColor: '#fff',
    marginTop: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textSignIn: {
    fontSize: 20,
    color: '#34B089'
  },
  textUserName: {
    fontSize: 20,
    color: '#fff',
  },
  viewUserName: {
    alignItems: 'center',
    marginTop: 10,
    flex: 0.8
  },
  viewCenter: {
    flex: 1
  },
  viewBottom: {
    flex: 1
  }
});
