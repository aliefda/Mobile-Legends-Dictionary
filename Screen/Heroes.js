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
            source={{uri: 'https://www.tipspintar.com/wp-content/uploads/2017/09/hayabusa-mobile-legends.jpg'}}
          />

          <Image
           style={{alignItems: 'center', width: 370, height:160, marginBottom: 5, marginTop:1, }}
            source={{uri: 'https://jurnalapps.co.id/assets/img/content/1508740204_1508427307_lancelot-feature-image.jpg'}}
          />

          <Image
           style={{alignItems: 'center', width: 370, height:160, marginBottom: 30, marginTop:1, }}
            source={{uri: 'https://www.tipspintar.com/wp-content/uploads/2018/01/zhask-mobile-legends-1.jpg'}}
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