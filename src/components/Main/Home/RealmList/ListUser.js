import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, Text } from 'react-native';
import Headers from '.././HeaderHome';

export default class ListUser extends Component {

  gotoRealmList() {
    console.log('go to realm list');
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#e3e2e0' }}>
        <Headers navigator={this.props.navigation} />
        <TouchableOpacity onPress={this.gotoRealmList.bind(this)}>
          <Text>Add User</Text>
        </TouchableOpacity>

      </View>
    );
  }
}
