import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

import Utils from '../../../utils/Utils';
import Config from '../../Config';

export default class ItemSearch extends Component {

  gotoDetail(product) {
    console.log('Navigator:' + this.props.navigator);
    // this.props.navigator.navigate('DetailProduct', { product });
  }

  render() {
    const {
      productStyle, mainRight, txtMaterial, txtColor,
      txtName, txtPrice, productImage,
      txtShowDetail, showDetailContainer, viewBottomStyle
    } = styles;
    const { product } = this.props;
    return (
      <View style={productStyle}>
        <Image
          source={{ uri: `${Config.urlImageProduct}${product.images[0]}` }}
          style={productImage}
        />
        <View style={mainRight}>
          <Text style={txtName}>{Utils.toTitleCase(product.name)}</Text>
          <Text style={txtPrice}>{product.price}$</Text>
          <Text style={txtMaterial}>{Utils.toTitleCase(product.material)}</Text>
          <View style={{ flexDirection: 'row' }} >
            <Text style={txtColor}>{Utils.toTitleCase(product.color)}</Text>
            <View style={viewBottomStyle} />
          </View>
          <TouchableOpacity style={showDetailContainer} onPress={() => this.gotoDetail(product)}>
            <Text style={txtShowDetail}>SHOW DETAILS</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F6F6F6',
    flex: 1
  },
  productStyle: {
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
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Avenir'
  },
  txtColor: {
    paddingLeft: 20,
    color: 'black',
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Avenir'
  },
  txtMaterial: {
    paddingLeft: 20,
    color: 'black',
    fontSize: 15,
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
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'flex-end',
    marginTop: 100
  },
  viewBottomStyle: {
    height: 15,
    width: 15,
    backgroundColor: 'white',
    borderRadius: 15,
    marginLeft: 10
  }
});
