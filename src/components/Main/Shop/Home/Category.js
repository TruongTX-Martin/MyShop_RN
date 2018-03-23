import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Swiper from 'react-native-swiper';

import imgCategory1 from '../../../../media/temp/maxi.jpg';
import imgCategory2 from '../../../../media/temp/midi.jpg';
import imgCategory3 from '../../../../media/temp/mini.jpg';

const { width, height } = Dimensions.get('window');
export default class Category extends Component {
  render() {
    const { wrrapper, viewTitle, viewImage, tvTitle, imageBanner, swiper } = styles;
    return (
      <View style={wrrapper}>
        <View style={viewTitle}>
          <Text style={tvTitle}>LIST OF CATEGORY</Text>
        </View>
        <View style={viewImage}>
          <Swiper style={swiper} showsButtons>
            <Image source={imgCategory1} style={imageBanner} />
            <Image source={imgCategory2} style={imageBanner} />  
            <Image source={imgCategory3} style={imageBanner} />  
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
    height: bannerHeight
  },
  swiper: {

  }
});

