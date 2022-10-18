import React, {useState} from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import TodoItem from '../components/TodoItem';
import Header from '../components/Header';
import Footer from '../components/Footer';
const initialItems = [{title: 'First Item'}];

export default function TodoList() {
  const [itemList, setItemList] = useState(initialItems);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const [currentTitle, setCurrentTitle] = useState('');

  // function will invoke on click of flatlist item, will on the update mode for selected item, set selected
  // index and selected title that need to update.
  const onItemClick = (item, index) => {
    setIsUpdate(true);
    setSelectedIndex(index);
    setCurrentTitle(item.title);
  };

  // invoke when button press to add and update item, checks isUpdate flag is true then update item on selected index
  // else it will add item into the list.
  const onAction = () => {
    try {
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
    } catch (error) {
      console.error(error);
    }
  };

  // invoke when remove button press on list item, removes that item from list.
  const onRemove = index => {
    let tempArray = [...itemList];
    tempArray.splice(index, 1);
    setItemList(tempArray);
  };

  // Callback to return flat list item
  const renderItem = ({item, index}) => {
    return (
      <TodoItem
        key={index}
        item={item}
        onPress={() => onItemClick(item, index)}
        onRemove={() => onRemove(index)}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title="TODO :" />
      <FlatList
        data={itemList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        key={item => item.id}
        extraData={itemList}
      />
      <Footer
        id="footer"
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
