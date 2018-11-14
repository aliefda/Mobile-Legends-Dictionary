import React, {Component} from 'react';
import {Container, Content, Thumbnail, Button} from 'native-base';
import {Scrollview, Text, StyleSheet, Image, View} from 'react-native';

export class Heroes extends React.Component{
  render(){
    return(
      <View style={nbStyles.subtitle}>
          <Text style={{fontSize: 25, marginTop:20, textAlign: 'center', color: 'white', fontWeight : 'bold'}}>
            HEROES
          </Text>

          <Image
           style={{alignItems: 'center', width: 370, height:160, marginBottom: 5, marginTop:10, }}
            source={{uri: 'http://cdn2.tstatic.net/bangka/foto/bank/images/change_20180424_155949.jpg'}}
          />

          <Image
           style={{alignItems: 'center', width: 370, height:160, marginBottom: 5, marginTop:1, }}
            source={{uri: 'http://cdn2.tstatic.net/style/foto/bank/images/odette-mobile-legends_20170918_205245.jpg'}}
          />

          <Image
           style={{alignItems: 'center', width: 370, height:160, marginBottom: 30, marginTop:1, }}
            source={{uri: 'http://cdn2.tstatic.net/style/foto/bank/images/digger-mobile-legends_20171020_190204.jpg'}}
          />

        </View>
    );
  }
}

const nbStyles = {
    subtitle: {
      backgroundColor: '#071e3d',

    },
    gan: {
      alignItems: 'center',
      marginTop: 30,
      borderRadius: 25,
    },
  }