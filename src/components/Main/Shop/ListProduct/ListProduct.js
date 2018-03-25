import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';
import Headers from '../Header';

import imgBack from '../../../../media/appIcon/backList.png';
import sp1 from '../../../../media/temp/sp1.jpeg';

export default class ListProduct extends Component {
  onBackPress() {
    this.props.navigation.pop();
  }
  goToDetail() {
    this.props.navigation.navigate('DetailProduct');
  }
  render() {
    const {
      parrentStyle, container, header, imgBackStyle, txtTitle, viewRightHeader,
      wrapper, imgProduct, productInfo, txtProductName, txtProductPrice,
      txtProductMaterial, productRow, textColor, circleColor, txtShowDetail
    } = styles;
    return (
      <View style={parrentStyle}>
        <Headers navigator={this.props.navigation} />
        <ScrollView style={container}>
          <View style={header}>
            <TouchableOpacity onPress={this.onBackPress.bind(this)}>
              <Image style={imgBackStyle} source={imgBack} />
            </TouchableOpacity>
            <Text style={txtTitle}>Party Dress</Text>
            <View style={viewRightHeader} />
          </View>
          <View style={wrapper}>
            <Image style={imgProduct} source={sp1} />
            <View style={productInfo}>
              <Text style={txtProductName}>Lace Sleeve Si</Text>
              <Text style={txtProductPrice}>117$</Text>
              <Text style={txtProductMaterial}>Material silk</Text>
              <View style={productRow}>
                <Text style={textColor}>Color RoyalBlue</Text>
                <View style={circleColor} />
                <TouchableOpacity onPress={this.goToDetail.bind(this)}>
                  <Text style={txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={wrapper}>
            <Image style={imgProduct} source={sp1} />
            <View style={productInfo}>
              <Text style={txtProductName}>Lace Sleeve Si</Text>
              <Text style={txtProductPrice}>117$</Text>
              <Text style={txtProductMaterial}>Material silk</Text>
              <View style={productRow}>
                <Text style={textColor}>Color RoyalBlue</Text>
                <View style={circleColor} />
                <Text style={txtShowDetail}>SHOW DETAILS</Text>
              </View>
            </View>
          </View>

          <View style={wrapper}>
            <Image style={imgProduct} source={sp1} />
            <View style={productInfo}>
              <Text style={txtProductName}>Lace Sleeve Si</Text>
              <Text style={txtProductPrice}>117$</Text>
              <Text style={txtProductMaterial}>Material silk</Text>
              <View style={productRow}>
                <Text style={textColor}>Color RoyalBlue</Text>
                <View style={circleColor} />
                <Text style={txtShowDetail}>SHOW DETAILS</Text>
              </View>
            </View>
          </View>

          <View style={wrapper}>
            <Image style={imgProduct} source={sp1} />
            <View style={productInfo}>
              <Text style={txtProductName}>Lace Sleeve Si</Text>
              <Text style={txtProductPrice}>117$</Text>
              <Text style={txtProductMaterial}>Material silk</Text>
              <View style={productRow}>
                <Text style={textColor}>Color RoyalBlue</Text>
                <View style={circleColor} />
                <Text style={txtShowDetail}>SHOW DETAILS</Text>
              </View>
            </View>
          </View>

          <View style={wrapper}>
            <Image style={imgProduct} source={sp1} />
            <View style={productInfo}>
              <Text style={txtProductName}>Lace Sleeve Si</Text>
              <Text style={txtProductPrice}>117$</Text>
              <Text style={txtProductMaterial}>Material silk</Text>
              <View style={productRow}>
                <Text style={textColor}>Color RoyalBlue</Text>
                <View style={circleColor} />
                <Text style={txtShowDetail}>SHOW DETAILS</Text>
              </View>
            </View>
          </View>

          <View style={wrapper}>
            <Image style={imgProduct} source={sp1} />
            <View style={productInfo}>
              <Text style={txtProductName}>Lace Sleeve Si</Text>
              <Text style={txtProductPrice}>117$</Text>
              <Text style={txtProductMaterial}>Material silk</Text>
              <View style={productRow}>
                <Text style={textColor}>Color RoyalBlue</Text>
                <View style={circleColor} />
                <Text style={txtShowDetail}>SHOW DETAILS</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parrentStyle: {
    backgroundColor: '#F6F6F6'
  },
  container: {
    margin: 10,
    backgroundColor: '#ffffff',
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  imgBackStyle: {
    width: 30,
    height: 30,
    marginLeft: 10
  },
  txtTitle: {
    color: '#DD4D97',
    fontSize: 20
  },
  viewRightHeader: {
    width: 30,
    height: 30
  },
  wrapper: {
    flexDirection: 'row',
    paddingTop: 10,
    margin: 10,
    marginTop: 0,
    borderTopColor: '#CACACA',
    borderTopWidth: 0.5
  },
  imgProduct: {
    width: 70,
    height: (70 * 452) / 361
  },
  productInfo: {
    paddingLeft: 10,
    justifyContent: 'space-between',
    flex: 1
  },
  txtProductName: {
    fontSize: 18,
    color: '#AAAAAA'
  },
  txtProductPrice: {
    fontSize: 16,
    color: '#DD4D97'
  },
  txtProductMaterial: {
    fontSize: 16,
    color: '#5E5E5E'
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textColor: {
    fontSize: 16,
    color: '#5E5E5E'
  },
  circleColor: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: 'gray'
  },
  txtShowDetail: {
    fontSize: 13,
    color: '#DD4D97'
  }
});

