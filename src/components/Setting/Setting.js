import React, { Component } from 'react';
import {
  View, TouchableOpacity, Text, Image, StyleSheet, Picker
} from 'react-native';
import I18n from 'react-native-i18n';
import saveLanguage from '../../api/saveLanguage';
import getLanguage from '../../api/getLanguage';
import backSpecial from '../../media/appIcon/back_white.png';
import { strings } from '../../i18n';
import string from './string';

export default class Setting extends Component {

  constructor(props) {
    super(props);
    this.state = {
      language: string.VIETNAM_VALUE
    };
  }

  componentDidMount() {
    getLanguage()
      .then(language => {
        this.setState({
          language
        });
      });
  }

  goBackToMain() {
    this.props.navigation.pop();
  }

  updateLanguage = (language) => {
    if (language === this.state.language) {
      return;
    }
    I18n.locale = language;
    saveLanguage(language);
    this.setState({
      language
    });
  }

  render() {
    const {
      wrapper, header, headerTitle, backIconStyle, body, viewRowStyle, textLanguage
    } = styles;
    console.log('render setting');
    return (
      <View style={wrapper}>
        <View style={header}>
          <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
            <Image source={backSpecial} style={backIconStyle} />
          </TouchableOpacity>
          <Text style={headerTitle}>{strings('settingScreen.setting')}</Text>
          <View />
        </View>
        <View style={body}>
          <View style={viewRowStyle}>
            <Text style={textLanguage} >{strings('settingScreen.language')}</Text>
            <Picker
              style={{ flex: 1 }}
              selectedValue={this.state.language}
              onValueChange={this.updateLanguage.bind(this)}
              value={this.state.language}
            >
              <Picker.Item label={string.VIETNAM_LABEL} value={string.VIETNAM_VALUE} />
              <Picker.Item label={string.ENGLISH_LABEL} value={string.ENGLISH_VALUE} />
            </Picker>
          </View>
        </View>
      </View>
    );
  }
}

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
  signInStyle: {
    flex: 3,
    marginTop: 50
  },
  viewRowStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  textLanguage: {
    flex: 2,
    marginLeft: 10,
    fontSize: 18,
    color: '#000000'
  }
});
