import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Home(props){
    const {navigation} = props;
    return(
        <View>
            
            
            <Button title='ir a Contact' onPress={()=>navigation.navigate('contact')}/>
            <Button title='ir a About' onPress={()=>navigation.navigate('about')}/>
            <Button title='ir a Store' onPress={()=>navigation.navigate('store')}/>
            <Button title='ir a Map' onPress={()=>navigation.navigate('map')}/>
            <Button title='ir a Home' onPress={()=>navigation.navigate('home')}/>

        </View>
    )
}