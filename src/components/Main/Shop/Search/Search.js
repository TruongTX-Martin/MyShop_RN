import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Headers from '../Header';

export default class Search extends Component {

  goToDetail() {
    this.props.navigation.navigate('DetailProduct');
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <Headers navigator={this.props.navigation} />
        <Text>Search</Text>
        <TouchableOpacity onPress={this.goToDetail.bind(this)}>
          <Text>Goto Detail</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
