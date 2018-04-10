import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
// import Main from './Main/Main';
import Menu from './Main/SlideMenu/Menu';
import Home from './Main/Home/Home';
import Contact from './Contact/Contact';
import Search from './Main/Search/Search';
import Authentication from './Authentication/Authentication';
import Setting from './Setting/Setting';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import OrderHistory from './OrderHistory/OrderHistory';
import DetailProduct from './Main/DetailProduct/DetailProduct';
import ListProduct from './Main/ListProduct/ListProduct';
import Card from './Main/Card/Card';
import TopProduct from './Main/Home/TopProduct';

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
  },
  TopProduct: {
    screen: TopProduct,
    navigationOptions: {
      tabBarLabel: 'TopProduct',
      header: false,
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      tabBarLabel: 'Search',
      header: false
    }
  },
  Card: {
    screen: Card,
    navigationOptions: {
      tabBarLabel: 'Card',
      header: false
    }
  }
});
export const SlideMenu = DrawerNavigator({
  Home: {
    screen: HomeStack,
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
  Contact: {
    screen: Contact,
    navigationOptions: {
      tabBarLabel: 'Contact',
      header: false
    }
  },
  Setting: {
    screen: Setting,
    navigationOptions: {
      tabBarLabel: 'Setting',
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
