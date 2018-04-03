import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

import imgBanner from '../../../../media/temp/banner.jpg';

const { width, height } = Dimensions.get('window');
export default class Collection extends Component {
  render() {
    const { wrrapper, viewTitle, viewImage, tvTitle, imageBanner } = styles;
    return (
      <View style={wrrapper}>
        <View style={viewTitle}>
          <Text style={tvTitle}>SPRING COLLECTION</Text>
        </View>
        <View style={viewImage}>
          <Image source={imgBanner} style={imageBanner} />
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
  }
});

