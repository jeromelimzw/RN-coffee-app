import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import OrderScreen from './src/screens/OrderScreen';
import SettingScreen from './src/screens/SettingScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import CustomizationScreen from './src/screens/CustomizationScreen';
import LoadingScreen from './src/screens/LoadingScreen';

const AppStack = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" size={25} color={tintColor} />
        ),
      },
    },
    Order: {
      screen: OrderScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="coffee" size={25} color={tintColor} />
        ),
      },
    },
    Notifications: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="bell" size={25} color={tintColor} />
        ),
        tabBarBadge: 10,
      },
    },
    Settings: {
      screen: SettingScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="sliders" size={25} color={tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#e4d5c9',
    inactiveColor: '#626b73',
    barStyle: {
      backgroundColor: '#21394a',
      paddingBottom: 5,
      paddingTop: 5,
    },
    shifting: false,
  },
);

const OverallNavi = createSwitchNavigator(
  {
    App: AppStack,
    Customization: {screen: CustomizationScreen},
    Loading: {screen: LoadingScreen},
  },
  {initialRouteName: App},
);

const App = createAppContainer(OverallNavi);

export default App;
