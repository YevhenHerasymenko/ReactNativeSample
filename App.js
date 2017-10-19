/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StackNavigator,
} from 'react-navigation';
import HomeScreen from './HomeScreen'
import ProfileScreen from './ProfileScreen'

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});

export default class App extends Component {
  render() {
    return <SimpleApp />;
  }
}
