import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Linking } from 'react-native';
import { React,useState } from 'react';

export default function App() {
  const [name ,setName] = useState('Tomate')
  const [session,setSession] = useState({ number: 6,title: 'state'})
  const [current,setCurrent] = useState(true)
  const onClickHandler= () =>{
    setName('meu nome é Tomate')
    setSession({number: 7, title: 'Style'})
    setCurrent(false)
  }
  const [counter, setCounter] = useState(0);

  const onClickCounter = () => {
    setCounter(counter + 1)
  }

  return (
    <View style={styles.body}>
      <Button style={styles.button} title='Meu Github' onPress={()=>{Linking.openURL('https://github.com/juliovianadev')}}/>
      <Text style={styles.text}> {name}</Text>
      <Text style={styles.text}> {current ? 'current session':'next session'}</Text>
      <Text style={styles.text}>this is session number {session.number} and {session.title}</Text>
      <Button style={styles.button} title='Update State' onPress={onClickHandler}></Button>
      
      <Text style={styles.text}>{counter * 5}</Text>
      <Button title='Add' onPress={onClickCounter}></Button>
      <Text style={styles.text}>You clicked {counter} times</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  body:{
    backgroundColor: '#00BFFF',
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
  },
  text: {
   color: '#fff',
   fontSize: 20,
   fontStyle: 'italic',
  },
  button:{
    paddingTop: 10,
  }
});
