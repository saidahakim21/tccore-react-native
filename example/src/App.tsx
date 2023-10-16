import * as React from 'react';

import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { TCUser } from 'tccore-react-native';

export default function App() {

  return (
    <View style={styles.appContainer}>
      <ButtonRow />
    </View>
  );
}

const ButtonRow = () => {
  
  return (
  <View style={styles.container}>

    <TouchableOpacity
      style={styles.button}
      onPress={printValues}>
      <Text style={styles.buttonText}>Print values</Text>
    </TouchableOpacity>
  </View>
);
};


function printValues()
{
  console.log(TCUser.getInstance().anonymous_id)
  TCUser.getInstance().anonymous_id = "test_anonymous_value"
  console.log(TCUser.getInstance().anonymous_id)
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});