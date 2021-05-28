import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function Contact(props){
    const {navigation} = props;
    return(
        <View>
            <Text style={styles.view}>
                Estas en Contact
            </Text>

            <Button title='ir a Contact' onPress={()=>navigation.navigate('contact')}/>
            <Button title='ir a About' onPress={()=>navigation.navigate('about')}/>
            <Button title='ir a Store' onPress={()=>navigation.navigate('store')}/>
            <Button title='ir a Map' onPress={()=>navigation.navigate('map')}/>
            <Button title='ir a Home' onPress={()=>navigation.navigate('home')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    view : {
        marginTop: 80
    }
});