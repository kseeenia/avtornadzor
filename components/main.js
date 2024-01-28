import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import {gStyle} from '../styles/style';

export default function Main({navigation}) {
  const loadScene = () => {
    navigation.navigate('authors_supervision');
  }
      return (
      <View style={gStyle.main}>
        <Text style={gStyle.title}>Главная страница</Text>
        <Button title='Авторский надзор' onPress={loadScene}/>
      </View>
      );
  }
  const styles = StyleSheet.create({
    
  });
  