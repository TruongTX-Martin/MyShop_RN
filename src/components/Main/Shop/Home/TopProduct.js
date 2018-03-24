import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';

export default class TopProduct extends Component {


  goToDetailProduct() {
    console.log('Go to detail');
    this.props.navigator.navigate('DetailProduct');
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
          <TouchableOpacity style={productContainer} onPress={this.goToDetailProduct.bind(this)} v>
            <Image source={sp1} style={productImage} />
            <Text style={productName}>Product Name</Text>
            <Text style={productPrice}>400$</Text>
          </TouchableOpacity>
          <TouchableOpacity style={productContainer} onPress={this.goToDetailProduct.bind(this)}>
            <Image source={sp2} style={productImage} />
            <Text style={productName}>Product Name</Text>
            <Text style={productPrice}>300$</Text>
          </TouchableOpacity>
          <View style={{ height: 10, width }} />
          <TouchableOpacity style={productContainer} onPress={this.goToDetailProduct.bind(this)}>
            <Image source={sp3} style={productImage} />
            <Text style={productName}>Product Name</Text>
            <Text style={productPrice}>400$</Text>
          </TouchableOpacity>
          <TouchableOpacity style={productContainer} onPress={this.goToDetailProduct.bind(this)}>
            <Image source={sp4} style={productImage} />
            <Text style={productName}>Product Name</Text>
            <Text style={productPrice}>300$</Text>
          </TouchableOpacity>
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
