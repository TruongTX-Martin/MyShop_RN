import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Headers from '../Header';

export default class Card extends Component {

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'yellow' }}>
        <Headers navigator={this.props.navigation} />
        <Text>Card</Text>
      </View>
    );
  }
}
