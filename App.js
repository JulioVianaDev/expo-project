import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  ToastAndroid,
} from 'react-native';

const App = () => {

  const [name, SetName] = useState('');
  const [submitted, SetSubmitted] = useState(false);
  const onPressHandler = () => {
    if (name.length > 3) {
      SetSubmitted(!submitted);
    } else{
      // Alert.alert("Warning",'O nome usado tem menos de 3 caracteres',[
      //   {
      //     text: 'não mostrar novamente',
      //     onPress:()=>console.warn('Não mostrar novamente pressionado')
      //   },
      //   {
      //     text: 'OK',
      //     onPress:()=>console.warn('Ok pressionado')
      //   },
      //   {
      //     text: 'Cancelar',
      //     onPress:()=>console.warn('Cancelar pressionado')
      //   },
      // ],{
      //   cancelable: true, 
      //   onDismiss:()=>console.warn('alerta skkipado')
      //  }) 
      //ESTE CÓDIGO SÓ FUNCIONA NO ANDROID
      ToastAndroid.showWithGravity('o nome precisa ter mais que 3 caracteres',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
       
      )
    }
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Please write your name:
      </Text>
      <TextInput
        style={styles.input}
        placeholder='e.g. John'
        onChangeText={(value) => SetName(value)}
      />
      <Pressable
        onPress={onPressHandler}
        hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
        android_ripple={{ color: '#00f' }}
        style={({ pressed }) => [
          { backgroundColor: pressed ? '#dddddd' : '#00ff00' },
          styles.button
        ]}
      >
        <Text style={styles.text}>
          {submitted ? 'Clear' : 'Submit'}
        </Text>
      </Pressable>
      {submitted ?
        <Text style={styles.text}>
          You are registered as {name}
        </Text>
        :
        null
      }
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
  },
});

export default App;