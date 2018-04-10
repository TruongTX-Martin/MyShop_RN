import React, { Component } from 'react';
import I18n from 'react-native-i18n';
import { StatusBar } from 'react-native';
import { SlideMenu } from './Router';
import refreshToken from '../api/refreshToken';
import getToken from '../api/getToken';
import saveToken from '../api/saveToken';
import getLanguage from '../api/getLanguage';

StatusBar.setHidden(true);
export default class App extends Component {

  componentDidMount() {
    const functionToken = this.functionRefreshToken.bind(this);
    setInterval(functionToken, 30000);
    //get language
    getLanguage()
      .then(language => {
        I18n.locale = language;
      });
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
