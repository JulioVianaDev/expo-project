import React, {useEffect, useState} from 'react'
import {SafeAreaView, View,FlatList,Image,Text,StyleSheet} from 'react-native'
import {Imagem,Nome} from './components/estilizados'
import styled from 'styled-components/native'
export default function App(){
  const [allMovies,setAllMovie] = useState([])
  useEffect(()=>{
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(response=>response.json())
    .then(data=>{
        data.forEach(data=>{
            console.log(data.title);
            console.log(data.description)
            console.log(data.release_date)
        })
        setAllMovie(data);
    }).catch(err=>{
        console.log(err)
    })
  },[])

  return(
    <Corpo style={styles.body}>
     <Text>Ghibli Movies</Text> 
     <FlatList
        data={allMovies}
        renderItem={({item})=>
          <View>
            <TextTitle>{item.title}</TextTitle>
            <ImagemGhibli
              source={{uri: item.image}}
            />
          </View>
        }
     />
    </Corpo>
  )
}
const ImagemGhibli = styled.Image`
  width: 250px;
  height: 400px;
`;

const Corpo=styled.View`
align-items:center;
`;
const TextTitle= styled.Text`
  font-size:33px;
  font-family:cursive;
  color: #f3f;
`;
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
  },
  imagemG:{
    width:55,
    height:35
  }
});