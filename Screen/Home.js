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
            source={{uri: 'https://i.pinimg.com/originals/ab/a1/fd/aba1fd8d914fd3455b0c24437645ff95.png'}}
          />

          <Text style={nbStyles.subtitle}>
            Let's play moba!!
          </Text>
          <Text style={nbStyles.subtitle}>
            LET'S START!
          </Text>

          <Button block style={nbStyles.btn}  onPress={() => this.props.navigation.navigate('Heroes')}
          >
            <Text style={{color: 'black'}}>Start</Text>
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
        backgroundColor: '#edc6c5',
    },
    subtitle: {
        textAlign: 'center',
        color: 'white'
    },
    btn: {
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 25,
        backgroundColor: '#b76e79',
        marginVertical: 10,
        paddingVertical: 13,
    },
}