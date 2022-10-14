import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default function TodoItem(props) {
  const {onPress, item, onRemove} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <View style={styles.titleContainer}>
        <View style={styles.circleView} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <Text onPress={onRemove} style={styles.title}>
        Remove
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    height: 70,
    backgroundColor: 'white',
    borderRadius: 25,
    marginVertical: 5,
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleView: {
    width: 25,
    height: 25,
    borderRadius: 15,
    backgroundColor: 'darkblue',
  },
  title: {
    fontSize: 20,
    color: 'gray',
    marginLeft: 10,
    fontWeight: '500',
  },
});
