import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';

import firebase from '../utils/firebase';
import 'firebase/auth/';
import "firebase/firestore";

const db = firebase.firestore();

const MenuScreen = ( { navigation } ) =>{
    const [userType,setUserType] = useState(undefined);
    const [user, setUser] = useState(undefined);

    const logout = ()=>{
        firebase.auth().signOut();
    }

    useEffect(()=>{
        getUserType();
    },[]);

    async function getUserType() {
        try {
            await firebase.auth().onAuthStateChanged((user)=>{
                setUser(user.uid);
                db.collection('users').doc(user.uid).get().then((doc)=>{
                    console.log(doc.data().userType);
                    setUserType(doc.data().userType);
               });
            });
           
        } catch (err) {
          Alert.alert("There is something wrong!!!!", err.message);
        }
    }
    

    return(
        <View style={styles.container}>
            <Text>{user}</Text>
            <Text>{userType}</Text>
            <TouchableOpacity 
                onPress={()=>{
                    if(userType == 'user'){
                        console.log('hello');
                        navigation.navigate('MessageScreen');
                    } else if(userType == 'admin'){
                        navigation.navigate('MessageListScreen');
                    }
                }} 
                style={styles.button}
            >
                <Text style={styles.text}>Messages</Text>
            </TouchableOpacity>
    
            <TouchableOpacity 
                onPress={()=>{
                    navigation.navigate('HelpUsuario');
                }} 
                style={styles.button}
            >
                <Text style={styles.text}>Help</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={()=>{
                    logout();
                }} 
                style={styles.buttonSalir}
            >
                <Text style={styles.textSalir}>Exit</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      button: {
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 30,
        backgroundColor: 'orange',
        marginTop : 50,
        marginBottom : 20
      },
      text : {
          fontSize : 25,
      },
      textSalir : {
        fontSize : 15,
      },
      buttonSalir : {
          height : 40,
          width : 150,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          borderRadius: 30,
          backgroundColor: 'red',
          marginTop : 90,
      }
})

export default MenuScreen;