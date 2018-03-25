import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import Headers from '../Header';
import Collection from './Collections';
import Category from './Category';
import TopProduct from './TopProduct';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      arrayType: [],
      text: 'Truong'
    };
  }

  componentDidMount() {
    fetch('http://192.168.90.18/api/')//eslint-disable-line
    .then(res => res.json())
    .then(resJson => {
      this.setState({
        arrayType: resJson.type
      });
    });
  }
  openSlideMenu() {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#e3e2e0' }}>
        <Headers navigator={this.props.navigation} />
        <ScrollView>
          <Collection />
          <Category navigator={this.props.navigation} arrayType={this.state.arrayType} />
          <TopProduct navigator={this.props.navigation} />
        </ScrollView>

      </View>
    );
  }
}
