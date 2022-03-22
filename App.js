import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList, 
  TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native';
import { Button } from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSubtmit] = useState('');
  
  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, { name: 'Item 69' }]);
    setRefreshing(false);
  }

  const onPressHandler =()=>{
    setSubtmit(!submitted)
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
     
        {/*
          <Button
            title={submitted? 'Limpar' : 'Enviar'}
            onPress={onPressHandler}
            // este argumento serve para desativar o botão depois dele ser ativado
            //disabled={submitted}
            color={'#ff00ff'}
          />
        */}
      <TouchableOpacity
        onPress={onPressHandler}
        style={styles.button}
        activeOpacity={0.2}
      >
        <Text
          style={styles.text}
        >
          {submitted? 'Limpar' : 'Enviar'}
        </Text>
      </TouchableOpacity>
      {submitted? 
        <Text style={styles.text}>
          Você foi registrado com {name} 
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
  button:{
    marginBottom: 10,
    borderColor:'#ff00ff',
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