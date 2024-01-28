import React, { useState } from 'react';        
import { StyleSheet, View, Text, FlatList, SafeAreaView, CheckBox} from 'react-native';
import {gStyle} from '../styles/style';
import { AccordionList } from 'react-native-accordion-list-view';

export default function AuthorsSupervision() {
  const data = [
    {
        id: 0,
        title: 'Глава 1',
        body: "Осмотр скважины",
    },
    {
        id: 1,
        title: 'Глава 2',
        body: "Ремонт скважины",
    }
];
      return (
      <SafeAreaView>
        <View style={styles.container}>
          <AccordionList
            data={data}
            customTitle={item => <Text>{item.title}</Text>}
            customBody={item => <Text>{item.body}</Text>}
            animationDuration={400}
            expandMultiple={true} />
          {/* <CheckBox></CheckBox> */}
        </View>
      </SafeAreaView>
      );
  }
  const styles = StyleSheet.create({
    container: {
      paddingVertical: '2%',
      paddingHorizontal: '2%',
      height: '100%',
      backgroundColor: '#e7e7e7'
    }
  });