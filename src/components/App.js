import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { SlideMenu } from './Router';
import refreshToken from '../api/refreshToken';
import getToken from '../api/getToken';
import saveToken from '../api/saveToken';

StatusBar.setHidden(true);
export default class App extends Component {

  componentDidMount() {
    const functionToken = this.functionRefreshToken.bind(this);
    setInterval(functionToken, 30000);
  }

  functionRefreshToken() {
    getToken()
      .then(token => {
        refreshToken(token)
          .then(newToken => saveToken(newToken))
          .catch(error => console.log('Token refresh error:' + error));
      });
  }
  render() {
    return (
      <SlideMenu />
    );
  }
}
