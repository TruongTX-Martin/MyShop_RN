import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

import backSpecial from '../media/appIcon/back_white.png';
import icLogo from '../media/appIcon/ic_logo.png';

const { height } = Dimensions.get('window');
export default class Header extends Component {

  onBackPress() {
    const { navigator } = this.props;
    navigator.pop();
  }
  render() {
    const { swrapper, viewTop, imageMenu, titleStyle } = styles;
    const { title } = this.props;
    return (
      <View style={swrapper}>
        <View style={viewTop}>
          <TouchableOpacity onPress={this.onBackPress.bind(this)}>
            <Image source={backSpecial} style={imageMenu} />
          </TouchableOpacity>
          <Text style={titleStyle}>{title}</Text>
          <Image source={icLogo} style={imageMenu} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  swrapper: {
    height: height / 10,
    backgroundColor: '#34B089',
    padding: 10,
    justifyContent: 'space-around'
  },
  viewTop: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imageMenu: {
    width: 25,
    height: 25
  },
  titleStyle: {
    fontSize: 20,
    color: 'white'
  }
});
