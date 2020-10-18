import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import ScreenActions from './components/ScreenActions';
import Header from './components/Header';
import NewCollection from './components/NewCollection';
import BrandCrush from './components/BrandCrush';
import Gender from './components/Gender';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ScreenActions />
        <Header />
        <NewCollection />
        <BrandCrush />
        <Gender />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
});
