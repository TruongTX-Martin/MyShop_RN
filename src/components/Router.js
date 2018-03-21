import React from 'react';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';
// import Main from './Main/Main';
import Menu from './Main/Menu';
import Home from './Main/Home/Home';
import Card from './Main/Card/Card';
import Contact from './Main/Contact/Contact';
import Search from './Main/Search/Search';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import OrderHistory from './OrderHistory/OrderHistory';

export const Tabbar = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            header: false
        }
    },
    Card: {
        screen: Card,
        navigationOptions: {
            tabBarLabel: 'Card',
            header: false
        }
    },
    Contact: {
        screen: Contact,
        navigationOptions: {
            tabBarLabel: 'Contact',
            header: false
        }
    },
    Search: {
        screen: Search,
        navigationOptions: {
            tabBarLabel: 'Search',
            header: false
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
        screen: Tabbar,
        navigationOptions: {
            header: false
        }
    }
},
    {
        drawerWidth: 300,
        drawerPosition: 'left',
        contentComponent: (props) => <Menu {...props} />
    }

);

export const MainStack = StackNavigator({
    SlideMenu: {
        screen: SlideMenu,
        navigationOptions: {
            header: false
        }
    },
    ChangeInfo: {
        screen: ChangeInfo,
        navigationOptions: {
            header: false
        }
        
    },
    Authentication: {
        screen: Authentication,
        navigationOptions: {
            header: false
        }
    },
    OrderHistory: {
        screen: OrderHistory,
        navigationOptions: {
            header: false
        }
    }
    
});
