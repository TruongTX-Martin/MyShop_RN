import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Headers from '../Header';

export default class Search extends Component {

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <Headers navigator={this.props.navigation} />
        <Text>Search</Text>
      </View>
    );
  }
}
