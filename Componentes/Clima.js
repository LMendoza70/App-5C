import { View, Text, ActivityIndicator, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colores } from './Estilos'

const Clima = () => {
    const [data,setData]=useState(null)
    const [load,setLoad]=useState(false)

    useEffect(()=>{
        fetch('https://api.weatherapi.com/v1/forecast.json?key=5a492ff34efa492b91a172441211110&q=huejutla&days=5&aqi=no&alerts=no&lang=es')
        .then(res=>res.json())
        .then(obj=>{
            setData(obj)
            setLoad(true)
        })
    },[])

    const UScreen=()=>{
        return(
            <View>
                <ActivityIndicator size={'large'}
                color={colores.color1}/>
                <Text>Cargando datos...</Text>
            </View>
        )
    }

    const Card=({fecha,iko,min,max})=>{
        return(
            <View>
                <Text>{fecha}</Text>
                <Image style={{height:50,width:50}}
                source={{uri:'https:'+iko}}/>
                <Text>{min}°C / {max}°C</Text>
            </View>
        )

    }
    const LScreen=()=>{
        return(
            <View>
                <Text>{data.location.name}</Text>
                <Text>{data.current.temp_c}°C</Text>
                <Text>{data.current.condition.text} * 
                {data.forecast.forecastday[0].day.maxtemp_c}°C 
                 / {data.forecast.forecastday[0].day.mintemp_c}°C</Text>

                <FlatList
                data={data.forecast.forecastday}
                renderItem={({item})=>
                <Card max={item.day.maxtemp_c} 
                fecha={item.date}
                min={item.day.mintemp_c}
                iko={item.day.condition.icon}/>}
                horizontal
                />
            </View>
        )
    }

  return (
    <View>
      <Text>Clima</Text>
      {load?LScreen():UScreen()}
    </View>
  )
}

export default Clima