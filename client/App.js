import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import Sandbox from './components/sandbox';
import axios from 'axios';

export default function App() {

  useEffect(() => {
    axios.get('http://10.0.0.18:8000/api/items')
      .then(res => {
        console.log(res),
        setTodos(res.data.product);
      })
      .catch(error => console.log(error))
  }, [todos])

  const [todos, setTodos] = useState([]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {

    if(text.length > 3){
      setTodos((prevTodos) => {
        return[
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else{
      Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ])
    }
  }

  return (
    //<Sandbox />
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed keyboard');
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  }
});