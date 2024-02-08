import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Contador } from './Componentes/Contador';
import { Boton, Caja } from './Componentes/Atomicos';
import Calculadora from './Componentes/Calculadora';

export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado/>
      <Cuerpo/>
      <Pie/>
      <StatusBar style="auto" />
    </View>
  );
}

export const Encabezado=()=>{
  return(
    <View style={styles.encabezado}>
        <Text style={styles.texto}>X</Text>
        <Text style={styles.texto}>Encabezado</Text>
        <Text style={styles.texto}>X</Text>
      </View>
  )
}

export const Pie=()=>{
  return(
    <View style={styles.pie}>
        <Text style={styles.texto}>X</Text>
        <Text style={styles.texto}>X</Text>
        <Text style={styles.texto}>X</Text>
        <Text style={styles.texto}>X</Text>
      </View>
  )
}

export const Pie2=(props)=>{
  return(
    <View style={styles.pie}>
        <Text style={styles.texto}>{props.opA}</Text>
        <Text style={styles.texto}>{props.opB}</Text>
        <Text style={styles.texto}>{props.opC}</Text>
        <Text style={styles.texto}>{props.opD}</Text>
      </View>
  )
}

export const Pie3=({opA,opB,opC,opD})=>{
  return(
    <View style={styles.pie}>
        <Text style={styles.texto}>{opA}</Text>
        <Text style={styles.texto}>{opB}</Text>
        <Text style={styles.texto}>{opC}</Text>
        <Text style={styles.texto}>{opD}</Text>
      </View>
  )
}

export const Cuerpo=()=>{
  return(
    <View style={styles.cuerpo}>
        <Calculadora/>
      </View>
  )
}

export const Login=()=>{
  return(
    <View>
      <Text>Username...</Text>
      <TextInput></TextInput>
      <Text>Password...</Text>
      <TextInput></TextInput>
      <Button title='Login' onPress={()=>Alert.alert('Logeado')} />
      <Button title='Cancel' onPress={funcion}/>
      <Boton 
        texto={'login'} 
        imagen={require('./assets/react.png')}
        accion={funcion}
        color1={'red'}
        color2={'pink'}/>
      
      <Boton 
        texto={'cancel'} 
        imagen={require('./assets/favicon.png')}
        accion={()=>Alert.alert('otra funcion')}
        color1={'blue'}
        color2={'lightblue'}/>

      <Caja valor={'5'}/>
      
    </View>
  )
}

const funcion=()=>{
  //funcion bien largota
  Alert.alert('llamada desde la funcion')
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'stretch',
    justifyContent: 'center',

  },
  encabezado:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'#1373e8',
  },
  cuerpo:{
    flex:8
  },
  pie:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-evenly',
    backgroundColor:'#1373e8',
    alignItems:'center'
  },
  texto:{
    fontSize:25,
    color:'#fff'
  }
});
