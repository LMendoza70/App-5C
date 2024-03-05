import { View, Text, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

const Producto = ({route}) => {
    const [prod,setProd]=useState(null)
    const [load,setLoad]=useState(false)
    const {id}=route.params

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/'+id)
        .then((res)=>res.json())
        .then((obj)=>{
            setProd(obj)
            setLoad(true)
        })
        .catch((err)=>Alert.alert('Ocurrio un error : '+err))
    },[])

    const screenL=()=>{
        return(
        <View>
            <Text>Titulo : {prod.title} </Text>
            <Text>Precio : $ {prod.price} MXN </Text>
            <Image source={{uri:prod.image}} style={{height:100,width:100}}/>
            <Text>Descripcion : {prod.description} </Text>
            <Text>Valoracion : {prod.rating.rate} </Text>
        </View>
        )
    }

    const screenU=()=>{
        return(
            <Text>Cargando datos...</Text>
        )
    }
  return (
    <View>
        {load?screenL():screenU()}
    </View>
  )
}
export default Producto