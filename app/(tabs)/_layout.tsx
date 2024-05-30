import { Tabs } from 'expo-router';
import React from 'react';
import Header from './Header';
import Main from './Main';
import { View } from 'react-native';
import Footer from './Footer';
export default function App() {
  return (
    <View>
      <Header/>
      <Main/>
    </View>
  );
}
