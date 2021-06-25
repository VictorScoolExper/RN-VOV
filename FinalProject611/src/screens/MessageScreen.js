import React, { useEffect, useState } from 'react';
import { View, ScrollView,StyleSheet, FlatList, Text, TouchableOpacity, Alert} from 'react-native';
import BottomMessageScrn from '../componentes/BottomMessageScrn';

import firebase from '../utils/firebase';
import 'firebase/auth/';
import "firebase/firestore";
import { render } from 'react-dom';

const db = firebase.firestore();

const MessageScreen = () => {
    const [userId,setUserId] = useState('');
    const [messages,setMessages] = useState([]);
    

    //const queryMessages = firebase.firestore().collection("messages").
                          //doc("messages"+userId).collection(userId);

    async function  fecth (){
        
        try{
            await db.collection('users').onSnapshot((docs)=>{
                console.log("The size of colection is " + docs.size);
                setMessages(docs);
                //Lista();
                messages.forEach(doc=>{ console.log("this is user "+ doc.data().id) }); 
                console.log('You are in fetch function'); 
            });
            
        } catch (err){
          Alert.alert("There is something wrong!!!!", err.message);
        }
        
    }

    useEffect(()=>{
        getUserInfo();
        console.log("This is the user id"+ userId);
        console.log("This is a test");
        fecth();

    },[]);
    
    async function getUserInfo(){
        firebase.auth().onAuthStateChanged((response)=>{
          setUserId(response.uid);
          fecth(response.uid);
        });
    }


    const Item = () => (
        messages.map((item)=>{
            return(
                <View>
                    <Text>{item.data().id}</Text>
                </View>
            );
        })
    );

    
    

    return(
        <View style={styles.container}>
            <View style={styles.messages}>
                <Text>{userId}</Text>
                <ScrollView>
                {
                    //messages ? <Item/> : fecth()
                }
                    
                </ScrollView>
            </View>
            
            <BottomMessageScrn user = {userId}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        
    },
    messages : {
        height: '80%',
        width : '100%',
    },
    messageSender : {
        marginTop: 12,
        padding: 15,
        fontSize: 12,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 12,
    },
});

export default MessageScreen;