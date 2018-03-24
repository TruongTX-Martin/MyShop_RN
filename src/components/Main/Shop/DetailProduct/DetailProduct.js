import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Headers from '../Header';

export default class DetailProduct extends Component {
  onBackPress() {
    this.props.navigation.pop();
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'gray' }}>
        <Headers navigator={this.props.navigation} />
        <Text>Detail Product</Text>
        <TouchableOpacity onPress={this.onBackPress.bind(this)}>
          <Text>On Bacl</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
