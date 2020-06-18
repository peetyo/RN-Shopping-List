import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import  Header from './components/Header'
// import { uuid } from 'uuidv4'
import uuid from 'uuid-random'

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Vanilla Milk'},
    {id: uuid(), text: 'Vanilla Milk'},
    {id: uuid(), text: 'Vanilla Milk'},
  ]);

  return (
    <View style={styles.container}>
      <Header title="Shopping List"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;