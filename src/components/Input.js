import React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function Input(props) {
  const {onChange, value, onAddClick, isUpdate} = props;
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={e => {
          onChange(e);
        }}
        value={value}
        placeholder="Enter here"
      />
      <TouchableOpacity style={styles.button} onPress={() => onAddClick()}>
        <Text style={styles.title}>{isUpdate ? 'UPDATE' : 'ADD'}</Text>
      </TouchableOpacity>
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
    flex: 1,
  },
  button: {
    backgroundColor: 'darkblue',
    width: 100,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
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
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
  },
});
