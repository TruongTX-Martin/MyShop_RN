import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Dimensions, TouchableOpacity, ImageBackground
} from 'react-native';
import Swiper from 'react-native-swiper';


const { width, height } = Dimensions.get('window');
const urlImageType = 'http://192.168.90.18/api/images/type/';
export default class Category extends Component {
  goToListProduct() {
    console.log('Go to detail');
    this.props.navigator.navigate('ListProduct');
  }
  render() {
    const { wrrapper, viewTitle, viewImage, tvTitle, imageBanner, swiper, txtNameProduct } = styles;
    console.log("category:" + this.props.arrayType);
    return (
      <View style={wrrapper}>
        <View style={viewTitle}>
          <Text style={tvTitle}>LIST OF CATEGORY</Text>
        </View>
        <View style={viewImage}>
          <Swiper style={swiper} showsButtons>
            {
              this.props.arrayType.map(e => (
                <TouchableOpacity key={e.id} onPress={this.goToListProduct.bind(this)}>
                  <ImageBackground source={{ uri: urlImageType + e.image }} style={imageBanner}>
                    <Text style={txtNameProduct}>{e.name}</Text>
                  </ImageBackground>
                </TouchableOpacity>
              ))
            }
          </Swiper>
        </View>
      </View>
    );
  }
}
// 933 * 465
const bannerWidth = width - 40;
const bannerHeight = (bannerWidth * 465) / 933;
const styles = StyleSheet.create({
  wrrapper: {
    height: height * 0.35,
    backgroundColor: '#ffffff',
    margin: 10,
    shadowColor: 'gray',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    padding: 10,
    paddingTop: 0
  },
  viewTitle: {
    flex: 1,
    justifyContent: 'center',
  },
  viewImage: {
    flex: 4,
    justifyContent: 'flex-end'
  },
  tvTitle: {
    fontSize: 18
  },
  imageBanner: {
    width: bannerWidth,
    height: bannerHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtNameProduct: {
    fontSize: 20,
    color: '#C0C0C0'
  },
  swiper: {

  }
});

