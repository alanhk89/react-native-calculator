import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class CalculatorResponse extends React.Component {
  render() {
    const { result, refresh, operation } = this.props;

    return (
      <View>
        <View style={styles.resultContainer}>
          <Text style={styles.result}>
            {result}
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.input} onPress={refresh}>
            <Text style={styles.delete}>
            AC 
            </Text>
            <Text style={styles.input}>
              {operation ? operation : 'Enter your operation'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  resultContainer: {
    alignItems: 'flex-end',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginTop: 25,
    paddingVertical: 25,
    paddingRight: 10,
    margin: 1,
  },

  result: {
    color: '#fff',
    fontSize: 42,
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },

  delete: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 23,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  input: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 23,
    padding: 5,
  },
});

export default CalculatorResponse;
