/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {CreateTabNavigator} from 'react-navigation';
import {TabNavigator} from 'react-navigation';

import {Home} from './screen/Home';
import {Heroes} from './screen/Heroes';
import {Settings} from './screen/Setting';

const Tab = TabNavigator({
  Home: {
    screen: Home,
  },
  Heroes: {
    screen: Heroes,
  },
  Settings: {
    screen: Settings,
  }
},{
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions:{
    activeTintColor: '#f8f8f8',
    activeBackgroundColor: '#b76e79',
    inactiveTintColor: '#1234',
    style:{
      backgroundColor:'#b76e79',
    },

    labelStyle: {
      fontSize: 10,
      color: '  black',
      padding: 5,
    }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Tab/>
    );
  }
}