import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import TodoItem from '../components/TodoItem';
import Header from '../components/Header';
import Input from '../components/Input';
const initialItems = [{title: 'First Item'}];

export default function TodoList() {
  const [itemList, setItemList] = useState(initialItems);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const [currentTitle, setCurrentTitle] = useState('');

  const renderItem = ({item, index}) => {
    return (
      <TodoItem
        item={item}
        onPress={() => onItemClick(item, index)}
        onRemove={() => onRemove(index)}
      />
    );
  };

  const onItemClick = (item, index) => {
    setIsUpdate(true);
    setSelectedIndex(index);
    setCurrentTitle(item.title);
  };
  const onAction = () => {
    if (currentTitle && currentTitle.length === 0) {
      return;
    }
    let tempArray = [...itemList];
    if (isUpdate) {
      tempArray[selectedIndex].title = currentTitle;
    } else {
      tempArray.push({title: currentTitle});
    }
    setCurrentTitle('');
    setItemList(tempArray);
  };
  const onRemove = index => {
    let tempArray = [...itemList];
    tempArray.splice(index, 1);
    setItemList(tempArray);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={itemList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={itemList}
      />
      <Input
        value={currentTitle}
        onChange={value => setCurrentTitle(value)}
        onAddClick={onAction}
        isUpdate={isUpdate}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
    padding: 5,
  },
});
