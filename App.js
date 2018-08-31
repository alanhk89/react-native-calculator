import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import CalculatorResponse from './components/CalculatorResponse';
import CalculatorButtonsContainer from './components/CalculatorButtonsContainer';

const styles = StyleSheet.create({
  fullView: {
    flex: 1,
    backgroundColor: '#000'
  },
  menuBar: {
    backgroundColor: '#ddd'
  }
});

class HelloWorldApp extends Component {
  constructor() {
    super();

    this.state = {
      result: 0,
      operation: '',
    };
  }

  getResult() {
    // This function should get the first input, the operator and
    // the second input and calculate the result.
  }

  refresh= () => { 
    this.setState({result: 0});
  }


  handleButtonPress = (button) => {
    const {result} = this.state;
    if(result === 0) {
      if(!isNaN(button)) {
        this.setState({
          result: button,
        });
      } else if(button === '.'){
        this.setState({
          result: result+button,
        });
      } else {
        this.setState({
          operation: button,
        });
      }
    } else {
      if(button === '+' || button === '-' || button === '/' || button === '*') {
        this.setState({
          operation: button,
        });
      } else if(!isNaN(result)) {
        this.setState({
          result: result+button,
        });
      }
    }
  }

  render() {
    const { result, operation } = this.state;
    return (
      <SafeAreaView style={styles.fullView}>
        <CalculatorResponse
          result={result}
          operation={operation}
          refresh={this.refresh}
        />

        <CalculatorButtonsContainer
          handleButtonPress={this.handleButtonPress}
        />
      </SafeAreaView>
    );
  }
}

export default HelloWorldApp;
