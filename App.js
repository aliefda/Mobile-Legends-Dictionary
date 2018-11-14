/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {Platform,StyleSheet,Text,View} from 'react-native';
import {TabNavigator} from 'react-navigation';

import {Home} from './Screen/Home';
import {Heroes} from './Screen/Heroes';
import {Settings} from './Screen/Setting';

const Navbar = TabNavigator(
{
  Home: {
    screen: Home,
  },
  Heroes: {
    screen: Heroes,
  },
  Settings: {
    screen: Settings,
  }
},
{
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions:
    {
      activeTintColor: '#1f4287',
      activeBackgroundColor: '#071e3d',
      inactiveTintColor: '#1234',
      style:{
        backgroundColor:'#1f4287',
      },


      labelStyle: {
      fontSize: 10,
      color: 'white',
      padding: 5,
      }
    }
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Navbar/>
    );
  }
}