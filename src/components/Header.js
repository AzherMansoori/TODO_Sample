import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>TODO :</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    color: 'darkblue',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  container: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
  },
});
