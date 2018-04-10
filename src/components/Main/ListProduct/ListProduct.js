import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ListView, RefreshControl
} from 'react-native';
import Header from '../../../Common/Header';
import getListProduct from '../../../api/getListProduct';
import Config from '../../Config';
import Utils from '../../../utils/Utils';

export default class ListProduct extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: null,
      listProduct: [],
      refreshing: false,
      page: 1
    };
  }

  componentDidMount() {
    const category = this.props.navigation.state.params.category;
    this.setState({
      category
    });
    this.requestListProduct(category.id, this.state.page);
  }

  onRefreshListProduct() {
    this.setState({
      refreshing: true,
      page: this.state.page + 1
    }, () => {
      this.requestListProduct(this.state.category.id, this.state.page);
    });
  }

  onBackPress() {
    this.props.navigation.pop();
  }

  requestListProduct(id, page) {
    getListProduct(id, page)
      .then(res => this.setState({
        refreshing: false,
        listProduct: res.concat(this.state.listProduct)
      }))
      .catch(() => this.setState({ refreshing: false }));
  }


  goToDetail() {
    this.props.navigation.navigate('DetailProduct');
  }


  render() {
    const {
      parrentStyle, container,
      wrapper, imgProduct, productInfo, txtProductName, txtProductPrice,
      txtProductMaterial, productRow, textColor, circleColor, txtShowDetail
    } = styles;
    const { category, listProduct } = this.state;

    return (
      <View style={parrentStyle}>
        <Header navigator={this.props.navigation} title={category ? category.name : ''} />
        <View style={container}>
          <ListView
            enableEmptySections
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.onRefreshListProduct.bind(this)}
              />
            }
            dataSource={
              new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
                .cloneWithRows(listProduct)
            }
            renderRow={product => (
              <View style={wrapper}>
                <Image
                  style={imgProduct}
                  source={{ uri: `${Config.urlImageProduct}${product.images[0]}` }}
                />
                <View style={productInfo}>
                  <Text style={txtProductName}>{Utils.toTitleCase(product.name)}</Text>
                  <Text style={txtProductPrice}>{product.price}$</Text>
                  <Text style={txtProductMaterial}>{Utils.toTitleCase(product.material)}</Text>
                  <View style={productRow}>
                    <Text style={textColor}>{Utils.toTitleCase(product.color)}</Text>
                    <View style={circleColor} />
                    <TouchableOpacity onPress={this.goToDetail.bind(this)}>
                      <Text style={txtShowDetail}>SHOW DETAILS</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parrentStyle: {
    backgroundColor: '#F6F6F6'
  },
  container: {
    margin: 10,
    backgroundColor: '#ffffff',
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2
  },
  wrapper: {
    flexDirection: 'row',
    paddingTop: 10,
    margin: 10,
    marginTop: 0,
    borderTopColor: '#CACACA',
    borderTopWidth: 0.5
  },
  imgProduct: {
    width: 70,
    height: (70 * 452) / 361
  },
  productInfo: {
    paddingLeft: 10,
    justifyContent: 'space-between',
    flex: 1
  },
  txtProductName: {
    fontSize: 18,
    color: '#AAAAAA'
  },
  txtProductPrice: {
    fontSize: 16,
    color: '#DD4D97'
  },
  txtProductMaterial: {
    fontSize: 16,
    color: '#5E5E5E'
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textColor: {
    fontSize: 16,
    color: '#5E5E5E'
  },
  circleColor: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: 'gray'
  },
  txtShowDetail: {
    fontSize: 13,
    color: '#DD4D97'
  }
});
