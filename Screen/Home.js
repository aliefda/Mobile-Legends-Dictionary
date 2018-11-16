import React, {Component} from 'react';
import {Container, Content, Thumbnail, Button} from 'native-base';
import {Scrollview, Text, StyleSheet, Image, View} from 'react-native';

export class Home extends React.Component{
  render(){
    return(
      <View style= {nbStyles.container}>
          <Text style={{fontSize: 20, marginTop:50, textAlign: 'center', color: 'white'}}>
            Welcome to Mobile Legend
          </Text>

          <Image
           style={{alignItems: 'center', width: 350, height:200, marginBottom: 30, marginTop:30, }}
            source={{uri: 'https://cdn-www.bluestacks.com/bs-images/mobile-legends_logo.png'}}
          />

          <Text style={nbStyles.subtitle}>
            Let's play moba!!
          </Text>
          <Text style={nbStyles.subtitle}>
            LET'S START!          
          </Text>

          <Button block style={nbStyles.gan}  onPress={() => this.props.navigation.navigate('Heroes')}>
            <Text style={{color: 'white'}}>START</Text>
          </Button>
        </View>
    );
  }
}

const nbStyles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#071e3d',
    },
    subtitle: {
        textAlign: 'center',
        color: 'white'
    },
    gan: {
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 25,
        backgroundColor: '#278ea5',
        marginVertical: 10,
        paddingVertical: 13,
    },
}