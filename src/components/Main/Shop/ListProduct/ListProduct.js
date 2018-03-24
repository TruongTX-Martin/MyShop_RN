import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Headers from '../Header';

export default class ListProduct extends Component {
  onBackPress() {
    this.props.navigation.pop();
  }
  goToDetail() {
    this.props.navigation.navigate('DetailProduct');
  }
  render() {
    return (
      <View>
        <Headers navigator={this.props.navigation} />
        <Text>List Product</Text>
        <TouchableOpacity onPress={this.onBackPress.bind(this)}>
          <Text>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.goToDetail.bind(this)}>
          <Text>Do to Detail</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

