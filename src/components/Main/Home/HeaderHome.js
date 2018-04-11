import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput, ImageBackground
} from 'react-native';
import icMenu from '../../../media/appIcon/ic_menu.png';
import icLogo from '../../../media/appIcon/ic_logo.png';
import getCart from '../../../api/getCart';
import Global from '../../Global';

const { height } = Dimensions.get('window');
export default class HeaderHome extends Component {


  constructor(props) {
    super(props);
    this.state = {
      totalCart: 0,
      search: ''
    };
    Global.refreshTotalCart = this.getTotalCart.bind(this);
  }

  componentDidMount() {
    this.getTotalCart();
  }


  onOpenMenu() {
    const { navigator } = this.props;
    navigator.navigate('DrawerOpen');
  }
  getTotalCart() {
    getCart()
      .then(cartArray => {
        this.setState({
          totalCart: cartArray.length
        });
      });
  }
  goToCart() {
    const { navigator } = this.props;
    navigator.navigate('Card');
  }

  render() {
    const { swrapper, viewTop, imageMenu, title, textInput,
      viewCartStyle, textCartStyle, imageCart } = styles;
    return (
      <View style={swrapper}>
        <View style={viewTop}>
          <TouchableOpacity onPress={this.onOpenMenu.bind(this)}>
            <Image source={icMenu} style={imageMenu} />
          </TouchableOpacity>
          <Text style={title}>Wearing a Dress</Text>
          <TouchableOpacity onPress={this.goToCart.bind(this)}>
            <ImageBackground source={icLogo} style={imageCart} >
              <View style={viewCartStyle}>
                <Text style={textCartStyle}>{this.state.totalCart}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <TextInput
          style={textInput}
          placeholder="What do you want to buy?"
          underlineColorAndroid="transparent"
          returnKeyType='search'
          value={this.state.search}
          onChangeText={search => this.setState({ search })}
          onSubmitEditing={() => {
            if (this.state.search.trim()) {
              const { navigator } = this.props;
              navigator.navigate('Search', { search: this.state.search.trim(), navigator: this.props.navigator });
            }
          }}
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
  imageCart: {
    width: 25,
    height: 25,
    alignItems: 'flex-end',
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
  },
  viewCartStyle: {
    width: 20,
    height: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textCartStyle: {
    color: '#34B089',
    fontSize: 12,
    fontWeight: 'bold'
  }
});
