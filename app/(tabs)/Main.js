import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { travelData } from './data';

const location = require('./img/location-icon.png');

export default function Main() {
  return (
    <ScrollView style={styles.main}>
      {travelData.map((item) => (
        <View key={item.id} style={styles.mainItem}>
          <View style={styles.mainImg}>
            <Image source={item.img} style={styles.image} />
          </View>
          <View style={styles.mainContent}>
            <View style={styles.mainContentHead}>
              <Image source={location} style={styles.icon} />
              <Text style={styles.mainContentHeadLocation}>{item.location}</Text>
              <Text style={styles.mainContentHeadView}>{item.view}</Text>
            </View>
            <Text style={styles.mainContentTitle}>{item.title}</Text>
            <Text style={styles.mainContentTime}>{item.time}</Text>
            <Text style={styles.mainContentDes}>{item.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main:{
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  mainItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    
  },
  mainContent: {
    paddingHorizontal: 10,
  },
  image:{
    height: 180,
    borderRadius: 10,
  },
  mainContentHead:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainContentHeadLocation:{
    paddingHorizontal: 5,
    color: '#2B283A',
    fontSize: 10.24,
    fontFamily: 'Inter',
    fontWeight: '400',
    letterSpacing: 1.74,
    wordWrap: 'break-word',
  },
  mainContentHeadView:{
    color: '#918E9B',
    fontSize: 10.24,
    fontFamily: 'Inter',
    fontWeight: '400',
    textDecorationLine: 'underline',
    wordWrap: 'break-word',
  },
  mainContentTitle:{
    color: '#2B283A',
    fontSize: 25,
    fontFamily: 'Inter',
    fontWeight: '700',
    wordWrap: 'break-word',
    paddingBottom: 10,
    maxWidth: 200,
  },
  mainContentTime:{
    color: '#2B283A',
    fontSize: 10.24,
    fontFamily: 'Inter',
    fontWeight: '700',
    wordWrap: 'break-word',
    paddingBottom: 4,
  },
  mainContentDes:{
    maxWidth: 200,
    color: '#2B283A',
    fontSize: 10.24,
    fontFamily: 'Inter',
    fontWeight: '400',
    lineHeight: 15.36,
    wordWrap: 'break-word'
  }
});
