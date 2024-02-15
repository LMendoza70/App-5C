import { View, Text, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Boton } from './Atomicos'

const Producto = () => {
    const [prod,setProd]=useState(null)
    const [load,setLoad]=useState(false)

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/1')
        .then((res)=>res.json())
        .then((obj)=>{
            setProd(obj)
            setLoad(true)
        })
        .catch((err)=>Alert.alert('Ocurrio un error : '+err))
    },[load])

  return (
    <View>
        {load?(
        <View>
            <Text>Titulo : {prod.title} </Text>
            <Text>Precio : $ {prod.price} MXN </Text>
            <Image source={{uri:prod.image}} style={{height:100,width:100}}/>
            <Text>Descripcion : {prod.description} </Text>
            <Text>Valoracion : {prod.rating.rate} </Text>
        </View>
        ):(
            <Text>Cargando datos...</Text>
        )}
      
    </View>
  )
}

/*
*/

export default Producto