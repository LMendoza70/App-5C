import {StyleSheet} from 'react-native'

export const estilos=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'stretch',
    justifyContent: 'center',

  },
    Boton:{
        flexDirection:'row',
        padding:5,
        borderBlockColor:'black',
        borderWidth:1,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center'
      },
      TextoB:{
        color:'white',
        fontSize:18
      },
      img:{
        height:30,
        width:30,
        marginRight:10
      },
      estiloCaja:{
        height:70,
        borderColor:'#000',
        borderWidth:2,
        borderRadius:8,
        margin:5,
        alignItems:'flex-end',
        justifyContent:'center',
        padding:10
      },
      TCaja:{
        fontSize:30
      },
      calcContainer:{
        flexDirection:'row',
        flexWrap:'wrap'
      }
})

export const colores={
color1: '#9da4c4',
color2: '#8189a8' ,
color3: '#666e8b',
color4: '#4a526f',
color5: '#2f3752'
}