import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ListView
} from 'react-native';
import Headers from '../Header';
import getListProduct from '../../../../api/getListProduct';
import Config from '../../../Config';
import imgBack from '../../../../media/appIcon/backList.png';

export default class ListProduct extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: null,
      listProduct: []
    };
  }

  componentDidMount() {
    const category = this.props.navigation.state.params.category;
    this.setState({
      category
    });
    getListProduct(category.id, 1)
      .then(res => this.setState({ listProduct: res }))
      .catch(error => console.log('get list product error:' + error));
  }
  onBackPress() {
    this.props.navigation.pop();
  }
  goToDetail() {
    this.props.navigation.navigate('DetailProduct');
  }
  render() {
    const {
      parrentStyle, container, header, imgBackStyle, txtTitle, viewRightHeader,
      wrapper, imgProduct, productInfo, txtProductName, txtProductPrice,
      txtProductMaterial, productRow, textColor, circleColor, txtShowDetail
    } = styles;
    const { category, listProduct } = this.state;

    return (
      <View style={parrentStyle}>
        <Headers navigator={this.props.navigation} />
        <View style={container}>
          <View style={header}>
            <TouchableOpacity onPress={this.onBackPress.bind(this)}>
              <Image style={imgBackStyle} source={imgBack} />
            </TouchableOpacity>
            <Text style={txtTitle}>{category ? category.name : ''}</Text>
            <View style={viewRightHeader} />
          </View>
          <ListView
            enableEmptySections
            dataSource={
              new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(listProduct)
            }
            renderRow={product => (
              <View style={wrapper}>
                <Image
                  style={imgProduct}
                  source={{ uri: `${Config.urlImageProduct}${product.images[0]}` }}
                />
                <View style={productInfo}>
                  <Text style={txtProductName}>{product.name}</Text>
                  <Text style={txtProductPrice}>{product.price}$</Text>
                  <Text style={txtProductMaterial}>{product.material}</Text>
                  <View style={productRow}>
                    <Text style={textColor}>{product.color}</Text>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  imgBackStyle: {
    width: 30,
    height: 30,
    marginLeft: 10
  },
  txtTitle: {
    color: '#DD4D97',
    fontSize: 20
  },
  viewRightHeader: {
    width: 30,
    height: 30
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

/* <View style={wrapper}>
            <Image style={imgProduct} source={sp1} />
            <View style={productInfo}>
              <Text style={txtProductName}>Lace Sleeve Si</Text>
              <Text style={txtProductPrice}>117$</Text>
              <Text style={txtProductMaterial}>Material silk</Text>
              <View style={productRow}>
                <Text style={textColor}>Color RoyalBlue</Text>
                <View style={circleColor} />
                <TouchableOpacity onPress={this.goToDetail.bind(this)}>
                  <Text style={txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View> */

