import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  fullView: {
    flex: 1,
    backgroundColor: '#ddd'
  },
  menuBar: {
    backgroundColor: '#ddd'
  }
});

export class Greeting extends Component {
  render() {
    return (
      <Text>{this.props.name}</Text>
    );
  }
}