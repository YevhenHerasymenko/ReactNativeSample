'use strict';
import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Text Screen',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Text>Hello</Text>
    );
  }
}
