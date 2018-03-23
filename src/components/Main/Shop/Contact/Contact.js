import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Headers from '../Header';

export default class Constact extends Component {

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'blue' }}>
        <Headers navigator={this.props.navigation} />
        <Text>Constact</Text>
      </View>
    );
  }
}
