import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Contador } from './Componentes/Contador';
import { Boton, Caja } from './Componentes/Atomicos';
import Calculadora from './Componentes/Calculadora';
import Imc from './Componentes/Imc';
import Producto from './Componentes/Producto';
import Productos from './Componentes/Productos';
import Clima from './Componentes/Clima';
import { colores } from './Componentes/Estilos';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Menu de Practicas' component={Home}/>
        <Stack.Screen name='Calculadora' component={Calculadora}/>
        <Stack.Screen name='Clima' component={Clima}/>
        <Stack.Screen name='Contador' component={Contador}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack=createNativeStackNavigator()

const Home=({navigation})=>{
  return(
    <View>
      <Text>Hola soy el home</Text>
      <Boton texto={'Calculadora'}
      accion={()=>navigation.navigate('Calculadora',{edad:55})}/>
      <Boton texto={'Clima'}
      accion={()=>navigation.navigate('Clima')}/>
      <Boton texto={'Contador'}/>
      <Boton texto={'IMC'}/>
      <Boton texto={'Producto'}/>
      <Boton texto={'Productos'}/>
    </View>
  )
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
    backgroundColor:colores.color1,
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
