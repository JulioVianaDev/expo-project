import React,{useState,useEffect} from 'react'
import { View,Text,FlatList,ActivityIndicador } from 'react-native'

export default function Dados (){
    const [carregando,setCarregando] = useState(true)
    const [dados,setDados] = useState([])

    useEffect(
        ()=>{
            fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
                .then((resp)=>resp.json())
                .then((json)=>setDados(json.high))
                .catch(()=>(alert('Erro ao carregar o json de maior valor')))
                .finally(()=>setCarregando(false))
        },[]
    )

    return(
        <View>
            {dados}
        </View>
    )
}