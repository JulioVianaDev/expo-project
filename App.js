import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Linking } from 'react-native';
import { React,useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';

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
  const [Items, setItems] = useState([
    {key:1,item:'Item 1'},
    {key:2,item:'Item 2'},
    {key:3,item:'Item 3'},
    {key:4,item:'Item 4'},
    {key:5,item:'Item 5'},
    {key:6,item:'Item 6'},
    {key:7,item:'Item 7'},
    {key:8,item:'Item 8'},
    {key:34,item:'Item 23'},
    {key:0,item:'Item 54'},
        
  ])

  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, { key: 69, item: 'Item 69' }]);
    setRefreshing(false);
  }
  return (
    <View style={styles.body}>
     
      {/*parte 1
        <View style={styles.button}>
          <Button style={styles.button} title='Meu Github' onPress={()=>{Linking.openURL('https://github.com/juliovianadev')}}/>
        </View>
        <Text style={styles.text}> {name}</Text>
        <Text style={styles.text}> {current ? 'current session':'next session'}</Text>
        <Text style={styles.text}>this is session number {session.number} and {session.title}</Text>
        <Button style={styles.button} title='Update State' onPress={onClickHandler}></Button>
        
        <Text style={styles.text}>{counter * 5}</Text>
        <Button title='Add' onPress={onClickCounter}></Button>
        <Text style={styles.text}>You clicked {counter} times</Text>
      */}

      {/* parte 2
        <View style={styles.view1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.view3}>
          <Text style={styles.text}>3</Text>
        </View>
      */}

      {/* parte 3*
      <ScrollView horizontal={false}
        refreshControl={
          <RefreshControl
            refreshing={Refreshing}
            onRefresh={onRefresh}
            colors={['#ff00ff']}
          />
        }
      >
      {
        Items.map((item)=>{
          return(
          <View style={styles.item} key={item.key}>
            <Text style={styles.text}>{item.item}</Text>
          </View>
          )
        })
      }
      <View style={styles.item}>
        <Text style={styles.text}>Item 9</Text>
      </View>
      </ScrollView>
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    backgroundColor: '#00BFFF',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderWidth:10,
    borderColor: '#0726D9',
    borderRadius:10,
    flexDirection: 'column',
    justifyContent:'space-evenly',
    
    /*margin:30,*/
  },
  item:{
    backgroundColor: '#051DA6',
    justifyContent:'center',
  },
  text: {
    margin:20,
   color: '#fff',
   fontSize:60,
   fontStyle: 'italic',
   textTransform: 'uppercase',
  },
  button:{
    paddingTop: 10,
  },
  view1:{
    backgroundColor: '#051DA6',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height:100,
  },
  view2:{
    backgroundColor: '#050840',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height:100,
  },
  view3:{
    backgroundColor: '#040959',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height:100,
  }
});
