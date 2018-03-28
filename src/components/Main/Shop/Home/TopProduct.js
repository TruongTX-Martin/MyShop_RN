import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Config from '../../../../components/Config';

export default class TopProduct extends Component {

  goToDetailProduct(productDetail) {
    this.props.navigator.navigate('DetailProduct', { product: productDetail });
  }
  render() {
    const {
      container, titleContainer, title,
      body, productContainer, productImage,
      productName, productPrice
    } = styles;
    return (
      <View style={container}>
        <View style={titleContainer}>
          <Text style={title}>Top Product</Text>
        </View>
        <View style={body}>
          {
            this.props.arrayProduct.map(e => (
              <TouchableOpacity key={e.id} style={productContainer} onPress={this.goToDetailProduct.bind(this, e)} v>
                <Image source={{ uri: `${Config.urlImageProduct}${e.images[0]}` }} style={productImage} />
                <Text style={productName}>{e.nameType.toUpperCase()}</Text>
                <Text style={productPrice}>{`${e.price}${'$'}`}</Text>
              </TouchableOpacity>
            ))
          }
        </View>
      </View>
    );
  }
}

const { width } = Dimensions.get('window');
const productWidth = (width - 60) / 2;
const productHeight = (productWidth * 452) / 361;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2
  },
  titleContainer: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 10
  },
  title: {
    fontSize: 20
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  productContainer: {
    width: productWidth,
    paddingBottom: 10,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2
  },
  productImage: {
    width: productWidth,
    height: productHeight
  },
  productName: {
    paddingLeft: 10,
  },
  productPrice: {
    paddingLeft: 10,
  }
});
