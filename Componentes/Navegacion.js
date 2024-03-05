import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Login from "./Login";
import Clima from './Clima'
import Productos from './Productos'
import Imc from './Imc'
import Producto from './Producto'
import Calculadora from './Calculadora'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {FontAwesome} from '@expo/vector-icons'

export const Index=createNativeStackNavigator()
export const Stackp=createNativeStackNavigator()
export const TabsHome= createBottomTabNavigator()
export const Drawer=createDrawerNavigator()


//navegacion principal (de login al home)
export const StackHome=()=>{
    return(
        <Index.Navigator>
            <Index.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <Index.Screen name="Home" component={MiDrawer} options={{headerShown:false}}/>
        </Index.Navigator>
    )
}

//navegacion secuandaria (tabs del home)
export const TabsH=()=>{
    return(
        <TabsHome.Navigator>
            <TabsHome.Screen name="Home2" component={Home} 
            options={{headerShown:false,
            tabBarIcon:()=>(<FontAwesome name="home" size={30} color={'#000'}/>)}}/>
            <TabsHome.Screen name="Clima" component={Clima}
            options={{tabBarIcon:()=>(<FontAwesome name="music" size={30} color={'#000'}/>)}}/>
            <TabsHome.Screen name="Productos" component={StackProduc}
            options={{tabBarIcon:()=>(<FontAwesome name="heart" size={30}/>)}}/>
        </TabsHome.Navigator>
    )
}

//navegacion de productos a producto detalle
export const StackProduc=()=>{
    return(
        <Stackp.Navigator>
            <Stackp.Screen name="Productos2" component={Productos} options={{headerShown:false}}/>
            <Stackp.Screen name="Producto" component={Producto} options={{headerShown:false}}/>
        </Stackp.Navigator>
    )
}

export const MiDrawer=()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabsH}/>
            <Drawer.Screen name="Calculadora" component={Calculadora}/>           
            <Drawer.Screen name="Imc" component={Imc}/>
        </Drawer.Navigator>
    )
}