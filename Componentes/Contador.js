import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"

export const Contador=()=>{
    const [contador,setcontador]=useState(0)
    return(
        <View>
            <Text style={estilos.texto}>Hola soy el compomnente</Text>
            <Button title="Incrementa" onPress={()=> setcontador(contador+1)}/>
            <Text style={estilos.texto}>Contador : {contador}</Text>
            <Button title="Decremento" onPress={()=> setcontador(contador-1)}/>
            <TextInput placeholder="Valor" onChangeText={(valor)=>setcontador(valor)}/>
        </View>
    )
}

const estilos=StyleSheet.create({
    texto:{
        fontSize:30
    }
})