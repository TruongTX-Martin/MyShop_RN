import React from 'react';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';
// import Main from './Main/Main';
import Menu from './Main/Menu';
import Home from './Main/Shop/Home/Home';
import Card from './Main/Shop/Card/Card';
import Contact from './Main/Shop/Contact/Contact';
import Search from './Main/Shop/Search/Search';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import OrderHistory from './OrderHistory/OrderHistory';
import DetailProduct from './Main/Shop/DetailProduct/DetailProduct';
import ListProduct from './Main/Shop/ListProduct/ListProduct';
import TopProduct from './Main/Shop/Home/TopProduct';

export const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      header: false,
    }
  },
  DetailProduct: {
    screen: DetailProduct,
    navigationOptions: {
      tabBarLabel: 'Detail Product',
      header: false,
    }
  },
  ListProduct: {
    screen: ListProduct,
    navigationOptions: {
      tabBarLabel: 'List Product',
      header: false,
    }
  }
});

export const Tabbar = TabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      header: false,
    }
  },
  Card: {
    screen: Card,
    navigationOptions: {
      tabBarLabel: 'Card',
      header: false
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      tabBarLabel: 'Search',
      header: false
    }
  },
  Contact: {
    screen: Contact,
    navigationOptions: {
      tabBarLabel: 'Contact',
      header: false
    }
  }
},
  {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
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
  },
  Authentication: {
    screen: Authentication,
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
  OrderHistory: {
    screen: OrderHistory,
    navigationOptions: {
      header: false
    }
  },
  TopProduct: {
    screen: TopProduct,
    navigationOptions: {
      tabBarLabel: 'TopProduct',
      header: false,
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
  }
});
