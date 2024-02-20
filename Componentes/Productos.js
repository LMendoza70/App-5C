import { View, Text, Alert, ActivityIndicator, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

const Productos = () => {
    const [data,setData]=useState([])
    const [load,setLoad]=useState(false)

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(obj=>{
            setData(obj)
            setLoad(true)
        })
        .catch(err=>Alert.alert('Error al consultar : '+err))
    },[])

const UScreen=()=>{
    return(
        <View>
            <ActivityIndicator color={'darkblue'}
            size={'large'}/>
            <Text>Cargando datos...</Text>
        </View>
    )
}

const LScreen=()=>{
    return(
        <View>
            <Text>Datos Cargados...</Text>
            <FlatList
            data={data}
            renderItem={({item})=><Card 
            title={item.title}
            price={item.price}
            image={item.image}/>}
            keyExtractor={item=>item.id}/>
        </View>
    )
}

const Card=({title,price,image})=>{
    return(
        <View>
            <Text>Producto : {title}</Text>
            <Text>Precio : $ {price}MNX</Text>
            <Image style={{height:85,width:85}}
            source={{uri:image}}/>
        </View>
    )
}

  return (
    <View>
      <Text>Productos</Text>
      {load?LScreen():UScreen()}
    </View>
  )
}

export default Productos