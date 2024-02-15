import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Boton } from './Atomicos'

const Imc = () => {
    const [peso, setpeso] = useState(0)
    const [altura, setaltura] = useState(0)
    const [resultado, setresultado]=useState(0)

  return (
    <View>
      <Text>Calculadora de IMC</Text>
      <Text>Captura el peso...</Text>
      <TextInput placeholder='Peso en kg...'
      inputMode='numeric'
      onChangeText={(x)=>setpeso(parseFloat(x))}/>
      <Text>Captura la estatura...</Text>
      <TextInput placeholder='Altura en m...'
      inputMode='numeric'
      onChangeText={(x)=>setaltura(parseFloat(x))}/>
      <Boton texto={'Calcular'}
      accion={()=>setresultado(calcula(peso,altura))}/>
      <Text>El resultado es : {resultado}</Text>
    </View>
  )
}

const calcula=(p,a)=>{
    return p/(a*a)
}

export default Imc