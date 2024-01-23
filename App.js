import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.encabezado}>
        <Text style={styles.texto}>X</Text>
        <Text style={styles.texto}>Encabezado</Text>
        <Text style={styles.texto}>X</Text>
      </View>
      <View style={styles.cuerpo}>
        <Text style={styles.texto}>Cuerpo</Text>
      </View>
      <View style={styles.pie}>
        <Text style={styles.texto}>Pie</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
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
    backgroundColor:'#1373e8',
  },
  texto:{
    fontSize:25,
    color:'#fff'
  }
});
