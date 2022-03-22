import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
} from 'react-native';
import { TextInput } from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [Items, setItems] = useState([
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' },
    { name: 'Item 4' },
    { name: 'Item 5' },
    { name: 'Item 6' },
    { name: 'Item 7' },
    { name: 'Item 8' },
    { name: 'Item 9' },
    { name: 'Item 27' },
    { name: 'Item 78' },
  ]);
  const DATA = [
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    },
    {
      title: 'Title 2',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
    },
    {
      title: 'Title 3',
      data: ['Item 3-1'],
    },
    {
      title: 'Title 4',
      data: ['Item 4-1', 'Item 4-2'],
    },
  ]
  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, { name: 'Item 69' }]);
    setRefreshing(false);
  }

  return (

    <View style={styles.body}>
      <Text style={styles.text}>
        Por favor escreva seu nome
      </Text>
      <TextInput style={styles.input}
      multiline
        placeholder='Ex: Julio Viana'
        onChangeText={(value)=>setName(value)}
        maxLength={20}
      />
      <Text style={styles.text}>
          Seu nome é: {name} ?
      </Text>
      <Text style={styles.text}>
          agora digite sua idade
      </Text>
      <TextInput style={styles.input}
        keyboardType='numeric'
        editable={false}
      />
      <Text style={styles.text}>
          informe sua senha
      </Text>
      <TextInput style={styles.input}
        secureTextEntry
      />
    </View>
   
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems:'center',
  },
  input:{
    width: 200,
    borderWidth: 1,
    borderColor:'#ff00ff',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 14,
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;