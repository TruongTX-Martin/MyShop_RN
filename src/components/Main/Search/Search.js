import React, { Component } from 'react';
import {
  StyleSheet, View, FlatList, ActivityIndicator, Text
} from 'react-native';
import Header from '../../Common/Header';
import searchProduct from '../../../api/searchProduct';
import ItemSearch from './ItemSearch';

export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      arrayProduct: [],
      searchError: false
    };
  }

  componentDidMount() {
    const { search } = this.props.navigation.state.params;
    searchProduct(search)
      .then(arrayProduct => {
        this.setState({ arrayProduct });
      })
      .catch(() => this.setState({ searchError: true }));
  }
  gotoDetail() {
    const { navigator } = this.props;
    navigator.push({ name: 'PRODUCT_DETAIL' });
  }
  keyExtractor = (item, index) => item.id;//eslint-disable

  renderItem = ({ item }) => (
    <ItemSearch product={item} navigator={this.props.navigator} />
  );

  renderResult() {
    if (this.state.searchError) {
      return (<Text>Not found. Search again with 'max'</Text>);
    } else if (this.state.arrayProduct) {
      return (
        <FlatList
          data={this.state.arrayProduct}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      );
    }
    return (<ActivityIndicator size="large" color="#0000ff" />);
  }

  render() {
    const { wrapper } = styles;
    const { search } = this.props.navigation.state.params;
    return (
      <View style={wrapper}>
        <Header
          navigator={this.props.navigation}
          title={search}
          hideCartIcon
        />
        {this.renderResult()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F6F6F6',
    flex: 1
  }
});
