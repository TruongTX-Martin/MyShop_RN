import React, { Component } from 'react'; 
import { Text, View, TouchableOpacity } from 'react-native';


export default class Menu extends Component {

    toAuthentication() {
        console.log('to authentication');
        this.props.navigation.navigate('Authentication');
    }

    toChangeInfo() {
        console.log('to change info');
        this.props.navigation.navigate('ChangeInfo');
    }

    ToOrderHistory() {
        console.log('to order history');
        this.props.navigation.navigate('OrderHistory');
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Text>Menu</Text>

                <TouchableOpacity onPress={this.toAuthentication.bind(this)}>
                    <Text>To Authentication</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toChangeInfo.bind(this)}>
                    <Text>To Change Info</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.ToOrderHistory.bind(this)}>
                    <Text>To Order History</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
