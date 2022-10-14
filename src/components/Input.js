import React from 'react';
import {TextInput, View, StyleSheet, Button} from 'react-native';

export default function Input(props) {
  const {onChange, value, onAddClick} = props;
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={e => {
          onChange(e);
        }}
        value={value}
      />
      <Button title="ADD" style={styles.button} onPress={() => onAddClick()} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 15,
    color: 'black',
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: '500',
    width: '70%',
  },
  button: {
    fontSize: 25,
    backgroundColor: 'darkblue',
    fontWeight: '500',
    width: '30%',
    borderRadius: 10,
  },
  container: {
    padding: 10,
    height: 70,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 25,
    marginVertical: 5,
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
