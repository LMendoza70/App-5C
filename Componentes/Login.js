import { View, Text } from 'react-native'
import React from 'react'
import { estilos } from './Estilos'
import { Boton, Caja } from './Atomicos'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const nav =useNavigation()
  return (
    <View style={estilos.container}>
      <Text>Login</Text>
      <Caja valor={'Usuario'}/>
      <Caja valor={'Password'}/>
      <Boton texto={'Login'} accion={()=>nav.navigate('Home')}/>
      <Boton texto={'Cancel'}/>
    </View>
  )
}

export default Login