import React from 'react';
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
import Map from '../screens/Map';
import Store from '../screens/Store';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function HomeStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name = "home" component={Home} options={{title: 'Home'}}/>
            <Stack.Screen name = "about" component={Home} options={{title: 'About'}}/>
            <Stack.Screen name = "contact" component={Home} options={{title: 'Contact'}}/>
            <Stack.Screen name = "map" component={Home} options={{title: 'Map'}}/>
            <Stack.Screen name = "store" component={Home} options={{title: 'Store'}}/>
        </Stack.Navigator>
    )
    
}