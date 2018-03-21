import React, { Component } from 'react';
import { Text, View } from 'react-native';


export default class Card extends Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'yellow' }}>
                <Text>Card</Text>
            </View>
        );
    }
}
