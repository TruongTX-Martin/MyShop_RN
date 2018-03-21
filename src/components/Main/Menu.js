import React, { Component } from 'react'; 
import { Text, View, TouchableOpacity } from 'react-native';


export default class Menu extends Component {

    toAuthentication() {
        console.log('to authentication');
        // this.props.navigation.navigate('Authentication_Screen');
    }

    toChangeInfo() {
        console.log('to change info');
        this.props.navigation.navigate('ChangeInfo_Screen');
    }

    ToOrderHistory() {
        console.log('to order history');
        this.props.navigation.navigate('OrderHistory_Screen');
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Text>Menu</Text>

                <TouchableOpacity onPress={this.toAuthentication(this)}>
                    <Text>To Authentication</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toChangeInfo(this)}>
                    <Text>To Change Info</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.ToOrderHistory(this)}>
                    <Text>To Order History</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
