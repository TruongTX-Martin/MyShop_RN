import React, { Component } from 'react';
import {
  View, TouchableOpacity, Text, Image, StyleSheet, Dimensions, ListView
} from 'react-native';
import getOrderHistory from '../../api/getOrderHistory';
import getToken from '../../api/getToken';
import backSpecial from '../../media/appIcon/back_white.png';

export default class OrderHistory extends Component {
  constructor(props) {
    super(props);
    this.state = { arrOrder: [] };
  }

  componentDidMount() {
    //get token
    getToken()
      .then(token => {
        console.log(token);
        this.getOrderHistory(token);
      });
  }

  getOrderHistory(token) {
    getOrderHistory(token)
      .then(arrOrder => {
        this.setState({
          arrOrder
        });
      })
      .catch(() => console.log('Order history error:'));
  }
  goBackToMain() {
    this.props.navigation.pop();
  }
  render() {
    const { wrapper, header, headerTitle, backIconStyle, body, orderRow } = styles;
    return (
      <View style={wrapper}>
        <View style={header}>
          <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
            <Image source={backSpecial} style={backIconStyle} />
          </TouchableOpacity>
          <Text style={headerTitle}>Order History</Text>
          <View />
        </View>
        <View style={body}>
          <ListView
            enableEmptySections
            dataSource={
              new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
              }).cloneWithRows(this.state.arrOrder)
            }
            renderRow={order => (
              <View style={orderRow}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
                  <Text style={{ color: '#2ABB9C' }}>{order.id}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
                  <Text style={{ color: '#C21C70' }}>{order.date_order}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Status:</Text>
                  <Text style={{ color: '#2ABB9C' }}>{order.status}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Total:</Text>
                  <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>{order.total}$</Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flex: 1,
    backgroundColor: '#2ABB9C',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  headerTitle: {
    fontFamily: 'Avenir',
    color: '#fff',
    fontSize: 20
  },
  backIconStyle: {
    width: 30,
    height: 30
  },
  body: {
    flex: 10,
    backgroundColor: '#F6F6F6'
  },
  orderRow: {
    height: width / 3,
    backgroundColor: '#FFF',
    margin: 10,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#DFDFDF',
    shadowOpacity: 0.2,
    padding: 10,
    borderRadius: 2,
    justifyContent: 'space-around'
  }
});

