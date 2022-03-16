import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Linking } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.body}>
      <Text style={styles.text}> Meu primeiro app</Text>
      <Button title='Meu Github' onPress={()=>{Linking.openURL('https://github.com/juliovianadev')}}></Button>
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
});
