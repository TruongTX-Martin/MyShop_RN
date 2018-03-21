import React, { Component } from 'react'; 
import { StatusBar } from 'react-native';
import { MainStack } from './Router';

StatusBar.setHidden(true);
export default class App extends Component {
    render() {
        return (
            <MainStack />
        );
    }
}
