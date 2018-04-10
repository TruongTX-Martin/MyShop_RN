import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity,
  Dimensions, StyleSheet, Image, ListView
} from 'react-native';
import Header from '../../../Common/Header';
import Utils from '../../../utils/Utils';
import Global from '../../../components/Global';

import Config from '../../../components/Config';
import saveCart from '../../../api/saveCart';
import getCart from '../../../api/getCart';
import checkoutCart from '../../../api/checkoutCart';
import getToken from '../../../api/getToken';

function toTitleCase(str) {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

export default class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cartArray: []
    };
    Global.addProductToCart = this.addProductToCart.bind(this);
  }

  componentDidMount() {
    getCart()
      .then(cartArray => {
        this.setState({
          cartArray
        });
      });
  }

  async onCheckout() {
    try {
      const token = await getToken();
      if (!token) {
        Utils.showToast('Please login to checkout');
        return;
      }
      const arrayDetail = this.state.cartArray.map(e => ({
        id: e.product.id,
        quantity: e.quantity
      }));
      const result = await checkoutCart(token, arrayDetail);
      if (result === 'THEM_THANH_CONG') {
        saveCart([]);
        this.setState({
          cartArray: []
        });
        Utils.showToast('Checkout success');
      } else {
        console.log('Checkout failed');
      }
    } catch (error) {
      console.log(error);
    }
  }

  incrQuantity(productId) {
    const newCart = this.state.cartArray.map(e => {
      if (e.product.id !== productId) return e;
      return { product: e.product, quantity: e.quantity + 1 };
    });
    this.setState({
      cartArray: newCart
    }, () => saveCart(this.state.cartArray)
    );
  }

  decrQuantity(productId) {
    const newCart = this.state.cartArray.map(e => {
      if (e.product.id !== productId) return e;
      if (e.quantity > 0) {
        return { product: e.product, quantity: e.quantity - 1 };
      }
      return e;
    });
    this.setState({
      cartArray: newCart
    }, () => saveCart(this.state.cartArray));
  }

  removeProduct(productId) {
    const newCart = this.state.cartArray.filter(e => e.product.id !== productId);
    this.setState({
      cartArray: newCart
    }, () => {
      saveCart(this.state.cartArray);
      Global.refreshTotalCart();
    }
    );
  }

  gotoDetail() {
    const { navigator } = this.props;
    navigator.push({ name: 'PRODUCT_DETAIL' });
  }

  addProductToCart(product) {
    // push return number, concat return array
    this.setState({
      cartArray: this.state.cartArray.concat({ product, quantity: 1 })
    }, () => saveCart(this.state.cartArray)
    );
  }

  render() {
    const { main, checkoutButton, checkoutTitle, wrapper,
      productViewStyle, mainRight, productController,
      txtName, txtPrice, productImage, numberOfProduct,
      txtShowDetail, showDetailContainer, textRemoveStyle, viewBottomStyle } = styles;
    let arrayTotal;
    let total;
    if (this.state.cartArray) {
      arrayTotal = this.state.cartArray.map(e => e.product.price * e.quantity);
      total = arrayTotal.length ? arrayTotal.reduce((a, b) => a + b) : 0;
    }
    return (
      <View style={wrapper}>
        <Header
          navigator={this.props.navigation}
          title='Cart'
          hideCartIcon
        />
        <ListView
          contentContainerStyle={main}
          enableEmptySections
          dataSource={
            new ListView.DataSource({
              rowHasChanged: (r1, r2) => r1 !== r2
            }).cloneWithRows(this.state.cartArray)
          }
          renderRow={cartItem => (
            <View style={productViewStyle}>
              <Image
                source={{ uri: `${Config.urlImageProduct}${cartItem.product.images[0]}` }}
                style={productImage}
              />
              <View style={[mainRight]}>
                <View style={viewBottomStyle}>
                  <Text style={txtName}>{toTitleCase(cartItem.product.name)}</Text>
                  <TouchableOpacity onPress={() => this.removeProduct(cartItem.product.id)}>
                    <Text style={textRemoveStyle}>X</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={txtPrice}>{cartItem.product.price}$</Text>
                </View>
                <View style={productController}>
                  <View style={numberOfProduct}>
                    <TouchableOpacity onPress={() => this.incrQuantity(cartItem.product.id)}>
                      <Text>+</Text>
                    </TouchableOpacity>
                    <Text>{cartItem.quantity}</Text>
                    <TouchableOpacity onPress={() => this.decrQuantity(cartItem.product.id)}>
                      <Text>-</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={showDetailContainer}>
                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
        <TouchableOpacity style={checkoutButton} onPress={this.onCheckout.bind(this)}>
          <Text style={checkoutTitle}>TOTAL {total}$ CHECKOUT NOW</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#DFDFDF'
  },
  checkoutButton: {
    height: 50,
    margin: 10,
    marginTop: 0,
    backgroundColor: '#2ABB9C',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  main: {
    width, backgroundColor: '#DFDFDF'
  },
  checkoutTitle: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Avenir'
  },
  productViewStyle: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    shadowColor: '#3B5458',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2
  },
  productImage: {
    width: imageWidth,
    height: imageHeight,
    flex: 1,
    resizeMode: 'center'
  },
  mainRight: {
    flex: 3,
    justifyContent: 'space-between'
  },
  productController: {
    flexDirection: 'row'
  },
  numberOfProduct: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  txtName: {
    paddingLeft: 20,
    color: '#A7A7A7',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Avenir'
  },
  txtPrice: {
    paddingLeft: 20,
    color: '#C21C70',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Avenir'
  },
  txtShowDetail: {
    color: '#C21C70',
    fontSize: 10,
    fontWeight: '400',
    fontFamily: 'Avenir',
    textAlign: 'right',
  },
  showDetailContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  textRemoveStyle: {
    fontFamily: 'Avenir',
    color: '#969696'
  },
  viewBottomStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
});

