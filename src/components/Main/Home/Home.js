import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import Headers from './HeaderHome';
import Collection from './Collections';
import Category from './Category';
import TopProduct from './TopProduct';
import initData from '../../../api/initData';
import getToken from '../../../api/getToken';
import checkLogin from '../../../api/checkLogin';
import saveToken from '../../../api/saveToken';
import Global from '../../Global';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      arrayType: [],
      arrayProduct: []
    };
  }

  componentDidMount() {
    // get data for home
    initData()
      .then(resJson => {
        this.setState({
          arrayType: resJson.type,
          arrayProduct: resJson.product
        });
      });
    //check login every start app
    getToken()
      .then(token => {
        checkLogin(token)
          .then(res => {
            console.log('check login success');
            saveToken(res.token);
            Global.onLoginSuccess(res.user);
          })
          .catch(() => {
            console.log('check login failed');
            // saveToken(''); -> not save because api checklogin died
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
