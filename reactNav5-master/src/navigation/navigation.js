import React from 'react';
//import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Contact from '../screens/Contact';
import About from '../screens/About';
import HomeStack from './HomeStack';
import Store from '../screens/Store';
import Map from '../screens/Map';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return(
        <Tab.Navigator>
            {/* <Tab.Screen name = "home" component={Home} options={{title: 'Home'}}/> */}
            <Tab.Screen name="home" component={HomeStack} options={{title:'home Stack method'}}/>
            <Tab.Screen name = "contact" component={Contact} options={{title: 'Contact'}}/>
            <Tab.Screen name = "about" component={About} options={{title: 'Acerca de nosotros'}}/>
            <Tab.Screen name = "store" component={Store} options={{title: 'Tienda'}}/>
            <Tab.Screen name = "map" component={Map} options={{title: 'Acerca de mapa'}}/>
        </Tab.Navigator>
    )
    
}


/* const Stack = createStackNavigator();

export default function Navigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen name = "home" component={Home} options={{title: 'Home'}}/>
            <Stack.Screen name = "contact" component={Contact} options={{title: 'Contact'}}/>
            <Stack.Screen name = "about" component={About} options={{title: 'Acerca de nosotros'}}/>
        </Stack.Navigator>
    )

} */