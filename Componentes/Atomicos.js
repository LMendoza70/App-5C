import {Pressable,Image,Text, View } from 'react-native'
import { estilos, estilos as styles } from './Estilos'

export const Boton=({texto,imagen,accion,color1,color2})=>{
    return(
      <Pressable 
      style={({pressed})=>[{
        backgroundColor:pressed? color1:color2,
        margin:pressed?6:3,
      },styles.Boton]}
      onPress={accion}
      >
        <Image 
          source={imagen}
          style={styles.img} 
        /> 
        <Text style={styles.TextoB}>{texto}</Text>
      </Pressable>
    )
  } 

  export const Caja=({valor})=>{
    return(
        <View style={estilos.estiloCaja}>
            <Text style={estilos.TCaja}>{valor}</Text>
        </View>
    )
  }