import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput
} from 'react-native';
import icMenu from '../../../media/appIcon/ic_menu.png';
import icLogo from '../../../media/appIcon/ic_logo.png';

const { height } = Dimensions.get('window');
export default class HeaderHome extends Component {

  onOpenMenu() {
    const { navigator } = this.props;
    navigator.navigate('DrawerOpen');
  }

  goToCart() {
    const { navigator } = this.props;
    navigator.navigate('Card');
  }
  render() {
    const { swrapper, viewTop, imageMenu, title, textInput } = styles;
    return (
      <View style={swrapper}>
        <View style={viewTop}>
          <TouchableOpacity onPress={this.onOpenMenu.bind(this)}>
            <Image source={icMenu} style={imageMenu} />
          </TouchableOpacity>
          <Text style={title}>Wearing a Dress</Text>
          <TouchableOpacity onPress={this.goToCart.bind(this)}>
            <Image source={icLogo} style={imageMenu} />
          </TouchableOpacity>
        </View>
        <TextInput
          style={textInput}
          placeholder="What do you want to buy?"
          underlineColorAndroid="transparent"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  swrapper: {
    height: height / 8,
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
  title: {
    fontSize: 20,
    color: 'white'
  },
  textInput: {
    height: height / 23,
    backgroundColor: '#FFF',
    paddingLeft: 10,
    paddingVertical: 0
  }
});
