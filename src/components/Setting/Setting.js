import React, { Component } from 'react';
import {
  View, TouchableOpacity, Text, Image, StyleSheet, Picker
} from 'react-native';
import backSpecial from '../../media/appIcon/back_white.png';

export default class Setting extends Component {

  constructor(props) {
    super(props);
    this.state = {
      language: ''
    };
  }

  goBackToMain() {
    this.props.navigation.pop();
  }

  updateLanguage() {
  }

  render() {
    const {
      wrapper, header, headerTitle, backIconStyle, body, viewRowStyle, textLanguage
    } = styles;
    return (
      <View style={wrapper}>
        <View style={header}>
          <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
            <Image source={backSpecial} style={backIconStyle} />
          </TouchableOpacity>
          <Text style={headerTitle}>Setting</Text>
          <View />
        </View>
        <View style={body}>
          <View style={viewRowStyle}>
            <Text style={textLanguage} >Language</Text>
            <Picker style={{ flex: 1 }} selectedValue={this.state.language} onValueChange={this.updateLanguage}>
              <Picker.Item label="Viet Nam" value="Viet Nam" />
              <Picker.Item label="English" value="English" />
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
