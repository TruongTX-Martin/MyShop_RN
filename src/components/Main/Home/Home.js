import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';


export default class Home extends Component {

    openSlideMenu() {
        this.props.navigation.navigate('DrawerOpen');
        // this.props.navigation.navigate('Authentication_Screen');
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'green' }}>
                <Text>Home</Text>
                <TouchableOpacity onPress={this.openSlideMenu.bind(this)}>
                    <Text>Open Menu</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
