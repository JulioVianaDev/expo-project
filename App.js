import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
{/* STATE É MUTAVEL E O PROPS É UMA CARACTERISTICA IMUTAVEL*/}
const App = () => {
  const [name, setName] = useState('Tomate')
  const [session, setSession] = useState({ number: 6, title: 'The batman' })
  const [current, setCurrent] = useState(true)

  const onClickHandler = () => {
    setName('Otaku')
    setSession({ number: 7, title: 'Jujust kaisen' })
    setCurrent(false)
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>Vim ver um filme na sessão {session.number} sobre {session.title}</Text>
      <Text style={styles.text}>{current ? 'current session' : 'next session'}</Text>
      <Button title='Update State' onPress={onClickHandler}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;