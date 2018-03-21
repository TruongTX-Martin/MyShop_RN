import React from 'react';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';
import Main from './Main/Main';
import Menu from './Main/Menu';
import Home from './Main/Home/Home';
import Card from './Main/Card/Card';
import Contact from './Main/Contact/Contact';
import Search from './Main/Search/Search';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import OrderHistory from './OrderHistory/OrderHistory';

export const MainStack = StackNavigator({
    Main_Screen: {
        screen: Main,
        navigationOptions: {
            header: false
        }
    }
});

export const AuthenticaitonStack = StackNavigator({
    Authentication_Screen: {
        screen: Authentication
    }
});

export const ChangeInfoStack = StackNavigator({
    ChangeInfo_Screen: {
        screen: ChangeInfo
    }
});

export const OrderHistoryStack = StackNavigator({
    OrderHistory_Screen: {
        screen: OrderHistory
    }
});

export const HomeStack = StackNavigator({
    Home_Screen: {
        screen: Home,
        navigationOptions: {
            header: false
        }
    }
});

export const CardStack = StackNavigator({
    Card_Screen: {
        screen: Card,
        navigationOptions: {
            header: false
        }
    }
});

export const ContactStack = StackNavigator({
    Contact_Screen: {
        screen: Contact,
        navigationOptions: {
            header: false
        }
    }
});

export const SearchStack = StackNavigator({
    Search_Screen: {
        screen: Search,
        navigationOptions: {
            header: false
        }
    }
});

export const Tabbar = TabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: 'Home'
        }
    },
    Card: {
        screen: CardStack,
        navigationOptions: {
            tabBarLabel: 'Card'
        }
    },
    Contact: {
        screen: ContactStack,
        navigationOptions: {
            tabBarLabel: 'Contact'
        }
    },
    Search: {
        screen: SearchStack,
        navigationOptions: {
            tabBarLabel: 'Search'
        }
    }
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
        style: {
           backgroundColor: '#dddddd'
        },
        inactiveTintColor: 'green',
        activeTintColor: 'red'
    }
}
);
export const SlideMenu = DrawerNavigator({
    Tabbar: {
        screen: Tabbar
    }
},
    {
        drawerWidth: 300,
        drawerPosition: 'left',
        contentComponent: props => <Menu {...props} />
    }

);

