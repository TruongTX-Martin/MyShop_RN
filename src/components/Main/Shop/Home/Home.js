import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import Headers from '../Header';
import Collection from './Collections';
import Category from './Category';
import TopProduct from './TopProduct';
import initData from '../../../../api/initData';
import Config from '../../../../components/Config';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      arrayType: [],
      arrayProduct: []
    };
  }

  componentDidMount() {
    initData()
      .then(resJson => {
        this.setState({
          arrayType: resJson.type,
          arrayProduct: resJson.product
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
          <TopProduct navigator={this.props.navigation} arrayProduct={this.state.arrayProduct} />
        </ScrollView>

      </View>
    );
  }
}
