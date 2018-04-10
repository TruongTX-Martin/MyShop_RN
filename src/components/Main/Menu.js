import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import Utils from '../../utils/Utils';
import Global from '../../components/Global';
import imgProfile from '../../media/temp/profile.png';
import saveToken from '../../api/saveToken';
import imgExtend from '../../media/appIcon/ic_extend.png';


export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogIn: false,
      user: null
    };
    Global.onLoginSuccess = this.onLoginSuccess.bind(this);
  }

  componentDidMount() {
  }

  onLoginSuccess(user) {
    this.setState({
      isLogIn: true,
      user
    });
  }

  toAuthentication() {
    this.props.navigation.navigate('Authentication');
  }

  toChangeInfo() {
    this.props.navigation.navigate('ChangeInfo', { user: this.state.user });
  }

  ToOrderHistory() {
    console.log('to order history');
    this.props.navigation.navigate('OrderHistory');
  }

  toContact() {
    this.props.navigation.navigate('Contact');
  }

  signOut() {
    this.props.navigation.navigate('DrawerClose');
    saveToken('');
    this.setState({
      isLogIn: false,
      user: null
    });
    Utils.showToast('Logout success');
  }

  render() {
    const {
      container, containerProfile, profileStyle,
      textSignIn, textUserName, viewUserName,
      viewCenter, rowStyle, btnExtendStyle, separateStyle, rowParrenStyle
    } = styles;

    const { user } = this.state;
    const logoutJSX = (
      <View>
        <View style={separateStyle} />
        <TouchableOpacity style={rowParrenStyle} onPress={this.toAuthentication.bind(this)}>
          <View style={rowStyle}>
            <Text style={textSignIn}>Sign In</Text>
            <Image style={btnExtendStyle} source={imgExtend} />
          </View>
        </TouchableOpacity>
      </View>
    );
    const loginJSX = (
      <View style={{ flex: 1 }}>
        <View style={viewUserName}>
          <Text style={textUserName}>{user ? user.name : ''}</Text>
        </View>
        <View style={viewCenter}>
          <TouchableOpacity style={rowParrenStyle} onPress={this.ToOrderHistory.bind(this)}>
            <View style={rowStyle}>
              <Text style={textSignIn}>Order History</Text>
              <Image style={btnExtendStyle} source={imgExtend} />
            </View>
          </TouchableOpacity>
          <View style={separateStyle} />

          <TouchableOpacity style={rowParrenStyle} onPress={this.toChangeInfo.bind(this)}>
            <View style={rowStyle}>
              <Text style={textSignIn}>Change Info</Text>
              <Image style={btnExtendStyle} source={imgExtend} />
            </View>
          </TouchableOpacity>
          <View style={separateStyle} />

          <TouchableOpacity style={rowParrenStyle} onPress={this.signOut.bind(this)}>
            <View style={rowStyle}>
              <Text style={textSignIn}>Sign out</Text>
              <Image style={btnExtendStyle} source={imgExtend} />
            </View>
          </TouchableOpacity>
          <View style={separateStyle} />

          <TouchableOpacity style={rowParrenStyle} onPress={this.toContact.bind(this)}>
            <View style={rowStyle}>
              <Text style={textSignIn}>Contact</Text>
              <Image style={btnExtendStyle} source={imgExtend} />
            </View>
          </TouchableOpacity>

        </View>
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
    marginTop: 20,
    marginBottom: 20
  },
  profileStyle: {
    width: 150,
    height: 150,
    borderColor: 'gray',
    borderRadius: 75
  },
  btnSignIn: {
    height: 50,
    flex: 1,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 10
  },
  textSignIn: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold'
  },
  textUserName: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
  viewUserName: {
    alignItems: 'center',
    marginTop: 10,
  },
  viewCenter: {
    flex: 1
  },
  viewBottom: {
    flex: 1
  },
  rowStyle: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 7
  },
  btnExtendStyle: {
    width: 30,
    height: 20
  },
  separateStyle: {
    height: 1,
    backgroundColor: '#fff'
  },
  rowParrenStyle: {
    height: 50
  }
});
