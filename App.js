import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Setting from './src/Setting';
import Home from './src/Home';

const AppNavigator = StackNavigator({
  SettingScreen: { screen: Setting },
  HomeScreen: { screen: Home }
});

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}