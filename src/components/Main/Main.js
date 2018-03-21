import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';


export default class Main extends Component {

    openSlideMenu() {
        this.props.navigation.navigate('DrawerOpen');
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'gray' }}>
                <Text>Main</Text>
                <TouchableOpacity onPress={this.openSlideMenu.bind(this)}>
                    <Text>Open Menu</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
