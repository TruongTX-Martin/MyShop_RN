import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import Headers from '../Header';
import Collection from './Collections';
import Category from './Category';
import TopProduct from './TopProduct';

export default class Home extends Component {

  openSlideMenu() {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#e3e2e0' }}>
        <Headers navigator={this.props.navigation} />
        <ScrollView>
          <TopProduct />
        </ScrollView>
        {/* <Collection />
        <Category /> */}
      </View>
    );
  }
}
